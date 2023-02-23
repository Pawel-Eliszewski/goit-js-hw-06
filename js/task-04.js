let counterValue = 0;
const showValue = document.querySelector("#value");
const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');

const decrementClick = () => {
  counterValue--;
  showValue.textContent = counterValue;
};
decrement.addEventListener("click", decrementClick);

const incrementClick = () => {
  counterValue++;
  showValue.textContent = counterValue;
};
increment.addEventListener("click", incrementClick);
