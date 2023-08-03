// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;

const elements = {
    spanTxt: document.querySelector("#value"),
    btnIncrement: document.querySelector('[data-action="increment"]'),
    btnDecrement: document.querySelector('[data-action="decrement"]'),
    
}
console.log(elements)

const handleClickUp = (evt) => {
    counterValue +=1;
    elements.spanTxt.textContent = counterValue
}
const handleClickDown = (evt) => {
    counterValue -=1;
    elements.spanTxt.textContent = counterValue
}

elements.btnIncrement.addEventListener("click", handleClickUp);
elements.btnDecrement.addEventListener("click", handleClickDown);

