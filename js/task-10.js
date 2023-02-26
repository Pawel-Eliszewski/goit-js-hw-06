createBoxBtn.addEventListener("click", createBoxesAmount);
destroyBoxBtn.addEventListener("click", destroyBoxes);

const inputNumber = document.querySelector("input");
const createBoxBtn = document.querySelector("button[data-create]");
const destroyBoxBtn = document.querySelector("button[data-destroy]");
const divBoxes = document.querySelector("#boxes");
let boxSize = 30;

function createBoxesAmount() {
  createBoxes(inputNumber.value);
  inputNumber.value = "";
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const newDiv = document.createElement("div");
    divBoxes.append(newDiv);
    newDiv.classList.add("new-box");
    newDiv.style.cssText = `
    width: ${boxSize}px;
    height: ${boxSize}px;
    `;
    newDiv.style.backgroundColor = getRandomHexColor();
    boxSize += 10;
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function destroyBoxes() {
  const newBox = document.querySelectorAll(".new-box");
  newBox.forEach((box) => {
    box.remove();
    boxSize = 30;
  });
}
