
const elements = {
    input: document.querySelector("#name-input"),
    output: document.querySelector("#name-output"),
  };
  
  elements.input.addEventListener("input", handlerSearch);
  
  function handlerSearch(evt) {
    elements.output.textContent = evt.currentTarget.value.trim();
    if (elements.input.value.trim() === "") {
      elements.output.textContent = "Anonymous";
    }
  }
