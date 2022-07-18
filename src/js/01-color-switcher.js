const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// body.style.backgroundColor = "#000"


const onStartBtnClick = () => {
  setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

startBtn.addEventListener('click', onStartBtnClick);
