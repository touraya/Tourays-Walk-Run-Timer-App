TOURAYS FITNESS V10 CORE — STAGE 49B
IPHONE VIDEO PLAYBACK HOTFIX

- Fixes exercise videos failing on Safari/iPhone after upload to GitHub Pages.
- MP4 files now use fast-start metadata for progressive playback.
- Service worker no longer intercepts or caches MP4 byte-range requests.
- Video URLs are cache-busted and resolved from the deployed page base URL.
- Autoplay rejection is no longer treated as a broken video; native play controls remain available.
- All eight local exercise motion guides are preserved.
- Cache/build version: 10492.
