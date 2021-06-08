const inputText = document.getElementById('validation-input');
const inputLength = document.querySelector('[data-length="6"]');

inputText.addEventListener('blur', (e) => {
    const val = e.currentTarget.value;

    if(val > Number(inputLength)) {
        e.currentTarget.classList.add('valid')
    } else {
        e.currentTarget.classList.remove('valid')
        e.currentTarget.classList.add('invalid')
    }
});


