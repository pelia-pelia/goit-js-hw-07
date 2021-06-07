const inputText = document.getElementById('validation-input');

inputText.addEventListener('blur', (e) => {
    const val = e.currentTarget.value;

    if(val >= 6) {
        e.currentTarget.classList.add('valid')
    } else {
        e.currentTarget.classList.remove('valid')
        e.currentTarget.classList.add('invalid')
    }
});