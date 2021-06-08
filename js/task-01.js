const someList = document.getElementById('categories');
const navEl = someList.children.length;
console.log(`В списке ${navEl} категории`);

const categoryElems = document.querySelectorAll('.item');
for (let i = 0; i < categoryElems.length; i++) {
    console.log(`Категория: ${categoryElems[i].firstElementChild.textContent}, Количество жлементов: ${categoryElems[i].querySelectorAll('li').length}`)
};