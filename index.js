import{a as f,S as g,i as c}from"./assets/vendor-Rdv7LHNr.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();async function h(o,t){const r="https://pixabay.com/api/",n="46223042-6ba9b86e05f43857f202d81f8";try{return(await f.get(r,{params:{key:n,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}catch(e){iziToast.error({position:"topRight",message:`${e}`})}}function m(o){const t=new g(".gallery-list a",{captions:!0,captionsData:"alt",captionDelay:250}),r=document.querySelector(".gallery-list");let n=o.hits.map(e=>`<div class="image-frame"><a href="${e.largeImageURL}"><img class="image" src="${e.webformatURL}" alt="${e.tags}" /></a><div class ="text-wraper"><div class="text-block"><h5>likes</h5><p>${e.likes}</p></div><div class="text-block"><h5>views</h5><p>${e.views}</p></div><div class="text-block"><h5>comments</h5><p>${e.comments}</p></div><div class="text-block"><h5>downloads</h5><p>${e.downloads}</p></div></div></div>`).join("");r.insertAdjacentHTML("afterbegin",n),t.refresh()}function y(){const o=document.querySelector(".gallery-list");o.innerHTML=""}function L(){const t=document.querySelector(".gallery-list").firstElementChild.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}const v=document.querySelector(".gallery-form"),b=document.querySelector(".input-for-gallery"),i=document.querySelector(".loader"),a=document.querySelector(".load"),u=document.querySelector(".bottom");let l=1,p="";v.addEventListener("submit",w);a.addEventListener("click",S);function w(o){y(),o.preventDefault(),i.classList.remove("hiden"),u.classList.remove("show-text");let t=b.value.trim();if(p=t,l=1,t===""){c.error({position:"topRight",message:"Please fill the input"}),i.classList.add("hiden");return}h(`${t}`,l).then(async r=>{if(r.total===0){c.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),i.classList.add("hiden");return}else await m(r),a.classList.remove("hiden");r.hits.length<15&&(a.classList.add("hiden"),u.classList.add("show-text"),c.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})),i.classList.add("hiden")})}function S(o){l+=1,i.classList.remove("hiden"),a.classList.add("hiden"),h(`${p}`,l).then(t=>{t.hits.length<15?(a.classList.add("hidden"),u.classList.add("show-text"),c.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."}),i.classList.add("hiden"),a.classList.add("hiden")):a.classList.remove("hiden"),m(t),L(),i.classList.add("hiden")}).catch(t=>{c.error({position:"topRight",message:t.message}),i.classList.add("hiden")})}
//# sourceMappingURL=index.js.map
