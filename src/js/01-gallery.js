// Add imports above this line
import { galleryItems } from './gallery-items';
// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const gallery = document.querySelector('.gallery');

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}" >
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>`;
    })
    .join('');
}

const listEl = document.querySelector('.gallery__item');
console.log(listEl);

gallery.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));

new SimpleLightbox('.gallery a', {
  captionsData: `alt`,
  captionDelay: 250,
  animationSpeed: 0,
});
console.log(galleryItems);
