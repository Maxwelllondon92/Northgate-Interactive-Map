var filename = document.getElementById('filename').innerHTML
var lang = localStorage.getItem('language')
var xml = new XMLHttpRequest();
var url ="../assets/lang/"+lang+"/"+filename+".json"
var common ="../assets/lang/"+lang+"/area_common.json"

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
xml.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var com = JSON.parse(this.responseText);
	document.getElementById("colpick").firstElementChild.innerHTML=com.colpick;
	document.getElementById("csquare").title=com.csquare;
	document.getElementsByClassName("notes")[0].firstElementChild.innerHTML=com.notes;
	document.getElementById("textArea").placeholder=com.textArea;
	document.getElementById("save").innerHTML=com.save;
	document.getElementById("wipe").innerHTML=com.wipe;
  }
};
xml.open("GET", common, true);
xml.send();
};

function pop(){
xml.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var file = JSON.parse(this.responseText);
    console.log(file)
    alert(file.lang)
    alert(file.text)
  }
};
xml.open("GET", url, true);
xml.send();
}
}