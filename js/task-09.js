function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector(".change-color");
const spanBgColor = document.querySelector(".color");

btnChangeColor.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomHexColor();
  spanBgColor.textContent = getRandomHexColor();
});
