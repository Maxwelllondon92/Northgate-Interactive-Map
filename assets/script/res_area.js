var notes = document.getElementById("notes");
var lore = document.getElementById("lore");
var wrap = document.getElementsByClassName("areawrap")[0];
var text = document.getElementsByClassName("lore");
var nav = document.getElementsByClassName("nav");

window.onload = function(){
    if (window.innerWidth > 1300){
		notes.style.width="35%";
		lore.style.width="60%";
		wrap.style.width="50%";
		for(var i = 0; i < text.length; i++){
		text[i].style.width="45%";
		};
		for(var i = 0; i < nav.length; i++){
		nav[i].style.width="45%";
		};
    }else if (window.innerWidth <900){
		notes.style.width="90%";
		lore.style.width="90%";
		wrap.style.width="90%";
		for(var i = 0; i < text.length; i++){
		text[i].style.width="90%";
		};
		for(var i = 0; i < nav.length; i++){
		nav[i].style.width="45%";
		};
	}else{
        notes.style.width="45%";
		lore.style.width="50%";
		wrap.style.width="100%";
		for(var i = 0; i < text.length; i++){
		text[i].style.width="100%";
		};
		for(var i = 0; i < nav.length; i++){
		nav[i].style.width="45%";
		};
	}}


if (window.attachEvent) {
  window.attachEvent('onresize', function() {
    if (window.innerWidth > 1300){
		notes.style.width="35%";
		lore.style.width="60%";
		wrap.style.width="50%";
		for(var i = 0; i < text.length; i++){
		text[i].style.width="45%";
		};
		for(var i = 0; i < nav.length; i++){
		nav[i].style.width="45%";
		};
    }else if (window.innerWidth <900){
		notes.style.width="90%";
		lore.style.width="90%";
		wrap.style.width="90%";
		for(var i = 0; i < text.length; i++){
		text[i].style.width="90%";
		};
		for(var i = 0; i < nav.length; i++){
		nav[i].style.width="45%";
		};
	}else{
        notes.style.width="45%";
		lore.style.width="50%";
		wrap.style.width="100%";
		for(var i = 0; i < text.length; i++){
		text[i].style.width="100%";
		};
		for(var i = 0; i < nav.length; i++){
		nav[i].style.width="45%";
		};
	}});
	} else if (window.addEventListener) {
  window.addEventListener('resize', function() {
    if (window.innerWidth > 1300){
		notes.style.width="35%";
		lore.style.width="60%";
		wrap.style.width="50%";
		for(var i = 0; i < text.length; i++){
		text[i].style.width="45%";
		};
		for(var i = 0; i < nav.length; i++){
		nav[i].style.width="45%";
		};
    }else if (window.innerWidth <900){
		notes.style.width="90%";
		lore.style.width="90%";
		wrap.style.width="90%";
		for(var i = 0; i < text.length; i++){
		text[i].style.width="90%";
		};
		for(var i = 0; i < nav.length; i++){
		nav[i].style.width="45%";
		};
	}else{
        notes.style.width="45%";
		lore.style.width="50%";
		wrap.style.width="100%";
		for(var i = 0; i < text.length; i++){
		text[i].style.width="100%";
		};
		for(var i = 0; i < nav.length; i++){
		nav[i].style.width="45%";
		};
	}}, true);
} else {
  //The browser does not support Javascript event binding
}