Tourays Fitness V10 Core — Stage 24

Fixed the live barcode scanner root cause:
- The scanner dialog/video now exists before the scanner JavaScript initializes.
- Tapping Scan barcode live opens the rear camera immediately.
- Uses the browser's native BarcodeDetector where available.
- Uses the existing in-app EAN/UPC decoder as the iPhone fallback.
- Continuous live scanning; no photo must be taken.
- Detects common EAN, UPC, Code 128, Code 39 and ITF formats where supported.
- Shows a full-screen scanning frame on phones.
- Provides clear camera-permission messages and manual barcode fallback.

Also fixed:
- Removed the unused Nutrition back arrow.

No nutrition calculations, food library, workout, GPS, voice, health, profile, planner or coach logic changed.
Cache version: 10240
