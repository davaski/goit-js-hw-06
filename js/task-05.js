// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".
// const textInput = document.querySelector("#name-input");
// const textOutput = document.querySelector("name-output");
// textInput.addEventListener("input", onInput);
// function onInput(event) {
//   textOutput.textContent = event.currentTarget;
//   if (event.currentTarget === ``) {
//     textOutput.textContent = "Anonymous";
//   }
// }
const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  textOutput.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    textOutput.textContent = "Anonymous";
  }
});
