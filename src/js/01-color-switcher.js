const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let intervalId;

const onStartBtnClick = () => {
  intervalId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtn.disabled = true;
};

const onStopBtnClick = () => {
  clearInterval(intervalId);
  body.style.backgroundColor = '#ffffff';
  startBtn.disabled = false;
};

stopBtn.addEventListener('click', onStopBtnClick);
startBtn.addEventListener('click', onStartBtnClick);
