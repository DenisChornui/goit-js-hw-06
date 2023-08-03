const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");
// console.log(list)

const arr = [];
ingredients.map((ingridient) => {
  // console.log(ingridient)
  const li = document.createElement("li");
  li.textContent = ingridient;
  li.classList.add("item");
  arr.push(li);
  // console.log(li)
});
list.append(...arr);
console.log(list);


// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.