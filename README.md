Tourays Fitness V9 — Navigation Cleanup & App-Wide QA Step 1

Added:
- One consistent global header
- Mobile bottom navigation
- Full app menu with all major modules
- Unified routing for old and new screen IDs
- Browser back/forward support through URL hashes
- Correct active navigation states
- Automatic screen hiding and opening
- Escape and backdrop menu closing
- Route-change events for app modules
- Runtime navigation QA report
- Static duplicate-ID and target validation
- Updated PWA cache version 9150

Main routes:
- Home
- Indoor Workouts
- Walk & Run
- Planner
- Progress & Analytics
- AI Coach
- Nutrition
- Profile & Settings

Validation completed:
- Main JavaScript syntax passed
- Service Worker syntax passed
- Manifest JSON passed
- Static navigation report included as navigation-qa-report.json

Recommended next build: Functional QA Step 2 for saving, editing, deleting, offline behavior and cross-module synchronization.
