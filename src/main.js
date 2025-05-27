import { getImagesByQuery } from "./js/pixabay-api" ;
import iziToast from 'izitoast';
import { hideLoader, showLoader, clearGallery, createGallery, handlerFormSub, refs, showBtnMore, hiddenBtnMore } from "./js/render-functions";


let page = 1;
let per_page = 15 ;
let lastQuery = "";

// createButtom();
hiddenBtnMore();


refs.formElem.addEventListener('submit', async (event) => {
  hiddenBtnMore();
  event.preventDefault();
  clearGallery();
  showLoader()
  const query = handlerFormSub(event);
  lastQuery = query;
  try {
    const data = await getImagesByQuery(query, page, per_page)
    hideLoader();
    if(data.hits.length === 0){
        iziToast.show({
          title: '',
          titleColor: '#FFFFFF',
          titleSize: '16px',
          backgroundColor: '#EF4040',
          iconUrl: './img/bi_x-octagon.svg',
          message: 'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          color: 'red',
          messageColor: '#FFFFFF',
          messageSize: '16px',
          closeOnEscape: true,
          closeOnClick: true,
          theme: 'dark',
  })
    return null;
  } 

    createGallery(data);
    if (data.total > page * per_page){
      showBtnMore();
    } else {
      hiddenBtnMore();
        iziToast.show({
          title: '',
          titleColor: '#FFFFFF',
          titleSize: '16px',
          backgroundColor: '#B5EA7C',
          iconUrl: './img/bi_x-octagon.svg',
          message: 'We`re sorry, but you`ve reached the end of search results.',
          position: 'topRight',
          color: 'red',
          messageColor: '#FFFFFF',
          messageSize: '16px',
          closeOnEscape: true,
          closeOnClick: true,
          theme: 'dark',
  })
    };
  } catch(error){
    hideLoader();
    hiddenBtnMore();
    iziToast.show({
          title: 'ERROR',
          titleColor: '#FFFFFF',
          titleSize: '16px',
          backgroundColor: '#EF4040',
          iconUrl: './img/bi_x-octagon.svg',
          message: 'Something wrong',
          position: 'topRight',
          color: 'red',
          messageColor: '#FFFFFF',
          messageSize: '16px',
          closeOnEscape: true,
          closeOnClick: true,
          theme: 'dark',
});
    return null;
}
});


refs.btnLoadElem.addEventListener('click', async (event) => {
  console.log(event);
  page += 1;
  hiddenBtnMore();
  showLoader();
  try {
    const data = await getImagesByQuery(lastQuery, page, per_page);
    hideLoader();
    createGallery(data);
    if (data.total <= page * per_page){
        iziToast.show({
          title: '',
          titleColor: '#FFFFFF',
          titleSize: '16px',
          backgroundColor: '#B5EA7C',
          iconUrl: './img/bi_x-octagon.svg',
          message: 'We`re sorry, but you`ve reached the end of search results.',
          position: 'topRight',
          color: 'red',
          messageColor: '#FFFFFF',
          messageSize: '16px',
          closeOnEscape: true,
          closeOnClick: true,
          theme: 'dark',
  })
    } else showBtnMore();
  } 
  catch(error){
    hideLoader();
    iziToast.show({
          title: 'ERROR',
          titleColor: '#FFFFFF',
          titleSize: '16px',
          backgroundColor: '#EF4040',
          iconUrl: './img/bi_x-octagon.svg',
          message: 'Something wrong',
          position: 'topRight',
          color: 'red',
          messageColor: '#FFFFFF',
          messageSize: '16px',
          closeOnEscape: true,
          closeOnClick: true,
          theme: 'dark',
});
    return null;
}
});