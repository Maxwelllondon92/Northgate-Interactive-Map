var filename = document.getElementById('filename').innerHTML
var lang = localStorage.getItem('language')
var xmlhttp = new XMLHttpRequest();
var url ="assets/lang/"+lang+"/"+filename+".json"
var common ="assets/lang/"+lang+"/area_common.json"

window.onload = check;
function check(){
if (lang === null){
	window.location.href = "lang.html";
	setTimeout(check, 300);
}else{
	setTimeout(pop, 10);
	setTimeout(comm, 10);
};
function comm(){
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var com = JSON.parse(this.responseText);
    console.log(file)
    alert(file.lang)
    alert(file.text)
	
	document.getElementById("colpick").firstElementChild.innerHTML=com.colpick;
	document.getElementById("csquare").innerHTML=com.csquare;
	document.getElementById("notes").innerHTML=com.notes;
	document.getElementById("textArea").innerHTML=com.textArea;
	document.getElementById("save").innerHTML=com.save;
	document.getElementById("wipe").innerHTML=com.wipe;
  }
};
xmlhttp.open("GET", common, true);
xmlhttp.send();
}
function pop(){
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var file = JSON.parse(this.responseText);
    console.log(file)
    alert(file.lang)
    alert(file.text)
  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();
}
}