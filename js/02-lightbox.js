import {
  galleryItems
} from './gallery-items.js';

// Change code below this line
console.log(galleryItems);
const galleryBox = document.querySelector(".gallery");

for (const galleryItem of galleryItems) {
  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  galleryLink.href = galleryItem.original;

  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery__image");
  galleryImage.src = galleryItem.preview;
  galleryImage.alt = galleryItem.description;
  galleryBox.append(galleryLink);
  galleryLink.append(galleryImage);
};

const lightbox = new SimpleLightbox(".gallery a", {});