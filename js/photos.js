// Load only photos explicitly referenced by an element.
document.querySelectorAll('[data-photo]').forEach(target => {
  const url = target.getAttribute('data-photo');
  const image = new Image();

  image.onload = () => {
    target.style.backgroundImage = `url("${url}")`;
    target.classList.add('has-photo');
  };
  image.onerror = () => console.error(`Unable to load photo "${url}".`);
  image.src = url;
});
