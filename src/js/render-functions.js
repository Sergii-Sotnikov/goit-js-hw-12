import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

    const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    closeText: 'x',
    showCounter: true,
})

// export function createButtom(){
//   const newButton = document.createElement('button');
//   newButton.textContent = 'Load more';
//   newButton.classList.add('btn-load');
//   newButton.hidden = true;
//   document.body.append(newButton);

//   refs.btnLoadElem = newButton;
// }


export const refs = {
    formElem: document.querySelector(".form"),
    listElem: document.querySelector(".gallery"),
    btnLoadElem: document.querySelector(".btn-load")
};


// export function handlerFormSub(event){
//     event.preventDefault();
//     const formInput = event.target.elements["search-text"].value.trim();
//     event.target.reset();
//     return formInput;
// }


export function createGallery(images){
    const { hits } = images;
    const markup = hits.map(hit =>{
    return `<li class="item-gallery">
    <a href="${hit.largeImageURL}">
    <img class="gallery-image" 
      src="${hit.webformatURL}" 
      alt="${hit.tags}" 
      width="360px"
      height="152px">
    </a>
      <ul class="list-descriptions">
        <li class="name">
          <p class="title-text">Likes <span class="text">${hit.likes}</span></p>
        </li>
        <li class="name">
          <p class="title-text">Views <span class="text">${hit.views}</span></p>
        </li>
        <li class="name">
          <p class="title-text">Comments <span class="text">${hit.comments}</span></p>
        </li>
        <li class="name">
          <p class="title-text">Downloads <span class="text">${hit.downloads}</span></p>
        </li>
      </ul>
  </li>`
    }).join("");
    refs.listElem.insertAdjacentHTML("beforeend", markup);

    lightbox.refresh();

}

export function scroll(){
const firstItem = document.querySelector('.item-gallery');
    if (firstItem) {
        const cardHeight = firstItem.getBoundingClientRect().height;

        window.scrollBy({
            top: cardHeight * 2,
            behavior: 'smooth'
        });
    }
}

export function clearGallery() {
  refs.listElem.innerHTML = "";
}

export function showLoader(){
document.getElementById('loader-wrap').hidden = false;
}

export function hideLoader() {
  document.getElementById('loader-wrap').hidden = true;
}

export function showBtnMore (){
  refs.btnLoadElem.hidden = false;
}

export function hiddenBtnMore(){
  refs.btnLoadElem.hidden = true;
}



