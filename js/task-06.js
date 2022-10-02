const inputRef = document.querySelector('#validation-input');
console.log(inputRef.getAttribute('data-length'));

inputRef.addEventListener('blur', event => {
    if (event.target.value.length < inputRef.getAttribute('data-length')) {
        inputRef.classList.remove('valid');
        inputRef.classList.add('invalid');
    } else {
        inputRef.classList.remove('invalid');
        inputRef.classList.add('valid');
    }
})

