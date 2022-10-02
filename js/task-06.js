const inputRef = document.querySelector('#validation-input');
console.log(inputRef.getAttribute('data-length'));

inputRef.addEventListener('blur', event => {
    if (Number(event.currentTarget.value.length) === Number(inputRef.getAttribute('data-length'))) {
        inputRef.classList.remove('invalid');
        inputRef.classList.add('valid');
    } else {
        inputRef.classList.remove('valid');
        inputRef.classList.add('invalid');
    }
})
