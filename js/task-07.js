// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.
const inputRange = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");
function onChangeSize(event) {
  spanText.style.fontSize = event.currentTarget.value + "px";
}
inputRange.addEventListener("input", onChangeSize);
