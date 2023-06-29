import Notiflix from 'notiflix';
import { onSubmit } from './api.js';
import axios from 'axios';
import { showCart } from './render-html.js';
import { formEl } from './api.js';
import { fetchImages } from './api.js';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export let lightbox = new SimpleLightbox('.photo-card a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

export const Refs = {
  gallery: document.querySelector('.gallery'),
  button: document.querySelector('.btn-submit'),
  input: document.querySelector('.inpun-Search'),
  btnLoadMore: document.querySelector('.load-more'),
  btnForm: document.querySelector('.btn-submit'),
};

formEl.addEventListener('submit', onSubmit);
Refs.btnForm.addEventListener('click', e => {
    e.preventDefault();
})




Refs.btnLoadMore.style.display = 'none';

let pageNumber = 1;

// btnSearch.addEventListener('click', e => {
//   e.preventDefault();
//   cleanGallery();
//   const trimmedValue = input.value.trim();
//   if (trimmedValue !== '') {
//     fetchImages(trimmedValue, pageNumber).then(foundData => {
//       if (foundData.hits.length === 0) {
//         Notiflix.Notify.failure(
//           'Sorry, there are no images matching your search query. Please try again.'
//         );
//       } else {
//         renderImageList(foundData.hits);
//         Notiflix.Notify.success(
//           `Hooray! We found ${foundData.totalHits} images.`
//         );

//         Refs.btnLoadMore.style.display = 'block';
//         gallerySimpleLightbox.refresh();
//       }
//     });
//   }
// });

Refs.btnLoadMore.addEventListener('click', () => {
  pageNumber++;
  Refs.btnLoadMore.style.display = 'none';
  onSubmit(pageNumber).then(foundData => {
    if (foundData.hits.length === 0) {
      Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    } else {
      renderImageList(foundData.hits);
      Notiflix.Notify.success(
        `Hooray! We found ${foundData.totalHits} images.`
      );
      btnLoadMore.style.display = 'block';
    }
  });
});

//  export function cleanGallery() {
//   gallery.innerHTML = '';
//   pageNumber = 1;
//   Refs.btnLoadMore.style.display = 'none';
// }
