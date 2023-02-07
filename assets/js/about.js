import { toggleDiv } from "./functions/functions.js";

const button = document.getElementById('about-us-button');
const text = document.getElementById('about-us-text');

button.addEventListener('click', () => {
  toggleDiv(text, 'show-text')
})

