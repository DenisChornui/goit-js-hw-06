const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");


function createItems(arr) {
  const arrIngridients = arr.map(ingridient => {

    const li = document.createElement('li');

    li.classList.add("item");
    li.textContent = ingridient;
    return li;
  })
  list.append(...arrIngridients);
}
createItems(ingredients)



