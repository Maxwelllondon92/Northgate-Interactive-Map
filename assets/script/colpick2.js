var square = document.getElementById('favcolor');
var filename = document.getElementById("filename").innerHTML;
var colsetter =document.getElementById("colsetter");
window.onload = getcol()

function getcol(){
	if(localStorage.getItem(filename+'_color')==null){localStorage.setItem(filename+'_color', '#ffffff')};
};

colsetter.addEventListener('click',function setcol(){
	localStorage.setItem(filename+'_color', square.value);
});