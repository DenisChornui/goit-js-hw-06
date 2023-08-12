

const elements = {
  changeColorBtn: document.querySelector(".change-color"),
  changeColorTxt: document.querySelector(".color"),
  body: document.querySelector("body"),
};

elements.changeColorBtn.addEventListener("click", handlerChangeColor);

function handlerChangeColor() {
  let color = getRandomHexColor();
  elements.body.style.backgroundColor = color;
  elements.changeColorTxt.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

