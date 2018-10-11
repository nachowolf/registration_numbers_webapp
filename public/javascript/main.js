document.addEventListener('DOMContentLoaded', function () {
    let successElem = document.querySelector('.successElem');
    let errorElem = document.querySelector('.errorElem');
    let success = document.querySelector('.success');
    let error = document.querySelector('.error');

    if (successElem.innerHTML !== '' && success !== null) {
        setTimeout(function () {

            success.style.display = 'none';
        }, 3600);
    }
    else if (errorElem.innerHTML !== '' && error !== null) {
        setTimeout(function () {

            error.style.display = 'none';
        }, 3600);
    }
});
