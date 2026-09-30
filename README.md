# Fuel Log v2.0

Static Progressive Web App intended for GitHub Pages.

## Publish
Upload the CONTENTS of this folder to the root of a GitHub repository, then enable:
Settings > Pages > Deploy from a branch > main > /(root)

GitHub Pages will serve `index.html` over HTTPS.

## Privacy model
Fuel records, photos and GPS coordinates are stored locally using IndexedDB.
There is no application backend and no reverse-geocoding request.

## Important
The first OCR use requires internet access because Tesseract.js and its seven-segment OCR language model are loaded from public CDNs. Fuel Log does not intentionally upload the pump photo to those services.
