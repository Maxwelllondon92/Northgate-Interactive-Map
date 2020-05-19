window.onload = function(){
	var tutorial = "tutorial";
	if(localStorage.getItem(tutorial)!=1){
	var r = confirm("Is the first time you use the 'Northgate Interactive Map'. Do you want to know how to use it?");
	}
	if (r == true) {
	window.location.href = 'howto.html';
	localStorage.setItem(tutorial, 1);
	}else{
		localStorage.setItem(tutorial, 1);
}}