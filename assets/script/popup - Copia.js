//******************
/*var svg = document.getElementsByTagName("svg")[0];*/
var allicons = document.getElementsByClassName("st0");
var dlore = document.getElementById("dist_lore");

for (var i = 0; i < allicons.length; i++) {
    allicons[i].addEventListener('mouseover', hidedlore, false);
	allicons[i].addEventListener('mouseover', showlore, false);
	function showlore(evt) {allicons[i].style.display = "block";}
}
for (var i = 0; i < allicons.length; i++) {
    allicons[i].addEventListener('mouseout', showdlore, false);
	allicons[i].addEventListener('mouseover', hidelore, false);
	function hidedlore(evt) {allicons[i].style.display = "none";}
}

function hidedlore(evt) {dlore.style.display = "none";}
function showdlore(evt) {dlore.style.display = "block";}
/*
//*****************
var icon = svg.getElementByClassName
var icon01 = svg.getElementById("icon01");
var icon02 = svg.getElementById("icon02");
var icon03 = svg.getElementById("icon03");
var icon04 = svg.getElementById("icon04");
var icon05 = svg.getElementById("icon05");
var icon06 = svg.getElementById("icon06");
var icon07 = svg.getElementById("icon07");
var icon08 = svg.getElementById("icon08");
var icon09 = svg.getElementById("icon09");
var icon10 = svg.getElementById("icon10");
var icon11 = svg.getElementById("icon11");
var icon12 = svg.getElementById("icon12");
var icon13 = svg.getElementById("icon13");
var icon14 = svg.getElementById("icon14");
var icon15 = svg.getElementById("icon15");
var icon16 = svg.getElementById("icon16");
var icon17 = svg.getElementById("icon17");
var icon18 = svg.getElementById("icon18");
var icon19 = svg.getElementById("icon19");
var icon20 = svg.getElementById("icon20");
var icon21 = svg.getElementById("icon21");
var icon22 = svg.getElementById("icon22");
var icon23 = svg.getElementById("icon23");
var icon24 = svg.getElementById("icon24");
var icon25 = svg.getElementById("icon25");
var icon26 = svg.getElementById("icon26");
var icon27 = svg.getElementById("icon27");
var icon28 = svg.getElementById("icon28");
var icon29 = svg.getElementById("icon29");
var icon30 = svg.getElementById("icon30");

var lore01 = document.getElementById("lore01");
var lore02 = document.getElementById("lore02");
var lore03 = document.getElementById("lore03");
var lore04 = document.getElementById("lore04");
var lore05 = document.getElementById("lore05");
var lore06 = document.getElementById("lore06");
var lore07 = document.getElementById("lore07");
var lore08 = document.getElementById("lore08");
var lore09 = document.getElementById("lore09");
var lore10 = document.getElementById("lore10");
var lore11 = document.getElementById("lore11");
var lore12 = document.getElementById("lore12");
var lore13 = document.getElementById("lore13");
var lore14 = document.getElementById("lore14");
var lore15 = document.getElementById("lore15");
var lore16 = document.getElementById("lore16");
var lore17 = document.getElementById("lore17");
var lore18 = document.getElementById("lore18");
var lore19 = document.getElementById("lore19");
var lore20 = document.getElementById("lore20");
var lore21 = document.getElementById("lore21");
var lore22 = document.getElementById("lore22");
var lore23 = document.getElementById("lore23");
var lore24 = document.getElementById("lore24");
var lore25 = document.getElementById("lore25");
var lore26 = document.getElementById("lore26");
var lore27 = document.getElementById("lore27");
var lore28 = document.getElementById("lore28");
var lore29 = document.getElementById("lore29");
var lore30 = document.getElementById("lore30");

for (var i = 0; i < allicons.length; i++) {
		icon[i].addEventListener('mouseover', , false);
	
}
for (var i = 0; i < allicons.length; i++) {
    allicons[i].addEventListener('mouseout', , false);
}


if (icon01 !== null) {icon01.addEventListener("mouseover", showlore01);}
if (icon02 !== null) {icon02.addEventListener("mouseover", showlore02);}
if (icon03 !== null) {icon03.addEventListener("mouseover", showlore03);}
if (icon04 !== null) {icon04.addEventListener("mouseover", showlore04);}
if (icon05 !== null) {icon05.addEventListener("mouseover", showlore05);}
if (icon06 !== null) {icon06.addEventListener("mouseover", showlore06);}
if (icon07 !== null) {icon07.addEventListener("mouseover", showlore07);}
if (icon08 !== null) {icon08.addEventListener("mouseover", showlore08);}
if (icon09 !== null) {icon09.addEventListener("mouseover", showlore09);}
if (icon10 !== null) {icon10.addEventListener("mouseover", showlore10);}
if (icon11 !== null) {icon11.addEventListener("mouseover", showlore11);}
if (icon12 !== null) {icon12.addEventListener("mouseover", showlore12);}
if (icon13 !== null) {icon13.addEventListener("mouseover", showlore13);}
if (icon14 !== null) {icon14.addEventListener("mouseover", showlore14);}
if (icon15 !== null) {icon15.addEventListener("mouseover", showlore15);}
if (icon16 !== null) {icon16.addEventListener("mouseover", showlore16);}
if (icon17 !== null) {icon17.addEventListener("mouseover", showlore17);}
if (icon18 !== null) {icon18.addEventListener("mouseover", showlore18);}
if (icon19 !== null) {icon19.addEventListener("mouseover", showlore19);}
if (icon20 !== null) {icon20.addEventListener("mouseover", showlore20);}
if (icon21 !== null) {icon21.addEventListener("mouseover", showlore21);}
if (icon22 !== null) {icon22.addEventListener("mouseover", showlore22);}
if (icon23 !== null) {icon23.addEventListener("mouseover", showlore23);}
if (icon24 !== null) {icon24.addEventListener("mouseover", showlore24);}
if (icon25 !== null) {icon25.addEventListener("mouseover", showlore25);}
if (icon26 !== null) {icon26.addEventListener("mouseover", showlore26);}
if (icon27 !== null) {icon27.addEventListener("mouseover", showlore27);}
if (icon28 !== null) {icon28.addEventListener("mouseover", showlore28);}
if (icon29 !== null) {icon29.addEventListener("mouseover", showlore29);}
if (icon30 !== null) {icon30.addEventListener("mouseover", showlore30);}

if (icon01 !== null) {icon01.addEventListener("mouseout", hidelore01);}
if (icon02 !== null) {icon02.addEventListener("mouseout", hidelore02);}
if (icon03 !== null) {icon03.addEventListener("mouseout", hidelore03);}
if (icon04 !== null) {icon04.addEventListener("mouseout", hidelore04);}
if (icon05 !== null) {icon05.addEventListener("mouseout", hidelore05);}
if (icon06 !== null) {icon06.addEventListener("mouseout", hidelore06);}
if (icon07 !== null) {icon07.addEventListener("mouseout", hidelore07);}
if (icon08 !== null) {icon08.addEventListener("mouseout", hidelore08);}
if (icon09 !== null) {icon09.addEventListener("mouseout", hidelore09);}
if (icon10 !== null) {icon10.addEventListener("mouseout", hidelore10);}
if (icon11 !== null) {icon11.addEventListener("mouseout", hidelore11);}
if (icon12 !== null) {icon12.addEventListener("mouseout", hidelore12);}
if (icon13 !== null) {icon13.addEventListener("mouseout", hidelore13);}
if (icon14 !== null) {icon14.addEventListener("mouseout", hidelore14);}
if (icon15 !== null) {icon15.addEventListener("mouseout", hidelore15);}
if (icon16 !== null) {icon16.addEventListener("mouseout", hidelore16);}
if (icon17 !== null) {icon17.addEventListener("mouseout", hidelore17);}
if (icon18 !== null) {icon18.addEventListener("mouseout", hidelore18);}
if (icon19 !== null) {icon19.addEventListener("mouseout", hidelore19);}
if (icon20 !== null) {icon20.addEventListener("mouseout", hidelore20);}
if (icon21 !== null) {icon21.addEventListener("mouseout", hidelore21);}
if (icon22 !== null) {icon22.addEventListener("mouseout", hidelore22);}
if (icon23 !== null) {icon23.addEventListener("mouseout", hidelore23);}
if (icon24 !== null) {icon24.addEventListener("mouseout", hidelore24);}
if (icon25 !== null) {icon25.addEventListener("mouseout", hidelore25);}
if (icon26 !== null) {icon26.addEventListener("mouseout", hidelore26);}
if (icon27 !== null) {icon27.addEventListener("mouseout", hidelore27);}
if (icon28 !== null) {icon28.addEventListener("mouseout", hidelore28);}
if (icon29 !== null) {icon29.addEventListener("mouseout", hidelore29);}
if (icon30 !== null) {icon30.addEventListener("mouseout", hidelore30);}

function showlore01(evt) {lore01.style.display = "block";}
function showlore02(evt) {lore02.style.display = "block";}
function showlore03(evt) {lore03.style.display = "block";}
function showlore04(evt) {lore04.style.display = "block";}
function showlore05(evt) {lore05.style.display = "block";}
function showlore06(evt) {lore06.style.display = "block";}
function showlore07(evt) {lore07.style.display = "block";}
function showlore08(evt) {lore08.style.display = "block";}
function showlore09(evt) {lore09.style.display = "block";}
function showlore10(evt) {lore10.style.display = "block";}
function showlore11(evt) {lore11.style.display = "block";}
function showlore12(evt) {lore12.style.display = "block";}
function showlore13(evt) {lore13.style.display = "block";}
function showlore14(evt) {lore14.style.display = "block";}
function showlore15(evt) {lore15.style.display = "block";}
function showlore16(evt) {lore16.style.display = "block";}
function showlore17(evt) {lore17.style.display = "block";}
function showlore18(evt) {lore18.style.display = "block";}
function showlore19(evt) {lore19.style.display = "block";}
function showlore20(evt) {lore20.style.display = "block";}
function showlore21(evt) {lore21.style.display = "block";}
function showlore22(evt) {lore22.style.display = "block";}
function showlore23(evt) {lore23.style.display = "block";}
function showlore24(evt) {lore24.style.display = "block";}
function showlore25(evt) {lore25.style.display = "block";}
function showlore26(evt) {lore26.style.display = "block";}
function showlore27(evt) {lore27.style.display = "block";}
function showlore28(evt) {lore28.style.display = "block";}
function showlore29(evt) {lore29.style.display = "block";}
function showlore30(evt) {lore30.style.display = "block";}

function hidelore01(evt) {lore01.style.display = "none";}
function hidelore02(evt) {lore02.style.display = "none";}
function hidelore03(evt) {lore03.style.display = "none";}
function hidelore04(evt) {lore04.style.display = "none";}
function hidelore05(evt) {lore05.style.display = "none";}
function hidelore06(evt) {lore06.style.display = "none";}
function hidelore07(evt) {lore07.style.display = "none";}
function hidelore08(evt) {lore08.style.display = "none";}
function hidelore09(evt) {lore09.style.display = "none";}
function hidelore10(evt) {lore10.style.display = "none";}
function hidelore11(evt) {lore11.style.display = "none";}
function hidelore12(evt) {lore12.style.display = "none";}
function hidelore13(evt) {lore13.style.display = "none";}
function hidelore14(evt) {lore14.style.display = "none";}
function hidelore15(evt) {lore15.style.display = "none";}
function hidelore16(evt) {lore16.style.display = "none";}
function hidelore17(evt) {lore17.style.display = "none";}
function hidelore18(evt) {lore18.style.display = "none";}
function hidelore19(evt) {lore19.style.display = "none";}
function hidelore20(evt) {lore20.style.display = "none";}
function hidelore21(evt) {lore21.style.display = "none";}
function hidelore22(evt) {lore22.style.display = "none";}
function hidelore23(evt) {lore23.style.display = "none";}
function hidelore24(evt) {lore24.style.display = "none";}
function hidelore25(evt) {lore25.style.display = "none";}
function hidelore26(evt) {lore26.style.display = "none";}
function hidelore27(evt) {lore27.style.display = "none";}
function hidelore28(evt) {lore28.style.display = "none";}
function hidelore29(evt) {lore29.style.display = "none";}
function hidelore30(evt) {lore30.style.display = "none";}