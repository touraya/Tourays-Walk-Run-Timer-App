Tourays Fitness V10 Core — Stage 9

Run screen visual glitch and wake-lock improvements.

Changes:
- Removed the large black toast bar for Start walking / Start running cues
- Voice and audio cues continue normally
- Replaced the dark-blue countdown flash with a light premium countdown card
- Strengthened Screen Wake Lock during an active workout
- Reacquires Wake Lock when returning to the app
- Releases Wake Lock while paused and restores it when resumed
- Recalculates the visible countdown after returning to the app

Important iPhone limitation:
A browser/PWA cannot guarantee continuous JavaScript timers or speech after the user manually locks the iPhone or fully backgrounds Safari. This build keeps the screen awake during the workout when the browser supports Screen Wake Lock, which prevents normal automatic locking.

No GPS, distance, calorie, cycle, interval, history, navigation or color logic changed.
Cache version: 10090
