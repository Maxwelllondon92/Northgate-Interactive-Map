var filename = document.getElementById('filename').innerHTML
var lang = localStorage.getItem('language')
var lxml = new XMLHttpRequest();
var nxml = new XMLHttpRequest();
var url ="../assets/lang/"+lang+"/"+filename+".json"
var common ="../assets/lang/"+lang+"/!area_common.json"

window.onload = check();
function check(){
	if (lang === null){
		window.location.href = "lang.html";
		check();
	}else{
		notes();
		lore();
	};
	function notes(){
		nxml.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var com = JSON.parse(this.responseText);
				document.getElementById("colsetter").innerHTML=com.colpick;
				//document.getElementById("colpick").firstElementChild.innerHTML=com.colpick;
				//document.getElementById("csquare").title=com.csquare[0]+"\n"+com.csquare[1];
				document.getElementById("notes").firstElementChild.innerHTML=com.notes;
				document.getElementById("textArea").placeholder=com.textArea;
				document.getElementById("save").innerHTML=com.save;
				document.getElementById("wipe").innerHTML=com.wipe;
				//alert("notes OK");
			}
		};
		nxml.open("GET", common, true);
		nxml.send();
	};
	 function lore(){
        lxml.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var file = JSON.parse(this.responseText);
				var title = document.getElementsByTagName("title")[0];
				var head = document.getElementsByTagName("h1")[0];
                var dist_lore = document.getElementsByClassName("lore")[0];
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
				title.innerHTML=file.dist_lore[0];
				head.innerHTML=file.dist_lore[0];
                dist_lore.getElementsByTagName("h2")[0].innerHTML=file.dist_lore[0];
                lore01.getElementsByTagName("h2")[0].innerHTML=file.lore01[0];
                lore02.getElementsByTagName("h2")[0].innerHTML=file.lore02[0];
                lore03.getElementsByTagName("h2")[0].innerHTML=file.lore03[0];
                lore04.getElementsByTagName("h2")[0].innerHTML=file.lore04[0];
                lore05.getElementsByTagName("h2")[0].innerHTML=file.lore05[0];
                lore06.getElementsByTagName("h2")[0].innerHTML=file.lore06[0];
                lore07.getElementsByTagName("h2")[0].innerHTML=file.lore07[0];
                lore08.getElementsByTagName("h2")[0].innerHTML=file.lore08[0];
                lore09.getElementsByTagName("h2")[0].innerHTML=file.lore09[0];
                lore10.getElementsByTagName("h2")[0].innerHTML=file.lore10[0];
                lore11.getElementsByTagName("h2")[0].innerHTML=file.lore11[0];
                lore12.getElementsByTagName("h2")[0].innerHTML=file.lore12[0];
                lore13.getElementsByTagName("h2")[0].innerHTML=file.lore13[0];
                lore14.getElementsByTagName("h2")[0].innerHTML=file.lore14[0];
                lore15.getElementsByTagName("h2")[0].innerHTML=file.lore15[0];
                lore16.getElementsByTagName("h2")[0].innerHTML=file.lore16[0];
                lore17.getElementsByTagName("h2")[0].innerHTML=file.lore17[0];
                lore18.getElementsByTagName("h2")[0].innerHTML=file.lore18[0];
                lore19.getElementsByTagName("h2")[0].innerHTML=file.lore19[0];
                lore20.getElementsByTagName("h2")[0].innerHTML=file.lore20[0];
                lore21.getElementsByTagName("h2")[0].innerHTML=file.lore21[0];
                lore22.getElementsByTagName("h2")[0].innerHTML=file.lore22[0];
                lore23.getElementsByTagName("h2")[0].innerHTML=file.lore23[0];
                lore24.getElementsByTagName("h2")[0].innerHTML=file.lore24[0];
                lore25.getElementsByTagName("h2")[0].innerHTML=file.lore25[0];
                lore26.getElementsByTagName("h2")[0].innerHTML=file.lore26[0];
                lore27.getElementsByTagName("h2")[0].innerHTML=file.lore27[0];
                lore28.getElementsByTagName("h2")[0].innerHTML=file.lore28[0];
                lore29.getElementsByTagName("h2")[0].innerHTML=file.lore29[0];
                lore30.getElementsByTagName("h2")[0].innerHTML=file.lore30[0];
                dist_lore.getElementsByTagName("p")[0].innerHTML=file.dist_lore[1];
                lore01.getElementsByTagName("p")[0].innerHTML=file.lore01[1];
                lore02.getElementsByTagName("p")[0].innerHTML=file.lore02[1];
                lore03.getElementsByTagName("p")[0].innerHTML=file.lore03[1];
                lore04.getElementsByTagName("p")[0].innerHTML=file.lore04[1];
                lore05.getElementsByTagName("p")[0].innerHTML=file.lore05[1];
                lore06.getElementsByTagName("p")[0].innerHTML=file.lore06[1];
                lore07.getElementsByTagName("p")[0].innerHTML=file.lore07[1];
                lore08.getElementsByTagName("p")[0].innerHTML=file.lore08[1];
                lore09.getElementsByTagName("p")[0].innerHTML=file.lore09[1];
                lore10.getElementsByTagName("p")[0].innerHTML=file.lore10[1];
                lore11.getElementsByTagName("p")[0].innerHTML=file.lore11[1];
                lore12.getElementsByTagName("p")[0].innerHTML=file.lore12[1];
                lore13.getElementsByTagName("p")[0].innerHTML=file.lore13[1];
                lore14.getElementsByTagName("p")[0].innerHTML=file.lore14[1];
                lore15.getElementsByTagName("p")[0].innerHTML=file.lore15[1];
                lore16.getElementsByTagName("p")[0].innerHTML=file.lore16[1];
                lore17.getElementsByTagName("p")[0].innerHTML=file.lore17[1];
                lore18.getElementsByTagName("p")[0].innerHTML=file.lore18[1];
                lore19.getElementsByTagName("p")[0].innerHTML=file.lore19[1];
                lore20.getElementsByTagName("p")[0].innerHTML=file.lore20[1];
                lore21.getElementsByTagName("p")[0].innerHTML=file.lore21[1];
                lore22.getElementsByTagName("p")[0].innerHTML=file.lore22[1];
                lore23.getElementsByTagName("p")[0].innerHTML=file.lore23[1];
                lore24.getElementsByTagName("p")[0].innerHTML=file.lore24[1];
                lore25.getElementsByTagName("p")[0].innerHTML=file.lore25[1];
                lore26.getElementsByTagName("p")[0].innerHTML=file.lore26[1];
                lore27.getElementsByTagName("p")[0].innerHTML=file.lore27[1];
                lore28.getElementsByTagName("p")[0].innerHTML=file.lore28[1];
                lore29.getElementsByTagName("p")[0].innerHTML=file.lore29[1];
                lore30.getElementsByTagName("p")[0].innerHTML=file.lore30[1];
				//alert("lore OK");
            }
        };
        lxml.open("GET", url, true);
        lxml.send();
    }
}