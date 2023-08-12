
const input = document.querySelector(".js-input");
const create = document.querySelector(".js-create");
const destroy = document.querySelector(".js-destroy");
const boxes = document.querySelector("#boxes");

create.addEventListener("click", handlerCreate);
destroy.addEventListener("click", handlerDestroy);

let size = 20;

function handlerCreate(amount) {
  amount = Number(input.value);
  const divElements = []
  for (let i = 0; i < amount; i += 1) {
    size += 10;
    const div = document.createElement("div");
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    divElements.push(div);

    input.value = 0;
    boxes.append(div);
  }
}

function handlerDestroy() {
  boxes.innerHTML = "";
  size = 20;
  input.value = 0;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
