const counterValue = document.getElementById('value');
const plusBtn = document.querySelector('[data-action="increment"]');
const minusBtn = document.querySelector('[data-action="decrement"]');

let counter = 0;

function updateDisplay() {
    counterValue.innerHTML = counter;
};

plusBtn.addEventListener('click', () => {
    counter += 1;
    updateDisplay();
});

minusBtn.addEventListener('click', () => {
    counter -= 1;
    updateDisplay();
});