const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listEl = document.getElementById('ingredients');
function isAddList (listArray)
{let ingredientsItem = listArray.map(ingredient => {
  const itemEl = document.createElement('li');
  itemEl.textContent = ingredient;
  itemEl.classList.add('item');
  return itemEl;
})
listEl.append(...ingredientsItem);
}
isAddList(ingredients);