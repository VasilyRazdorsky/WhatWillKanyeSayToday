import { 
    imageLinks,
    contentButton,
    contentImage,
    contentText
 } from "./data.js";

 function getRandomImageLink(){
    const index = Math.floor(Math.random() * imageLinks.length);
    return imageLinks[index];
 }

 function getQuote(){
    fetch("https://api.kanye.rest")
        .then(res => {
            return res.json();
        })
        .then(data => {
            contentText.textContent = data.quote;
        })
        .catch(() => {
            contentText.textContent = "No words today...";
        })
 }

 contentButton.addEventListener("click", () => {
    contentImage.src = getRandomImageLink();
    getQuote();
 });

