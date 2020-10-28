var lang = document.getElementsByClassName("flag")[0];
lang.addEventListener('click', changeLang);

function changeLang() {
localStorage.setItem('language','en')
}