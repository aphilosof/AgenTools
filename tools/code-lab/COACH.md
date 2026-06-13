# COACH.md — the one-page coach guide

The course succeeds or fails in a weekly fifteen minutes. Content quality predicts learning; the human loop predicts completion.

## The ritual
Once a week, same day, 15 minutes: he shows you what he built, and from Season 2, the Codex entries he wrote that week. He drives, you ask. Good questions: what does this line do, what would happen if you changed this number, play me the thing you made. End every session by letting him show off, not by assigning.

## Assigning challenges
Open coach mode, pick any unlocked challenge, assign (or just tell him the code, like W4-C2). One at a time. Boss challenges check retention; leave their timer off unless he asks for it.

## When he is stuck
The hint ladder comes first, then you. You are the adaptive tutor of last resort, and coach mode shows you his current code and error. Run the protocol with him, in this order:
1. Read me the bottom line of the error. What type is it?
2. What line does it point to?
3. What did you expect that line to do?
4. Step through it with the stepper. Where does the variable stop doing what you expected?

Never type for him. Never fix his indentation. The struggle at the keyboard is the lesson.

## When to slow down
Two stalled lessons in a row means drop back, not push forward: use the knowledge map to revisit the lesson that introduced the shaky concept, or assign an easier arena challenge on the same concept for a win.

## What the stars mean
One star: solved. Two: solved without hints. Three: solved under par. Stars are for him, not for you; never compare weeks.

## The AI rule (from Season 2, or whenever he meets it)
AI as explainer, never as author. Pasting an error and asking why is legitimate. Pasting the exercise and asking for the code is not. After his code works, asking AI to review it is one of the best learning moves available. State the rule once, early, and enforce it gently but always.

## Accounts and privacy
Every account (GitHub, any cloud service) is parent-owned until he is 13, which GitHub's terms require anyway. The Room Station's sensor history is household presence data: the local-server setup keeps it inside the house and is a first-class choice, not a fallback.

## IoT addendum (Season 2, hardware module)
Physical debugging fails differently from software. A dead jumper wire or a sensor that arrived broken can eat a whole session, and he cannot yet tell a hardware fault from a code bug. When he is stuck on hardware, run the hardware protocol with him before looking at code: is it powered, does the wiring match the diagram, does the component work in isolation (swap in a spare), and only then is it the code. The kit ships with spares for exactly this; use them to isolate, not just to replace. Order spares a month ahead with the kit. Two reminders that prevent most pain: power the board only over USB, and check LED and sensor polarity before powering on. If the board does not appear at all, the usual causes are a data-only USB cable, a missing driver, or needing to re-flash MicroPython; that is a known list, not a mystery.

## Security season addendum (Season 3)
This season is the most likely to go solitary and screen-locked, which is the condition under which curiosity drifts unseen. The weekly ritual changes shape: less show-and-tell, more open conversation about what he is finding interesting and where his curiosity is pulling. Your most important instrument here is not checking his work, it is staying close enough to the curiosity to steer it.

You are the disclosure channel. The standing rule, set in Module 0 and meant seriously: anything he discovers about a real system, anyone's but his own, comes to you first, before he does anything else. Be the trusted first call, not the authority he routes around. When he brings you something real, the answer is never "probe it more to be sure." It is: stop, write down what you saw and nothing further, and decide together whether and how to report it.

The Wi-Fi conversation, scripted, because it will come up. When he learns to read network traffic he will realize he could read other people's on shared Wi-Fi at a cafe or school. Say this, roughly: "On a network you do not own, watching other people's traffic is wiretapping. It is illegal, it applies to you even at thirteen, and curiosity is not a defense. Your own network at home is your lab. Theirs is off limits, full stop. If you ever want to try something, it goes through me first." Calm, specific, once, and then revisited if his interest deepens.

The legal reality, said plainly at least once: unauthorized access is a crime with consequences that reach minors. The exact same skill is a paid career when authorized and a criminal record when not. The only difference is permission.

## The finish line
The course ends with the epilogue: one project he chooses, with no rails, judged only against a rubric and you. Everything before it exists to make that possible.
