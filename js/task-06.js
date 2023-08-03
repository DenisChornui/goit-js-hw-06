// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.

const input = document.querySelector("#validation-input")

input.addEventListener("blur", confirm);

function confirm() {
    if (input.value.length === Number(input.dataset.length)) {
        input.classList.remove("invalid");
        input.classList.add("valid")
    } else {
        input.classList.remove("valid"); 
        input.classList.add("invalid");
    }
}