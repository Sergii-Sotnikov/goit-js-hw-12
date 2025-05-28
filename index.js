import{S as y,a as x,i as a}from"./assets/vendor-DqUhfJqr.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function l(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=l(t);fetch(t.href,o)}})();const E=new y(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,closeText:"x",showCounter:!0}),n={formElem:document.querySelector(".form"),listElem:document.querySelector(".gallery"),btnLoadElem:document.querySelector(".btn-load")};function g(r){const{hits:e}=r,l=e.map(s=>`<li class="item-gallery">
    <a href="${s.largeImageURL}">
    <img class="gallery-image" 
      src="${s.webformatURL}" 
      alt="${s.tags}" 
      width="360px"
      height="152px">
    </a>
      <ul class="list-descriptions">
        <li class="name">
          <p class="title-text">Likes <span class="text">${s.likes}</span></p>
        </li>
        <li class="name">
          <p class="title-text">Views <span class="text">${s.views}</span></p>
        </li>
        <li class="name">
          <p class="title-text">Comments <span class="text">${s.comments}</span></p>
        </li>
        <li class="name">
          <p class="title-text">Downloads <span class="text">${s.downloads}</span></p>
        </li>
      </ul>
  </li>`).join("");n.listElem.insertAdjacentHTML("beforeend",l),E.refresh()}function b(){const r=document.querySelector(".item-gallery");if(r){const e=r.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}}function w(){n.listElem.innerHTML=""}function p(){document.getElementById("loader-wrap").hidden=!1}function m(){document.getElementById("loader-wrap").hidden=!0}function F(){n.btnLoadElem.hidden=!1}function u(){n.btnLoadElem.hidden=!0}async function h(r,e=1,l=15){const s="https://pixabay.com/api/",t="50348877-00e3539199181f67fed2a274d",o=new URLSearchParams({key:t,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:l}),c=`${s}?${o.toString()}`;return(await x.get(c,{params:o})).data}let i=1,d=15,f="";u();n.formElem.addEventListener("submit",async r=>{u(),r.preventDefault(),w(),p();const e=r.target.elements["search-text"].value.trim();if(e===""){m(),a.show({title:"",message:"Enter a word to search",backgroundColor:"#EF4040",messageColor:"#FFFFFF",position:"topRight",theme:"dark"});return}i=1,f=e,r.target.reset();try{const l=await h(e,i,d);if(m(),l.hits.length===0)return a.show({title:"",titleColor:"#FFFFFF",titleSize:"16px",backgroundColor:"#EF4040",iconUrl:"./img/bi_x-octagon.svg",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red",messageColor:"#FFFFFF",messageSize:"16px",closeOnEscape:!0,closeOnClick:!0,theme:"dark"}),null;g(l),l.total>i*d?F():(u(),a.show({title:"",titleColor:"#FFFFFF",titleSize:"16px",backgroundColor:"#B5EA7C",iconUrl:"./img/bi_x-octagon.svg",message:"We`re sorry, but you`ve reached the end of search results.",position:"topRight",color:"red",messageColor:"#FFFFFF",messageSize:"16px",closeOnEscape:!0,closeOnClick:!0,theme:"dark"}))}catch{return m(),u(),a.show({title:"ERROR",titleColor:"#FFFFFF",titleSize:"16px",backgroundColor:"#EF4040",iconUrl:"./img/bi_x-octagon.svg",message:"Something wrong",position:"topRight",color:"red",messageColor:"#FFFFFF",messageSize:"16px",closeOnEscape:!0,closeOnClick:!0,theme:"dark"}),null}});n.btnLoadElem.addEventListener("click",async r=>{console.log(r),i+=1,u(),p();try{const e=await h(f,i,d);m(),g(e),b(),e.total<=i*d?a.show({title:"",titleColor:"#FFFFFF",titleSize:"16px",backgroundColor:"#B5EA7C",iconUrl:"./img/bi_x-octagon.svg",message:"We`re sorry, but you`ve reached the end of search results.",position:"topRight",color:"red",messageColor:"#FFFFFF",messageSize:"16px",closeOnEscape:!0,closeOnClick:!0,theme:"dark"}):F()}catch{return m(),a.show({title:"ERROR",titleColor:"#FFFFFF",titleSize:"16px",backgroundColor:"#EF4040",iconUrl:"./img/bi_x-octagon.svg",message:"Something wrong",position:"topRight",color:"red",messageColor:"#FFFFFF",messageSize:"16px",closeOnEscape:!0,closeOnClick:!0,theme:"dark"}),null}});
//# sourceMappingURL=index.js.map
