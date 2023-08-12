
const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

input.addEventListener("input", changeTxt);

function changeTxt() {
    text.style.fontSize = `${input.value}px`;
}