const inputText = document.getElementById('name-input');
const outputText = document.getElementById('name-output');

inputText.addEventListener('input', (e) => {
    outputText.textContent = e.target.value; 
    if(e.target.value === '') {
        return outputText.textContent = 'незнакомец';
    }
})