/* turtle.js — canvas turtle matching the standard module's core commands
   (forward, back, left, right, penup, pendown, pencolor, goto, speed).
   Records call sequences for checking. Exposed to Python via the bridge.

   Like the music engine, the commands run in the Pyodide worker and record
   events; this module replays them onto a canvas. Events (tuples from Python):
     ('t_forward', dist) ('t_back', dist) ('t_left', deg) ('t_right', deg)
     ('t_penup',) ('t_pendown',) ('t_color', name) ('t_goto', x, y) ('t_home',)
   Heading 0 = east, angles increase counter-clockwise, y points up (standard
   turtle), origin at canvas center. */

(function () {
  "use strict";
  var CL = (window.CL = window.CL || {});

  function tok(name, fallback) {
    var v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    return v || fallback;
  }

  CL.turtle = {
    render: function (canvas, cmds) {
      var ctx = canvas.getContext("2d");
      var W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = tok("--panel", "#fff");
      ctx.fillRect(0, 0, W, H);

      var x = W / 2, y = H / 2, heading = 0, pen = true, color = tok("--text", "#000");
      ctx.lineWidth = 2;
      ctx.lineCap = "round";

      function moveTo(nx, ny) {
        if (pen) {
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(nx, ny);
          ctx.strokeStyle = color;
          ctx.stroke();
        }
        x = nx;
        y = ny;
      }

      cmds.forEach(function (c) {
        var k = c[0];
        if (k === "t_forward" || k === "t_back") {
          var d = c[1] * (k === "t_back" ? -1 : 1);
          var r = (heading * Math.PI) / 180;
          moveTo(x + d * Math.cos(r), y - d * Math.sin(r));
        } else if (k === "t_left") {
          heading += c[1];
        } else if (k === "t_right") {
          heading -= c[1];
        } else if (k === "t_penup") {
          pen = false;
        } else if (k === "t_pendown") {
          pen = true;
        } else if (k === "t_color") {
          color = c[1];
        } else if (k === "t_goto") {
          moveTo(W / 2 + c[1], H / 2 - c[2]);
        } else if (k === "t_home") {
          moveTo(W / 2, H / 2);
          heading = 0;
        }
      });
    },
  };
})();
