let code = document.querySelector('.code');
let number = document.querySelector('.number');

function checkCode () {
    let letters = code.value.length + 1;
    console.log(letters);
    if (letters <= 3)     { code.focus() ;}     else     { number.focus() ;}
}
