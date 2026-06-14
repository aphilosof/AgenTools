/* plot.js — tiny chart helper: plot(xs, ys) and bar(labels, values) drawing
   to canvas, themed via CSS custom properties. Records calls for checking.
   Mirrored Python/JS surface.

   Commands run in the Pyodide worker and record events; this module draws the
   most recent chart onto the canvas. Events (tuples from Python):
     ('plot', xs, ys|null)  — line chart; if ys is null, xs is plotted vs index
     ('bar', labels, values) — bar chart */

(function () {
  "use strict";
  var CL = (window.CL = window.CL || {});

  function tok(name, fallback) {
    var v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    return v || fallback;
  }
  function maxOf(arr, floor) { return Math.max.apply(null, arr.concat([floor])); }
  function minOf(arr, ceil) { return Math.min.apply(null, arr.concat([ceil])); }

  CL.plot = {
    render: function (canvas, cmds) {
      var ctx = canvas.getContext("2d");
      var W = canvas.width, H = canvas.height, pad = 38;
      var axis = tok("--muted", "#888"), accent = tok("--accent", "#c0392b"), txt = tok("--text", "#000");
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = tok("--panel", "#fff");
      ctx.fillRect(0, 0, W, H);
      ctx.font = "11px monospace";

      // axes
      ctx.strokeStyle = axis;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(pad, pad / 2);
      ctx.lineTo(pad, H - pad);
      ctx.lineTo(W - pad / 2, H - pad);
      ctx.stroke();

      var cmd = cmds[cmds.length - 1]; // draw the latest chart
      if (!cmd) return;

      if (cmd[0] === "bar") {
        var labels = cmd[1], vals = cmd[2];
        var max = maxOf(vals, 1), n = vals.length || 1;
        var slot = (W - pad - pad / 2) / n;
        vals.forEach(function (v, i) {
          var bh = (v / max) * (H - pad - pad / 2);
          var bx = pad + i * slot + slot * 0.15;
          var bw = slot * 0.7;
          ctx.fillStyle = accent;
          ctx.fillRect(bx, H - pad - bh, bw, bh);
          ctx.fillStyle = txt;
          ctx.fillText(String(labels[i]), bx, H - pad + 13);
        });
      } else {
        // line chart
        var xs = cmd[1], ys = cmd[2];
        if (!ys) { ys = xs; xs = xs.map(function (_, i) { return i; }); }
        var maxX = maxOf(xs, xs[0]), minX = minOf(xs, xs[0]);
        var maxY = maxOf(ys, 0), minY = minOf(ys, 0);
        function px(v) { return pad + (maxX === minX ? 0 : (v - minX) / (maxX - minX)) * (W - pad - pad / 2); }
        function py(v) { return (H - pad) - (maxY === minY ? 0 : (v - minY) / (maxY - minY)) * (H - pad - pad / 2); }
        ctx.strokeStyle = accent;
        ctx.lineWidth = 2;
        ctx.beginPath();
        xs.forEach(function (x, i) {
          var X = px(x), Y = py(ys[i]);
          if (i === 0) ctx.moveTo(X, Y);
          else ctx.lineTo(X, Y);
        });
        ctx.stroke();
      }
    },
  };
})();
