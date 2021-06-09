const inputText = document.getElementById('validation-input');
const inputLength = inputText.getAttribute('data-length');

inputText.addEventListener('blur', (e) => {
    const val = e.currentTarget.value;

    e.currentTarget.classList.add('invalid');

    if(val.length === Number(inputLength)) {
        e.currentTarget.classList.remove('invalid');
        e.currentTarget.classList.add('valid');
    };
});


