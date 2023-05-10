'use strict'

const itemEl = document.querySelectorAll('.item');
console.log('Number of categories:', itemEl.length);
itemEl.forEach(item => {
    
    const header = item.children;
    console.log('Category:', header[0].textContent);
    const lastItemEl = header[1].children.length;
    console.log('Elements:', lastItemEl);
})