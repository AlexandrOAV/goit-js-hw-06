const itemEl = document.querySelectorAll('.item');
console.log('Number of categories:', itemEl.length);
itemEl.forEach(item => {
    const header = item.firstElementChild.textContent;
    console.log('Category:', header);
    const lastItemEl = item.lastElementChild.children.length;
    console.log('Elements:', lastItemEl);
})