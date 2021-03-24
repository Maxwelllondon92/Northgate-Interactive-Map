var filename = document.getElementById('filename').innerHTML
var lang = localStorage.getItem('language')
var toolxml = new XMLHttpRequest();
var toolURL ="../assets/lang/"+lang+".json"
var toolCheck = setInterval(function() {
if (lang === null){
window.location.href = "../lang.html";
}else{
clearInterval(toolCheck);
toolxml.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
var tool = JSON.parse(this.responseText);
var save = document.getElementById('save');
var wipe = document.getElementById('wipe');

save.addEventListener('click', saveString);
wipe.addEventListener('click', wipeNotes);
notes();
function notes(){
document.getElementById('textArea').value = localStorage.getItem(filename);
document.getElementById("creset").innerHTML=tool.creset;
document.getElementById("notes").firstElementChild.innerHTML=tool.notes;
document.getElementById("textArea").placeholder=tool.textArea;
document.getElementById("save").innerHTML=tool.save;
document.getElementById("wipe").innerHTML=tool.wipe;
//console.log("notes OK");
}
function saveString(){
var textArea = document.getElementById('textArea').value
var filename = document.getElementById("filename").innerHTML;
var displayname = document.getElementsByTagName("h1")[0].innerHTML;
if (textArea==''){
alert(tool.save_no)
}else{
localStorage.setItem(filename, textArea) ;
alert(tool.note_ref+displayname+tool.save_ok)
}
};
function wipeNotes() {
var r = confirm(tool.del_req);
var filename = document.getElementById("filename").innerHTML;
var displayname = document.getElementsByTagName("h1")[0].innerHTML;
if (r == true) {
var textArea = document.getElementById('textArea').value = '';
localStorage.removeItem(filename);
alert(tool.note_ref+displayname+tool.del_ok)
};
};
window.onbeforeunload = function(){
var tool = JSON.parse(this.responseText);
var textArea = document.getElementById('textArea').value
var filename = document.getElementById("filename").innerHTML;
var saved = localStorage.getItem(filename);
if(textArea != '' && textArea != saved){
return '';
};
};
}
}
toolxml.open("GET", toolURL, true);
        toolxml.send();
};
},100);
