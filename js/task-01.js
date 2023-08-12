
const list = [...categories.children];
console.log(`Number of categories: ${list.length}`);


list.forEach((list) => {

    console.log(`Caterogy: ${list.firstElementChild.textContent}`);
  
    console.log(`Elements: ${list.lastElementChild.children.length}`);
  });
