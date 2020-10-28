window.onload = function(){
var filename = document.getElementById('filename').innerHTML
var lang = localStorage.getItem('language')
var xmlhttp = new XMLHttpRequest();
var url ="assets/lang/"+lang+"/"+filename+".json"
if (lang === null){
localStorage.setItem('language','en')
};
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