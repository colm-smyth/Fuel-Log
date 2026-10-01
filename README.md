# Fuel Log v2.2 — Material / Android update

Static PWA for GitHub Pages.

## Update an existing GitHub Pages installation

Upload/replace the contents of this folder in the root of the existing
repository. In particular, replace:

- index.html
- sw.js
- icons/*

and ADD:

- manifest.json

`manifest.webmanifest` from an older release is no longer used and can be
deleted, although leaving it in the repository will not affect v2.2.

GitHub Pages should still be configured as:

Settings > Pages > Deploy from a branch > main > /(root)

After deployment, open the GitHub Pages URL in Chrome and refresh once.
v2.2 uses a new service-worker cache and a new manifest filename, specifically
to avoid stale PWA metadata from older releases.

## Privacy

Photos, fill-up data, odometer values and GPS coordinates are stored in
IndexedDB in the user's browser. There is no Fuel Log backend and no reverse
geocoding request.

## v2.2 fixes

- OCR success is now sticky: once a valid sale/litres/price set is accepted,
  a later OCR exception cannot replace it with an OCR-failed warning.
- Save uses the valid values visible on screen and invalidates late OCR callbacks.
- New Material/Android-inspired UI with top app bar, navigation drawer,
  bottom navigation and floating action button.
- Minimal new manifest.json and new icon files for cleaner Android PWA
  installability.
