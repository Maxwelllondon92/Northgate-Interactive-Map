var submit = document.getElementById('submit');
submit.addEventListener('click', changeLang);

function changeLang(){
    var file = new XMLHttpRequest();
    file.open("GET", 'assets/lang/en/example.txt', true);
    file.onreadystatechange = function() {
		  alert(file.responseText);
        }
		file.send();
      }
