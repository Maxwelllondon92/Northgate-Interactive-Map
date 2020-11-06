var notes = document.getElementById("notes");
var lore = document.getElementById("lore");
var wrap = document.getElementsByClassName("areawrap")[0];
var text = document.getElementsByClassName("lore");
var nav = document.getElementsByClassName("nav");
var h1 = document.getElementsByTagName("h1")[0];
var coldiv = document.getElementById("colpick")

window.onload = function(){
	coldiv.style.display="block";	
	notes.style.opacity="1";
		lore.style.opacity="1";
    if (window.innerWidth > 1300){
		h1.style.fontSize = "xx-large";
		h1.style.margin = "19px 0px";
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
		h1.style.fontSize = "x-large";
		h1.style.margin = "24px 0px";
		coldiv.style.display="none";
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
		h1.style.fontSize = "xx-large";
		h1.style.margin = "19px 0px";
		coldiv.style.display="block";	
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
		h1.style.fontSize = "xx-large";
		h1.style.margin = "19px 0px";
		coldiv.style.display="block";	
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
		h1.style.margin = "24px 0px";
		h1.style.fontSize = "x-large";
		coldiv.style.display="none";	
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
		h1.style.margin = "19px 0px";
		h1.style.fontSize = "xx-large";
		coldiv.style.display="block";	
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
		h1.style.fontSize = "xx-large";
		h1.style.margin = "19px 0px";
		coldiv.style.display="block";	
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
		h1.style.fontSize = "x-large";
		h1.style.margin = "24px 0px";
		coldiv.style.display="none";	
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
		h1.style.fontSize = "xx-large";
		h1.style.margin = "19px 0px";
		coldiv.style.display="block";	
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