const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const list = document.createElement('ul');
  list.classList = 'ingridients';
  console.log(list)

for (let i = 0; i < ingredients.length; i++) {
    const ingridient = ingredients[i];

    const  listElements = document.createElement('li');
    listElements.textContent = ingredients[i];
    list.append(listElements)
}
document.body.append(list);

