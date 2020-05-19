var save = document.getElementById('save');
var wipe = document.getElementById('wipe');
save.addEventListener('click', saveString);
wipe.addEventListener('click', wipeNotes);
window.onload = loadString()

function loadString(){
	var textArea = document.getElementById('textArea').value
	var filename = document.getElementById("filename").innerHTML;
	document.getElementById('textArea').value = localStorage.getItem(filename);
	if(localStorage.getItem(filename)==null){localStorage.setItem(filename, '')}
}

function saveString(){
	var textArea = document.getElementById('textArea').value
	var filename = document.getElementById("filename").innerHTML;
    localStorage.setItem(filename, textArea) ;
	alert('Notes saved!')
}

function wipeNotes() {
    var r = confirm("Are you sure you want to delete your notes?");
    
	var filename = document.getElementById("filename").innerHTML;
	if (r == true) {
	  var textArea = document.getElementById('textArea').value = '';
	  localStorage.setItem(filename, textArea) ;
    alert('Notes for '+filename+' deleted')
  };
}

window.onbeforeunload = function(){
	var textArea = document.getElementById('textArea').value
	var filename = document.getElementById("filename").innerHTML;
	var saved = localStorage.getItem(filename);
	if(textArea != saved){
		return 'Are you sure you want to leave?';
	};
  
};