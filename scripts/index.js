import {
  imageLinks,
  contentButton,
  contentImage,
  contentText,
  contentWaitText,
} from "./data.js";

function getRandomImageLink() {
  const index = Math.floor(Math.random() * imageLinks.length);
  return imageLinks[index];
}

function renderLoading(isLoading) {
  if (isLoading) {
    contentImage.classList.add("content__image_hidden");
    contentWaitText.classList.add("content__wait-text_visible");
  } else {
    contentImage.classList.remove("content__image_hidden");
    contentWaitText.classList.remove("content__wait-text_visible");
  }
}

function getQuote() {
  renderLoading(true);
  fetch("https://api.kanye.rest")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      contentText.textContent = data.quote;
    })
    .catch(() => {
      contentText.textContent = "No words today...";
    })
    .finally(() => {
      contentImage.src = getRandomImageLink();
      renderLoading(false);
    });
}

contentButton.addEventListener("click", getQuote);
