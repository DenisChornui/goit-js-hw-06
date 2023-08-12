

let counterValue = 0;

const elements = {
    spanTxt: document.querySelector("#value"),
    btnIncrement: document.querySelector('[data-action="increment"]'),
    btnDecrement: document.querySelector('[data-action="decrement"]'),
    
}


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

