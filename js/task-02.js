// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listIngridient = document.querySelector("#ingredients");
const elements = ingredients.map((el) => {
  const listEl = document.createElement("li");
  listEl.classList.add("item");
  listEl.textContent = el;
  return listEl;
});
console.log(elements);
listIngridient.append(...elements);
console.log(listIngridient);
