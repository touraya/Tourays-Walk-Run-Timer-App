# Tourays Fitness V6 Premium

## Major changes
- Modern MapLibre vector map using OpenFreeMap
- In-app walking route back to the recorded starting point
- Turn-by-turn steps shown inside the app
- Redesigned six-second multi-pose exercise demonstrations
- Health dashboard with weekly active minutes, calories, distance, BMI, pace and dated workout history
- No Apple Maps redirection
- Existing walk/run timer, GPS separation and live interval editing remain included

## Important limitation
Apple Health/HealthKit cannot be accessed by a GitHub Pages browser app. HealthKit requires a native iOS application and Apple entitlement. This version stores and calculates its own fitness metrics locally.

## Upload
Replace:
- index.html
- manifest.json
- icon.svg
- README.md

Keep style.css, app.js and sw.js deleted.

The map and route calculation require an internet connection.
