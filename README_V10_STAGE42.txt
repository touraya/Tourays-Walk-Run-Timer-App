TOURAYS FITNESS V10 — STAGE 42

Direct Scanner Controller repair:
- Replaces the Scan quick-action button at runtime to remove stale/broken listeners.
- Opens the barcode modal immediately from the user tap.
- Requests the rear camera directly on iPhone/iPad.
- Uses ZXing when available, then BarcodeDetector as fallback.
- Keeps manual barcode entry available if permission or browser support fails.
- Updates app/service-worker cache to build 10420.
