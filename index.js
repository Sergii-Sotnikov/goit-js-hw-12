import{S as b,a as x,i}from"./assets/vendor-DqUhfJqr.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const E=new b(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,closeText:"x",showCounter:!0});function w(){const t=document.createElement("button");t.textContent="Load more",t.classList.add("btn-load"),t.hidden=!0,document.body.append(t),l.btnLoadElem=t}const l={formElem:document.querySelector(".form"),listElem:document.querySelector(".gallery"),btnLoadElem:document.querySelector(".btn-load")};function C(t){t.preventDefault();const o=t.target.elements["search-text"].value.trim();return t.target.reset(),o}function p(t){const{hits:o}=t,s=o.map(e=>`<li class="item-gallery">
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
  </li>`).join("");l.listElem.insertAdjacentHTML("beforeend",s),E.refresh();const a=document.querySelector(".item-gallery");if(a){const e=a.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}}function L(){l.listElem.innerHTML=""}function F(){document.getElementById("loader-wrap").hidden=!1}function d(){document.getElementById("loader-wrap").hidden=!0}function h(){l.btnLoadElem.hidden=!1}function c(){l.btnLoadElem.hidden=!0}async function f(t,o=1,s=15){const a="https://pixabay.com/api/",e="50348877-00e3539199181f67fed2a274d",r=new URLSearchParams({key:e,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:s}),n=`${a}?${r.toString()}`,g=await x.get(n,{params:r});return console.log(g.data),g.data}let u=1,m=15,y="";w();c();l.formElem.addEventListener("submit",async t=>{c(),t.preventDefault(),L(),F();const o=C(t);y=o;try{const s=await f(o,u,m);if(d(),s.hits.length===0)return i.show({title:"",titleColor:"#FFFFFF",titleSize:"16px",backgroundColor:"#EF4040",iconUrl:"./img/bi_x-octagon.svg",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red",messageColor:"#FFFFFF",messageSize:"16px",closeOnEscape:!0,closeOnClick:!0,theme:"dark"}),null;p(s),s.total>u*m?h():(c(),i.show({title:"",titleColor:"#FFFFFF",titleSize:"16px",backgroundColor:"#B5EA7C",iconUrl:"./img/bi_x-octagon.svg",message:"We`re sorry, but you`ve reached the end of search results.",position:"topRight",color:"red",messageColor:"#FFFFFF",messageSize:"16px",closeOnEscape:!0,closeOnClick:!0,theme:"dark"}))}catch{return d(),c(),i.show({title:"ERROR",titleColor:"#FFFFFF",titleSize:"16px",backgroundColor:"#EF4040",iconUrl:"./img/bi_x-octagon.svg",message:"Something wrong",position:"topRight",color:"red",messageColor:"#FFFFFF",messageSize:"16px",closeOnEscape:!0,closeOnClick:!0,theme:"dark"}),null}});l.btnLoadElem.addEventListener("click",async t=>{console.log(t),u+=1,c(),F();try{const o=await f(y,u,m);d(),p(o),o.total<=u*m?i.show({title:"",titleColor:"#FFFFFF",titleSize:"16px",backgroundColor:"#B5EA7C",iconUrl:"./img/bi_x-octagon.svg",message:"We`re sorry, but you`ve reached the end of search results.",position:"topRight",color:"red",messageColor:"#FFFFFF",messageSize:"16px",closeOnEscape:!0,closeOnClick:!0,theme:"dark"}):h()}catch{return d(),i.show({title:"ERROR",titleColor:"#FFFFFF",titleSize:"16px",backgroundColor:"#EF4040",iconUrl:"./img/bi_x-octagon.svg",message:"Something wrong",position:"topRight",color:"red",messageColor:"#FFFFFF",messageSize:"16px",closeOnEscape:!0,closeOnClick:!0,theme:"dark"}),null}});
//# sourceMappingURL=index.js.map
