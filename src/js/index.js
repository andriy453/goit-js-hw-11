
import {showCart} from './render-html'
import { fetchImages } from './api';
import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const input = document.querySelector('.search-form');
const btnSearch = document.querySelector('.btn-submit');
export const gallery = document.querySelector('.gallery');
const btnLoadMore = document.querySelector('.load-more');

let gallerySimpleLightbox = new SimpleLightbox('.photo-card a');



btnLoadMore.style.display = 'none';

let pageNumber = 1;

btnSearch.addEventListener('click', onSabmit);
 
function onSabmit(e) {

  e.preventDefault();
  cleanGallery();
  const trimmedValue = input.elements.searchQuery.value;
  if (trimmedValue !== '') {
    fetchImages(trimmedValue, pageNumber).then(foundData => {
      if (foundData.hits.length === 0) {
        Notiflix.Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      } else {
        showCart(foundData.hits);
        Notiflix.Notify.success(
          `Hooray! We found ${foundData.totalHits} images.`
        );
        btnLoadMore.style.display = 'block';
        gallerySimpleLightbox.refresh();
      }
    });
  }
  
}

btnLoadMore.addEventListener('click', LoadMore);
function LoadMore() {
  pageNumber++;
  const trimmedValue = input.elements.searchQuery.value;
  btnLoadMore.style.display = 'none';
  fetchImages(trimmedValue, pageNumber).then(foundData => {
    if (foundData.hits.length === 0) {
      Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    } else {
      showCart(foundData.hits);
      Notiflix.Notify.success(
        `Hooray! We found ${foundData.totalHits} images.`
      );
      btnLoadMore.style.display = 'block';
              gallerySimpleLightbox.refresh();
    }
  });
};

function cleanGallery() {
  gallery.innerHTML = '';
  pageNumber = 1;
  btnLoadMore.style.display = 'none';
}

