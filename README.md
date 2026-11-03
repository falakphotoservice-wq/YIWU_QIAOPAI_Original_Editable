# YIWU QIAOPAI CLOTHING FACTORY — Original design, editable structure

This project is based **directly** on the `index.html` file you supplied, not a replacement design.
The existing colors, section structure, layout, bilingual English/Arabic text, links and responsive breakpoints were preserved.

## Requested adjustments only

1. Removed the square `QP` logo in the top header and its favicon reference. The existing company name remains as editable text.
2. Removed all visible titles, descriptions, arrows and counter labels attached to the **two clothing image boxes**. These boxes now show only an image (or the original garment drawing until an image is provided).
3. Removed gallery image captions, including `QIAOPAI / 01` etc.
4. Removed decorative Q monograms from the About and Contact backgrounds (logo-like symbols only).
5. Split the original source into independent files for easier editing in VS Code.

## Run locally

Open the folder in **VS Code** and open `index.html` in a browser. For best results, install and use the VS Code **Live Server** extension (right-click `index.html` → Open with Live Server). No npm install, build system, backend, or framework needed.

## Folder structure

- `index.html` — original page HTML and its sections (Home, Collections, Gallery, About, Contact)
- `css/01-base.css` — base styles/colors
- `css/02-header.css` — original header and logo text styles
- `css/03-hero.css` — original top/hero section
- `css/04-collections.css` — collection image boxes
- `css/05-about.css` — original About section
- `css/06-contact.css` — original Contact section and footer
- `css/07-image-handling.css` — original image loading styles
- `css/08-arabic.css` — original Arabic direction styles
- `css/09-responsive.css` — original device sizes
- `css/10-gallery.css` — gallery styling
- `css/11-gallery-responsive.css` — responsive gallery styling
- `css/12-requested-edits.css` — **only** your requested visual removals
- `css/13-desktop-responsive.css` — responsive hero sizing for laptop and desktop viewports
- `js/translations.js` — edit Arabic and English page wording
- `js/navigation.js` — menu and language toggle
- `js/gallery-config.js` — list gallery photo paths to display
- `js/gallery.js` — gallery rendering without captions
- `js/photos.js` — loads local image files
- `images/` — add your own photographs

## Add your photos

Drop files in `images/` with these names:

| File | Display location |
| --- | --- |
| `product-01.jpg` through `product-07.jpg` | Product photo slots |
| `hero.jpg` | Optional hero photo; add `data-photo="images/hero.jpg"` to `.hero-visual` in `index.html` |
| `factory.jpg` | Optional factory/about photo; add `data-photo="images/factory.jpg"` to `.about-visual` in `index.html` |
| `gallery-01.jpg`, `gallery-02.jpg`, etc. | Optional gallery photos; add their paths to `GALLERY_IMAGES` in `js/gallery-config.js` |

The product photos listed above load automatically. Hero and factory photos are optional; add their `data-photo` attributes in `index.html` when those files are available. Gallery photos appear after their paths are added to `GALLERY_IMAGES` in `js/gallery-config.js`. Missing optional photos are not requested, so they do not produce broken-image errors.

## Edit the name

The brand name is plain text in `index.html` near the `<header>` and `<footer>`. You may also change company information in `js/translations.js` to keep the Arabic/English versions consistent.

## What was deliberately NOT changed

Colors, navigation, section order, typefaces, hero layout, responsive styling, original contact details, layout proportions and the overall visual identity remain based on your original file.
