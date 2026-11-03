// Gallery images are listed explicitly in gallery-config.js.
const galleryGrid = document.getElementById('gallery-grid');
const gallerySection = document.getElementById('gallery');
const galleryNav = document.getElementById('gallery-nav');

GALLERY_IMAGES.forEach((file, index) => {
  const number = index + 1;
  const candidate = new Image();
  candidate.decoding = 'async';
  candidate.alt = `QIAOPAI clothing collection photo ${number}`;
  candidate.onload = () => {
    const card = document.createElement('figure');
    card.className = 'lookbook-card';
    card.appendChild(candidate);
    card.dataset.order = String(number);
    const next = Array.from(galleryGrid.children)
      .find(element => Number(element.dataset.order) > number);
    galleryGrid.insertBefore(card, next || null);
    gallerySection.hidden = false;
    galleryNav.hidden = false;
  };
  candidate.onerror = () => console.error(`Unable to load gallery photo "${file}".`);
  candidate.src = file;
});
