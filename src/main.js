import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import searchImagesByQuery from "./js/pixabay-api";
import { createImages, clearImages, scrollDown } from "./js/render-functions";

const form = document.querySelector(".gallery-form");
const input = document.querySelector(".input-for-gallery");
const loader = document.querySelector(".loader");
const button = document.querySelector(".load");
const message = document.querySelector(".bottom");

let page = 1;
let wordFromStart = "";

form.addEventListener("submit", handleSubmit);
button.addEventListener("click", handleClick);

function handleSubmit(event) {
  event.preventDefault();
  clearImages();
  
  loader.classList.remove("hiden");
  message.classList.remove("show-text");
  
  let wordForSearch = input.value.trim();
  wordFromStart = wordForSearch;
  page = 1;

  if (wordForSearch === '') {
    iziToast.error({
      position: "topRight",
      message: 'Please fill the input',
    });
    loader.classList.add("hiden");
    return;
  }

  fetchImages(wordForSearch, page);
}

function handleClick(event) {
  page += 1;
  loader.classList.remove("hiden");
  button.classList.add("hiden");

  fetchImages(wordFromStart, page);
}

function fetchImages(query, page) {
  searchImagesByQuery(query, page).then(data => {
    if (data.total === 0 && page === 1) {
      iziToast.error({
        position: "topRight",
        message: 'Sorry, there are no images matching your search query. Please try again!',
      });
      loader.classList.add("hiden");
      return;
    }

    createImages(data);

    if (data.hits.length < 15) {
      button.classList.add("hiden");
      message.classList.add("show-text");
      iziToast.info({
        position: "topRight",
        message: "We're sorry, but you've reached the end of search results.",
      });
    } else {
      button.classList.remove("hiden");
    }

    scrollDown();
    loader.classList.add("hiden");
  }).catch(error => {
    iziToast.error({
      position: "topRight",
      message: error.message,
    });
    loader.classList.add("hiden");
  });
}


