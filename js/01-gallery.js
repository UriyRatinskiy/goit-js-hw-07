import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryListEl = document.querySelector('.gallery');
const createGalleryList = galleryItems.map(
  ({ preview, original, description }) =>
      `
      <li class="gallery__item">
          <a class="gallery__link" href="large-image.jpg">
              <img
                  class="gallery__image"
                  src="${preview}"
                  data-source="${original}"
                  alt="${description}"
              />
          </a>
      </li>
      `
  ).join("");

  galleryListEl.innerHTML = createGalleryList;

const onGalleryClick = function (event) {
    event.preventDefault();

    const isGalleryImgEl = event.target.classList.contains('gallery__image');

    if (!isGalleryImgEl) {
        return;
    }

    const imgSrcForLibrary = event.target.dataset.source;

    const instance = basicLightbox.create(`
    <img src='${imgSrcForLibrary}' width="1280">
    `)

  instance.show()
  
  closeModalWindowByEscape(instance)
};

galleryListEl.addEventListener('click', onGalleryClick)

// Escape
function closeModalWindowByEscape(modalWindow) {
  const onEscapeKey = (event) => {
    // console.log(event.code)
    if (event.code === 'Escape') {
      modalWindow.close();
      window.removeEventListener('keydown', onEscapeKey)
    }
    return;
  };
  window.addEventListener('keydown', onEscapeKey);
}

console.log(galleryItems);

