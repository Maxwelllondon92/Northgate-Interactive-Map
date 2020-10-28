var lang = document.getElementById('it');
lang.addEventListener('click', changeLang);

function changeLang() {
	localStorage.setItem('language','it')
}