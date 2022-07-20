import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';

const dateInput = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');

const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours');
const minsEl = document.querySelector('span[data-minutes');
const secondsEl = document.querySelector('span[data-seconds');

startBtn.disabled = true;

let date;
let intervalId;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < options.defaultDate) {
      window.alert('Please choose a date in the future');
    } else {
      startBtn.disabled = false;
    }
    date = selectedDates[0];
  },
};

const onStartBtnClick = () => {
  intervalId = setInterval(() => {
    const diff = date - new Date();
    if (diff <= 0) {
      clearInterval(intervalId);
      return;
    }
    setTime();
  }, 1000);
};

startBtn.addEventListener('click', onStartBtnClick);

flatpickr(dateInput, options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);

  const hours = Math.floor((ms % day) / hour);

  const minutes = Math.floor(((ms % day) % hour) / minute);

  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, 0);
}

function setTime() {
  const { days, hours, minutes, seconds } = convertMs(date - new Date());
  daysEl.textContent = addLeadingZero(days);
  hoursEl.textContent = addLeadingZero(hours);
  minsEl.textContent = addLeadingZero(minutes);
  secondsEl.textContent = addLeadingZero(seconds);
}
