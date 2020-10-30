var path = window.location.pathname;
var page = path.split("/").pop();
var filename = page.split(".")[0];
var placeholder = document.getElementById("filename");

window.onload=name();
function name(){
	placeholder.innerHTML=filename;
}