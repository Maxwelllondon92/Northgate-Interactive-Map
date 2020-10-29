var lang = document.getElementById('en');
lang.addEventListener('click', changeLang);

function changeLang() {
localStorage.setItem('language','en')
}