function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeBtn = document.querySelector('.change-color');
const bodyRef = document.querySelector('body');
const colorEl = document.querySelector('.color');

changeBtn.addEventListener('click', event => {
  bodyRef.style.background = getRandomHexColor();
  colorEl.textContent = bodyRef.style.background;
})