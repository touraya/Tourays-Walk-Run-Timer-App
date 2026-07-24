Tourays Fitness V10 Core — Stage 18

This build removes the competing old routing code instead of adding another patch.

Fixed:
- Removed the hidden Stage 14 router that was forcing old Profile state after refresh.
- Removed the legacy Profile click hijacker.
- Added one V18 route key and one single-pass router.
- A new V18 first launch defaults to Home.
- Refresh stays on the exact selected menu after it has been selected.
- Profile now opens as one normal isolated screen, never as a layer over another page.
- Hidden screens cannot occupy space or scroll underneath Profile.
- No repeated restoration timers, preventing route flicker.

No workout, nutrition, food library, GPS, voice, health, planner or coach calculations changed.
Cache version: 10180
