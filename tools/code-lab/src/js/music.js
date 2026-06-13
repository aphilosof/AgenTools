/* music.js — the Sonic Pi-style engine on Web Audio: play, sleep,
   play_pattern, sample, set_tempo. Virtual-timeline scheduler (sleep advances
   logical time; playback scheduled after run). Records the call sequence for
   check.type === "calls". Identical surface for Python (via bridge) and JS. */
