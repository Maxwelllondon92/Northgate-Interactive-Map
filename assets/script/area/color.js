var square = document.getElementById('favcolor');
var filename = document.getElementById("filename").innerHTML;
var creset =document.getElementById("creset");
window.onload = getcol()
function getcol(){
	if(localStorage.getItem(filename+'_color')==null){
		square.value='#ffffff';
	}else{
		square.value=localStorage.getItem(filename+'_color');
}};
square.addEventListener('change',function(){
	localStorage.setItem(filename+'_color', square.value);
});
creset.addEventListener('click',function(){
	localStorage.removeItem(filename+'_color');
	square.value='#ffffff';
});