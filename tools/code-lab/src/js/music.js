/* music.js — the Sonic Pi-style engine on Web Audio: play, sleep,
   play_pattern, sample, set_tempo. Virtual-timeline scheduler (sleep advances
   logical time; playback scheduled after run). Records the call sequence for
   check.type === "calls". Identical surface for Python (via bridge) and JS.

   Division of labour: the play/sleep/sample functions live in the Pyodide
   worker (see runtime-python.js), where they record timed events on a virtual
   clock. After a run, that event list is handed here and scheduled on Web Audio
   in real time. Events are tuples from Python:
     ['play', midiNote, durSeconds, atSeconds]
     ['sample', name, atSeconds]
   The AudioContext must be unlock()ed inside the run click (a user gesture). */

(function () {
  "use strict";
  var CL = (window.CL = window.CL || {});

  var ctx = null;

  function ensureCtx() {
    if (!ctx) {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      ctx = new AC();
    }
    if (ctx.state === "suspended" && ctx.resume) ctx.resume();
    return ctx;
  }

  function midiToFreq(note) {
    return 440 * Math.pow(2, (note - 69) / 12);
  }

  function playTone(ac, freq, at, dur) {
    var osc = ac.createOscillator();
    var gain = ac.createGain();
    osc.type = "triangle";
    osc.frequency.value = freq;
    var rel = Math.max(0.08, dur);
    gain.gain.setValueAtTime(0.0001, at);
    gain.gain.linearRampToValueAtTime(0.25, at + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, at + rel);
    osc.connect(gain);
    gain.connect(ac.destination);
    osc.start(at);
    osc.stop(at + rel + 0.03);
  }

  function playSample(ac, at, name) {
    if (name === "kick") {
      var osc = ac.createOscillator();
      var g = ac.createGain();
      osc.frequency.setValueAtTime(150, at);
      osc.frequency.exponentialRampToValueAtTime(50, at + 0.12);
      g.gain.setValueAtTime(0.7, at);
      g.gain.exponentialRampToValueAtTime(0.001, at + 0.15);
      osc.connect(g);
      g.connect(ac.destination);
      osc.start(at);
      osc.stop(at + 0.16);
      return;
    }
    // snare / hat / anything else: a short shaped noise burst
    var dur = name === "snare" ? 0.18 : 0.06;
    var len = Math.floor(ac.sampleRate * dur);
    var buf = ac.createBuffer(1, len, ac.sampleRate);
    var data = buf.getChannelData(0);
    for (var i = 0; i < len; i++) data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2);
    var src = ac.createBufferSource();
    src.buffer = buf;
    var gain = ac.createGain();
    gain.gain.value = 0.35;
    src.connect(gain);
    gain.connect(ac.destination);
    src.start(at);
  }

  CL.music = {
    midiToFreq: midiToFreq,
    // Create/resume the AudioContext. Call this synchronously inside a user
    // gesture (the run click) so later scheduling is allowed to make sound.
    unlock: function () { ensureCtx(); },
    schedule: function (events) {
      if (!events || !events.length) return;
      var ac = ensureCtx();
      if (!ac) return;
      var t0 = ac.currentTime + 0.06;
      events.forEach(function (e) {
        if (e[0] === "play") playTone(ac, midiToFreq(e[1]), t0 + (e[3] || 0), e[2] || 0.4);
        else if (e[0] === "sample") playSample(ac, t0 + (e[2] || 0), e[1]);
      });
    },
  };
})();
