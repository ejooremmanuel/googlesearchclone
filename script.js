const form = document.getElementById('form');

const search = document.querySelector('.search');

form.addEventListener('submit', function(e) {

    e.preventDefault();
    const value = search.value;

    if (value.length == 0) {
        return false;
    } else {

        window.location.href = `https://www.google.com/search?q=${value}`
    }


})