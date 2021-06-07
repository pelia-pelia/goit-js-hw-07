const controller = document.getElementById('font-size-control');
const text = document.getElementById('text');

controller.addEventListener('input', () => {
    const size = controller.value;

    text.style.fontSize = size + 'px'
});