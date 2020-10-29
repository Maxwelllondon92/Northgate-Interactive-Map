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
		setTimeout(pop, 1);
	};
	function pop(){
		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var file = JSON.parse(this.responseText);
				if (filename == "index"){
					document.getElementsByTagName("title")[0].innerHTML=file.title;
					document.getElementById("search").placeholder=file.search;
					document.getElementById("settings").innerHTML=file.settings;
				}else if (filename == "settings"){
					document.getElementById("settings").innerHTML=file.settings;
					var info = document.getElementsByClassName("info")[0];
					info.getElementsByTagName("h2")[0].innerHTML=file.h2[0];
					info.getElementsByTagName("p")[0].innerHTML=file.p[0];
					info.getElementsByTagName("p")[1].innerHTML=file.p[1];
					info.getElementsByTagName("p")[2].innerHTML=file.p[2];
					//
					info.getElementsByTagName("h2")[1].innerHTML=file.h2[1];
					info.getElementsByTagName("p")[3].innerHTML=file.p[3];
					info.getElementsByTagName("p")[4].innerHTML=file.p[4];
					//
					info.getElementsByTagName("h2")[2].innerHTML=file.h2[2];
					info.getElementsByTagName("p")[5].innerHTML=file.p[5];
					info.getElementsByTagName("p")[6].innerHTML=file.p[6];
					document.getElementById("fileDownload").innerHTML=file.download;
					//
					info.getElementsByTagName("h2")[3].innerHTML=file.h2[3];
					info.getElementsByTagName("h2")[4].innerHTML=file.h2[4];
				}else if (filename == "about"){
					var info = document.getElementsByClassName("info")[0];
					info.getElementsByTagName("p")[0].innerHTML=file.p[0];
					info.getElementsByTagName("p")[1].innerHTML=file.p[1];
				}
			}
		}
		xmlhttp.open("GET", url, true);
		xmlhttp.send();
	}
}