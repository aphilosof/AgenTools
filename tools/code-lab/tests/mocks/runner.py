#!/usr/bin/env python3
"""Harness runner: execute a student/solution program with the music/turtle/plot
bridge mocked, and report stdout, the recorded call events, and any error as
JSON. Reads the program source from stdin.

The recorded event shapes MUST match the in-browser worker prelude
(runtime-python.js) so check.type == "calls" behaves identically here and in the
browser:
  ['play', note, durSeconds, atSeconds] | ['sample', name, atSeconds]
  ['t_forward'|'t_back'|'t_left'|'t_right', value] | ['t_penup'|'t_pendown'|'t_home']
  ['t_color', name] | ['t_goto', x, y] | ['plot', xs, ys|None] | ['bar', labels, values]

Uses only the local interpreter — no network, no paid APIs.
"""
import sys, io, json, builtins, traceback

_events = []
_clock = [0.0, 120.0]  # [t_seconds, tempo_bpm]


def set_tempo(bpm): _clock[1] = float(bpm)
def sleep(beats=1.0): _clock[0] += float(beats) * (60.0 / _clock[1])
def play(note, dur=0.4): _events.append(['play', float(note), float(dur), _clock[0]])
def sample(name): _events.append(['sample', str(name), _clock[0]])
def play_pattern(notes, gap=0.5):
    for _n in notes:
        play(_n)
        sleep(gap)
def forward(d): _events.append(['t_forward', float(d)])
def backward(d): _events.append(['t_back', float(d)])
def left(a): _events.append(['t_left', float(a)])
def right(a): _events.append(['t_right', float(a)])
def penup(): _events.append(['t_penup'])
def pendown(): _events.append(['t_pendown'])
def pencolor(c): _events.append(['t_color', str(c)])
def goto(x, y): _events.append(['t_goto', float(x), float(y)])
def home(): _events.append(['t_home'])
def plot(xs, ys=None): _events.append(['plot', list(xs), (list(ys) if ys is not None else None)])
def bar(labels, values): _events.append(['bar', [str(_l) for _l in labels], [float(_v) for _v in values]])

for _f in (set_tempo, sleep, play, sample, play_pattern,
           forward, backward, left, right, penup, pendown, pencolor, goto, home, plot, bar):
    setattr(builtins, _f.__name__, _f)

src = sys.stdin.read()
buf = io.StringIO()
err = None
real_stdout = sys.stdout
try:
    sys.stdout = buf
    exec(compile(src, '<student>', 'exec'), {})
except BaseException as e:  # report the error type+message like the browser does
    sys.stdout = real_stdout
    err = ''.join(traceback.format_exception_only(type(e), e)).strip()
finally:
    sys.stdout = real_stdout

print(json.dumps({'stdout': buf.getvalue(), 'events': _events, 'error': err}))
