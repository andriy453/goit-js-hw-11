import { gallery } from './index';
import { lightbox } from './index'
import {cleanGallery} from './index'
export function showCart(hits) {
  // cleanGallery();
  
  const html = hits.map(hit =>
      `<div class="photo-card">
        <a href='${hit.largeImageURL}'>  <img data-source="${hit.webformatURL}"  src="${hit.webformatURL}" alt="${hit.tags}" loading="lazy" title="${hit.tags}"/></a>
  <div class="info">
    <div class="info-item">
    <p>Likes</p>
      <b>${hit.likes}</b>
    </div>
    <div class="info-item">
    <p>Views</p>
      <b>${hit.views}</b>
    </div>
    <div class="info-item">
    <p>Comments</p>
      <b>${hit.comments}</b>
    </div>
    <div class="info-item">
    <p>Downloads</p>
      <b>${hit.downloads}</b>
    </div>
  </div>
  </div>`
    ).join('');
  gallery.innerHTML += html;

}
