import Notiflix from 'notiflix';

const form = document.querySelector('.form');



function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  let amount = Number(formElements.amount.value);
  let delay = Number(formElements.delay.value);
  let step = Number(formElements.step.value);

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(({ i, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${i} in ${delay}ms`);
      })
      .catch(({ i, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${i} in ${delay}ms`);
      });
    delay += step;
  }
}

form.addEventListener('submit', onFormSubmit);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
