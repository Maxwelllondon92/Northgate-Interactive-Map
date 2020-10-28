var filename = document.getElementById('filename').innerHTML
var lang = localStorage.getItem('language')
var xmlhttp = new XMLHttpRequest();
var url ="assets/lang/"+lang+"/"+filename+".json"

window.onload = check;
function check(){
if (lang === null){
	window.location.href = "lang.html";
	setTimeout(check, 300);
}else{
	setTimeout(pop, 300);
};
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
}}