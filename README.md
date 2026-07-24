Tourays Fitness V9 — Standalone Navigation Recovery 9200

The navigation was moved into its own independent JavaScript file.
This is the important difference from the previous hotfix: even if another app module has a runtime error, the menu and navigation can still initialize and work.

Fixed:
- Burger menu
- Menu close button and backdrop
- Header Home icon
- All bottom navigation buttons
- All buttons inside the full menu
- Older data-screen navigation buttons
- Browser back and forward navigation
- Strong iPhone touch, pointer and click fallbacks

Deploy every file from this ZIP, including navigation-9200.js.
After deployment, close the browser tab completely and reopen the site so Service Worker cache 9200 is loaded.
