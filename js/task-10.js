// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

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
  console.log(amount)
  for (let i = 0; i < amount; i += 1) {
    size += 10;
    const div = document.createElement("div");
    div.style.width = `${size}px`;
    console.log('width', div.style.width);
    div.style.height = `${size}px`;
    console.log('height', div.style.height);
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
