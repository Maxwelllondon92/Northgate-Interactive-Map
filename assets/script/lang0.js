var filename = document.getElementById('filename').innerHTML
var lang = localStorage.getItem('language')
var xmlhttp = new XMLHttpRequest();
var url ="assets/lang/"+lang+"/"+filename+".json";
var loc = window.location.pathname;

window.onload = check;
function check(){
	if (lang === null){
		window.location.href = "lang.html";
		setTimeout(check, 300);
	}else{
		setTimeout(pop, 10);
	};
	function pop(){
		if(loc == "/index.html"){
			xmlhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					var file = JSON.parse(this.responseText);
					document.getElementsByClassName("t1")[0].placeholder=file.t1;
					//console.log(file);
				}
			}
			xmlhttp.open("GET", url, true);
			xmlhttp.send();
		}else if(loc == "/howto.html"){
			xmlhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					var file = JSON.parse(this.responseText);
					//console.log(file);
				}
			}
			xmlhttp.open("GET", url, true);
			xmlhttp.send();
		}else if(loc == "/about.html"){
			mlhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					var file = JSON.parse(this.responseText);
					//console.log(file);
				}
			}
			xmlhttp.open("GET", url, true);
			xmlhttp.send();
		}else if(loc == "/lang.html"){
			mlhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					var file = JSON.parse(this.responseText);
					//console.log(file);
				}
			}
			xmlhttp.open("GET", url, true);
			xmlhttp.send();
		}
	}
}