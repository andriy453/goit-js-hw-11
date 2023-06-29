import axios from 'axios';
import Notiflix from 'notiflix';
import { Refs } from './index';
import { showCart } from './render-html';

export const formEl = document.querySelector('.search-form');
export async function onSubmit(e) {
  console.log(formEl.elements.searchQuery.value);
  const searchValue = formEl.elements.searchQuery.value;
  const API_KEY = '37930046-394bc7b158c4cfc51204a831a';
  const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${searchValue}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=1`;
    const getApi = await fetch(URL);
      const hits = await getApi.json();
  if (!getApi.ok) {
    throw new Error(getApi.statusText);
  }

    if (hits.hits.length === 0) {
        return Notiflix.Notify.failure(
            'Sorry, there are no images matching your search query. Please try again.'
        );
    }
    else {
        Notiflix.Notify.success(
            `Hooray! We found ${hits.totalHits} images.`
        );
    }
    console.log(formEl);
    formEl.reset(); 
    return hits.hits
}





