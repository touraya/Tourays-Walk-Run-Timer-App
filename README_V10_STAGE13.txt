Tourays Fitness V10 Core — Stage 13

Root-cause fixes:
- Nutrition was outside the main .shell in the HTML flow, after a full-height app container.
- It is now moved inside the app shell before the bottom navigation.
- Nutrition therefore starts immediately below the app header instead of below an empty viewport.
- The selected menu is captured and saved before older event listeners can change it.
- Refreshing Home, Run, Indoor, Nutrition, Health, Plan, Goals, Analyze, Profile or Coach restores that exact menu.
- Only one screen is allowed to contribute layout height at a time.
- Safari anchor and scroll restoration interference is disabled for app screens.

No workout timing, GPS, voice, calories, nutrition calculations, barcode, planner or health logic changed.
Cache version: 10130
