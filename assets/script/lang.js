var submit = document.getElementById('submit').value;
submit.addEventListener('click', changeLang);

function changeLang(){
	var file;
	fetch("../lang/en/example.json")
		.then(res => res.json())
		.then(data => file = JSON.parse(data));
	alert(file.lang);
	alert(file.text);
}
