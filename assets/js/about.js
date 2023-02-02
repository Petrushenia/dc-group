const button = document.getElementById('about-us-button');
const text = document.getElementById('about-us-text');


toggleText = () => {
  text.classList.toggle('show-text')
}

button.addEventListener('click', toggleText)

