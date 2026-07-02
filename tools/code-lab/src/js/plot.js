/* plot.js — tiny chart helper: plot(xs, ys), dotplot(xs, ys), and
   bar(labels, values) drawing to canvas, themed via CSS custom properties.
   Records calls for checking. Mirrored Python/JS surface.

   Commands run in the Pyodide worker and record events; this module draws the
   most recent chart onto the canvas. Events (tuples from Python):
     ('plot', xs, ys|null)     — line chart with a connecting line + dots;
                                  if ys is null, xs is plotted vs index. Use
                                  for sequential/trend data where connecting
                                  the points is meaningful (time, order).
     ('dotplot', xs, ys|null) — dots only, no connecting line. Use for
                                  paired/unordered comparisons where a line
                                  would wrongly imply a trend between points.
     ('bar', labels, values)   — bar chart, for categorical comparisons
     ('piano_roll', notes, starts, durations)
                               — each note a block: pitch up the y-axis (MIDI),
                                  time across the x-axis. starts[i]/durations[i]
                                  give the block's left edge and width. */

(function () {
  "use strict";
  var CL = (window.CL = window.CL || {});

  function tok(name, fallback) {
    var v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    return v || fallback;
  }
  function maxOf(arr, floor) { return Math.max.apply(null, arr.concat([floor])); }
  function minOf(arr, ceil)  { return Math.min.apply(null, arr.concat([ceil])); }

  function niceNum(v) {
    if (v === 0) return "0";
    if (Math.abs(v) >= 1000) return (v / 1000).toFixed(1).replace(/\.0$/, "") + "k";
    if (Number.isInteger(v)) return String(v);
    return v.toFixed(1);
  }

  function drawYTicks(ctx, pad, H, minV, maxV, axis, txt) {
    var range = maxV - minV || 1;
    ctx.textAlign = "right";
    ctx.fillStyle = txt;
    for (var t = 0; t <= 4; t++) {
      var v   = minV + range * t / 4;
      var yp  = (H - pad) - (v - minV) / range * (H - pad - pad / 2);
      ctx.fillText(niceNum(v), pad - 5, yp + 4);
      ctx.strokeStyle = axis;
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.moveTo(pad - 3, yp);
      ctx.lineTo(pad, yp);
      ctx.stroke();
    }
  }

  CL.plot = {
    render: function (canvas, cmds) {
      var ctx = canvas.getContext("2d");
      var W = canvas.width, H = canvas.height, pad = 38;
      var axis = tok("--muted", "#888"), accent = tok("--accent", "#c0392b"), txt = tok("--text", "#000");
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = tok("--panel", "#fff");
      ctx.fillRect(0, 0, W, H);
      ctx.font = "11px monospace";

      // axis lines
      ctx.strokeStyle = axis;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(pad, pad / 2);
      ctx.lineTo(pad, H - pad);
      ctx.lineTo(W - pad / 2, H - pad);
      ctx.stroke();

      var cmd = cmds[cmds.length - 1];
      if (!cmd) return;

      if (cmd[0] === "bar") {
        var labels = cmd[1], vals = cmd[2];
        var max = maxOf(vals, 1), n = vals.length || 1;
        var slot = (W - pad - pad / 2) / n;

        drawYTicks(ctx, pad, H, 0, max, axis, txt);

        vals.forEach(function (v, i) {
          var bh = (v / max) * (H - pad - pad / 2);
          var bx = pad + i * slot + slot * 0.15;
          var bw = slot * 0.7;
          ctx.fillStyle = accent;
          ctx.fillRect(bx, H - pad - bh, bw, bh);
          ctx.fillStyle = txt;
          ctx.textAlign = "left";
          ctx.fillText(String(labels[i]), bx, H - pad + 13);
        });

      } else if (cmd[0] === "piano_roll") {
        // note blocks: pitch (MIDI) up the y-axis, time across the x-axis
        var notes = cmd[1], starts = cmd[2], durs = cmd[3];
        var ends = notes.map(function (_, i) { return (starts[i] || 0) + (durs[i] || 0); });
        var maxT = maxOf(ends, 1);
        // pad the pitch range by a semitone each side so edge blocks aren't flush to the axes
        var loP = minOf(notes, notes[0] !== undefined ? notes[0] : 0) - 1;
        var hiP = maxOf(notes, notes[0] !== undefined ? notes[0] : 0) + 1;
        var rangeP = hiP - loP || 1, rangeT = maxT || 1;
        var plotH = H - pad - pad / 2;
        function pxT(t) { return pad + (t / rangeT) * (W - pad - pad / 2); }
        function pyP(p) { return (H - pad) - (p - loP) / rangeP * plotH; }

        drawYTicks(ctx, pad, H, loP, hiP, axis, txt);

        // time tick labels along the x-axis (4 divisions), matching drawYTicks' style
        ctx.textAlign = "center";
        for (var tt = 0; tt <= 4; tt++) {
          var tv = maxT * tt / 4;
          var tx = pxT(tv);
          ctx.fillStyle = txt;
          ctx.fillText(niceNum(tv), tx, H - pad + 13);
          ctx.strokeStyle = axis;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(tx, H - pad);
          ctx.lineTo(tx, H - pad + 3);
          ctx.stroke();
        }

        // one block per note; height is a fraction of a pitch row so rows read apart
        var rowH = plotH / rangeP;
        var blockH = Math.max(rowH * 0.7, 3);
        ctx.fillStyle = accent;
        notes.forEach(function (p, i) {
          var x0 = pxT(starts[i] || 0);
          var bw = Math.max(pxT((starts[i] || 0) + (durs[i] || 0)) - x0, 1);
          ctx.fillRect(x0, pyP(p) - blockH / 2, bw, blockH);
        });

      } else {
        // line chart ("plot") or dot-only scatter ("dotplot") — same axes, different marks
        var isDotplot = cmd[0] === "dotplot";
        var xs = cmd[1], ys = cmd[2];
        if (!ys) { ys = xs; xs = xs.map(function (_, i) { return i; }); }
        var maxX = maxOf(xs, xs[0] !== undefined ? xs[0] + 1 : 1);
        var minX = minOf(xs, xs[0] !== undefined ? xs[0] : 0);
        var maxY = maxOf(ys, 1), minY = minOf(ys, 0);
        var rangeX = maxX - minX || 1, rangeY = maxY - minY || 1;
        function px(v) { return pad + (v - minX) / rangeX * (W - pad - pad / 2); }
        function py(v) { return (H - pad) - (v - minY) / rangeY * (H - pad - pad / 2); }

        drawYTicks(ctx, pad, H, minY, maxY, axis, txt);

        // x-axis tick labels when ≤ 12 points (avoids crowding on long series)
        if (xs.length <= 12) {
          ctx.textAlign = "center";
          ctx.fillStyle = txt;
          xs.forEach(function (x) {
            var xp = px(x);
            ctx.fillText(niceNum(x), xp, H - pad + 13);
            ctx.strokeStyle = axis;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(xp, H - pad);
            ctx.lineTo(xp, H - pad + 3);
            ctx.stroke();
          });
        }

        // connecting line — only for "plot" (a trend/sequence); a dotplot never
        // implies order or connection between points, so it draws no line at all
        if (!isDotplot) {
          ctx.strokeStyle = accent;
          ctx.lineWidth = 2;
          ctx.beginPath();
          xs.forEach(function (x, i) {
            var X = px(x), Y = py(ys[i]);
            if (i === 0) ctx.moveTo(X, Y);
            else         ctx.lineTo(X, Y);
          });
          ctx.stroke();
        }

        // dots at each data point (both chart types)
        ctx.fillStyle = accent;
        xs.forEach(function (x, i) {
          ctx.beginPath();
          ctx.arc(px(x), py(ys[i]), isDotplot ? 4 : 3, 0, 2 * Math.PI);
          ctx.fill();
        });
      }
    },
  };
})();
