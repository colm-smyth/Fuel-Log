# Fuel Log v2.1

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


## Updating from v2.0
Replace the files in the repository with the v2.1 files and commit them.
After GitHub Pages deploys, open Fuel Log in Chrome and refresh once. The new
service worker will replace the old cached application shell.

v2.1 fixes an OCR/save race where a late OCR callback could display an OCR
failure after a successful save. It also adds PWA install diagnostics and
expanded manifest metadata.
