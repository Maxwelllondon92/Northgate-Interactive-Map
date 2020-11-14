var filename = document.getElementById('filename').innerHTML;
var xmlsvg = new XMLHttpRequest();
var svgurl ="../assets/img/svg/"+filename+".svg"

window.onload = getsvg();
function getsvg(){
		xmlsvg.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var placeholder = document.getElementsByClassName("areawrap")[0];
				placeholder.innerHTML = this.responseText;
			}
		};
		xmlsvg.open("GET", svgurl, true);
		xmlsvg.send();
	}