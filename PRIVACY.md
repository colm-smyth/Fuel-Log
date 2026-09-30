# Fuel Log privacy

Fuel Log is designed as a local-first PWA.

Personal data that remains in the user's browser/device:
- pump photos
- fill-up history
- litres, sale amount and unit price
- odometer values and notes
- GPS latitude/longitude

The application does not contain a backend, user account system, analytics SDK, or upload endpoint.
GPS coordinates are not sent to a reverse-geocoding or map service.

The application code itself is public when hosted on GitHub Pages.
OCR is performed in the browser. The OCR JavaScript/model assets are loaded from public CDNs on first use; the pump image is supplied to the local browser OCR engine and is not intentionally uploaded by Fuel Log.

Users should export backups before clearing browser/site data or moving to a new phone.
