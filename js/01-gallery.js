import {
  galleryItems
} from './gallery-items.js';

let index = 0;
const previewRef = document.querySelector('.gallery');

galleryItems.forEach((image, index) => {
  previewRef.insertAdjacentHTML(
    'beforeend',
    `<li><img class="gallery-image gallery__link" src="${image.preview}" alt="${image.description}" data-fullview="${image.original}" data-index="${index}" width="350"></li>`);
});

const imagesSet = document.querySelector(".gallery");
imagesSet.addEventListener("click", selectImage);

function selectImage(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`<img src=${event.target.dataset.fullview} width="600" height="400">
`, {
    onShow: (instance) => {
      document.addEventListener('keydown', function (event) {
        if (event.key === "Escape") {
          instance.close()
        }
      })
    }
  })
  instance.show();
}