Mock music/turtle/plot modules for fast local checking:
- Python mocks (music.py, turtle shim, plot.py) used with local python3
- Node mocks mirroring the same recorded-call format
Both must record calls in the exact shape the in-browser engines record,
so check.type === "calls" behaves identically in tests and in the browser.
