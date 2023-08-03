// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// Варіант 1
// const elements = {
//   input: document.querySelector("#name-input"),
//   output: document.querySelector("#name-output"),
// };

// elements.input.addEventListener("input", handlerSearch);

// function handlerSearch(evt) {
//   console.dir(evt.currentTarget.value);
//   elements.output.textContent = evt.currentTarget.value;
//   if (elements.input.value.length === 0) {
//     elements.output.textContent = "Anonymous";
//   }
// }

// Варіант 2
const elements = {
    input: document.querySelector("#name-input"),
    output: document.querySelector("#name-output"),
  };
  
  elements.input.addEventListener("input", handlerSearch);
  
  function handlerSearch(evt) {
    console.dir(evt.currentTarget.value);
    elements.output.textContent = evt.currentTarget.value.trim();
    if (elements.input.value.trim() === "") {
      elements.output.textContent = "Anonymous";
    }
  }
