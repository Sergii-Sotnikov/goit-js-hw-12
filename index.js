import{S as x,a as b,i as n}from"./assets/vendor-DqUhfJqr.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const E=new x(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,closeText:"x",showCounter:!0}),a={formElem:document.querySelector(".form"),listElem:document.querySelector(".gallery"),btnLoadElem:document.querySelector(".btn-load")};function w(r){r.preventDefault();const t=r.target.elements["search-text"].value.trim();return r.target.reset(),t}function p(r){const{hits:t}=r,s=t.map(e=>`<li class="item-gallery">
    <a href="${e.largeImageURL}">
    <img class="gallery-image" 
      src="${e.webformatURL}" 
      alt="${e.tags}" 
      width="360px"
      height="152px">
    </a>
      <ul class="list-descriptions">
        <li class="name">
          <p class="title-text">Likes <span class="text">${e.likes}</span></p>
        </li>
        <li class="name">
          <p class="title-text">Views <span class="text">${e.views}</span></p>
        </li>
        <li class="name">
          <p class="title-text">Comments <span class="text">${e.comments}</span></p>
        </li>
        <li class="name">
          <p class="title-text">Downloads <span class="text">${e.downloads}</span></p>
        </li>
      </ul>
  </li>`).join("");a.listElem.insertAdjacentHTML("beforeend",s),E.refresh();const l=document.querySelector(".item-gallery");if(l){const e=l.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}}function C(){a.listElem.innerHTML=""}function F(){document.getElementById("loader-wrap").hidden=!1}function m(){document.getElementById("loader-wrap").hidden=!0}function h(){a.btnLoadElem.hidden=!1}function c(){a.btnLoadElem.hidden=!0}async function f(r,t=1,s=15){const l="https://pixabay.com/api/",e="50348877-00e3539199181f67fed2a274d",o=new URLSearchParams({key:e,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:s}),i=`${l}?${o.toString()}`,g=await b.get(i,{params:o});return console.log(g.data),g.data}let u=1,d=15,y="";c();a.formElem.addEventListener("submit",async r=>{c(),r.preventDefault(),C(),F();const t=w(r);y=t;try{const s=await f(t,u,d);if(m(),s.hits.length===0)return n.show({title:"",titleColor:"#FFFFFF",titleSize:"16px",backgroundColor:"#EF4040",iconUrl:"./img/bi_x-octagon.svg",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red",messageColor:"#FFFFFF",messageSize:"16px",closeOnEscape:!0,closeOnClick:!0,theme:"dark"}),null;p(s),s.total>u*d?h():(c(),n.show({title:"",titleColor:"#FFFFFF",titleSize:"16px",backgroundColor:"#B5EA7C",iconUrl:"./img/bi_x-octagon.svg",message:"We`re sorry, but you`ve reached the end of search results.",position:"topRight",color:"red",messageColor:"#FFFFFF",messageSize:"16px",closeOnEscape:!0,closeOnClick:!0,theme:"dark"}))}catch{return m(),c(),n.show({title:"ERROR",titleColor:"#FFFFFF",titleSize:"16px",backgroundColor:"#EF4040",iconUrl:"./img/bi_x-octagon.svg",message:"Something wrong",position:"topRight",color:"red",messageColor:"#FFFFFF",messageSize:"16px",closeOnEscape:!0,closeOnClick:!0,theme:"dark"}),null}});a.btnLoadElem.addEventListener("click",async r=>{console.log(r),u+=1,c(),F();try{const t=await f(y,u,d);m(),p(t),t.total<=u*d?n.show({title:"",titleColor:"#FFFFFF",titleSize:"16px",backgroundColor:"#B5EA7C",iconUrl:"./img/bi_x-octagon.svg",message:"We`re sorry, but you`ve reached the end of search results.",position:"topRight",color:"red",messageColor:"#FFFFFF",messageSize:"16px",closeOnEscape:!0,closeOnClick:!0,theme:"dark"}):h()}catch{return m(),n.show({title:"ERROR",titleColor:"#FFFFFF",titleSize:"16px",backgroundColor:"#EF4040",iconUrl:"./img/bi_x-octagon.svg",message:"Something wrong",position:"topRight",color:"red",messageColor:"#FFFFFF",messageSize:"16px",closeOnEscape:!0,closeOnClick:!0,theme:"dark"}),null}});
//# sourceMappingURL=index.js.map
