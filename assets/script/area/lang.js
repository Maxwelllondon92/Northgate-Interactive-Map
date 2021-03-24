var filename = document.getElementById('filename').innerHTML
var lang = localStorage.getItem('language')
var lorexml = new XMLHttpRequest();
var loreURL ="../assets/lang/"+lang+".json"
var loreCheck = setInterval(function() {
if (lang === null){
window.location.href = "../lang.html";
}else{
clearInterval(loreCheck);
lore();
};
function lore(){
        lorexml.onreadystatechange = function() {
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
            if(filename=="targengate"){
                //District
title.innerHTML=file.D01[1];
head.innerHTML=file.D01[1];
                dist_lore.getElementsByTagName("h2")[0].innerHTML=file.D01[1];
                dist_lore.getElementsByTagName("p")[0].innerHTML=file.D01[2];
                //Building Headings
                lore01.getElementsByTagName("h2")[0].innerHTML=file.B001[0]+file.B001[1];
                lore02.getElementsByTagName("h2")[0].innerHTML=file.B002[0]+file.B002[1];
                lore03.getElementsByTagName("h2")[0].innerHTML=file.B003[0]+file.B003[1];
                lore04.getElementsByTagName("h2")[0].innerHTML=file.B004[0]+file.B004[1];
                lore05.getElementsByTagName("h2")[0].innerHTML=file.B005[0]+file.B005[1];
                //Navigation
                lore06.getElementsByTagName("h2")[0].innerHTML=file.to+file.D50[1];
                lore07.getElementsByTagName("h2")[0].innerHTML=file.to+file.D02[1];
                lore08.getElementsByTagName("h2")[0].innerHTML=file.to+file.D03[1];
                //Building Paragraphs
                lore01.getElementsByTagName("p")[0].innerHTML=file.B001[2];
                lore02.getElementsByTagName("p")[0].innerHTML=file.B002[2];
                lore03.getElementsByTagName("p")[0].innerHTML=file.B003[2];
                lore04.getElementsByTagName("p")[0].innerHTML=file.B004[2];
                lore05.getElementsByTagName("p")[0].innerHTML=file.B005[2];
            }else if(filename=="ascalan_dist"){
                //District
                title.innerHTML=file.D02[1];
head.innerHTML=file.D02[1];
                dist_lore.getElementsByTagName("h2")[0].innerHTML=file.D02[1];
                dist_lore.getElementsByTagName("p")[0].innerHTML=file.D01[2];
                //Building Headings
                lore01.getElementsByTagName("h2")[0].innerHTML=file.B006[0]+file.B006[1];
                lore02.getElementsByTagName("h2")[0].innerHTML=file.B007[0]+file.B007[1];
                lore03.getElementsByTagName("h2")[0].innerHTML=file.B008[0]+file.B008[1];
                lore04.getElementsByTagName("h2")[0].innerHTML=file.B009[0]+file.B009[1];
                lore05.getElementsByTagName("h2")[0].innerHTML=file.B010[0]+file.B010[1];
                lore06.getElementsByTagName("h2")[0].innerHTML=file.B011[0]+file.B011[1];
                lore07.getElementsByTagName("h2")[0].innerHTML=file.P01[0]+file.P01[1];
                //Navigation
                lore08.getElementsByTagName("h2")[0].innerHTML=file.to+file.D01[1];
                lore09.getElementsByTagName("h2")[0].innerHTML=file.to+file.D03[1];
                lore10.getElementsByTagName("h2")[0].innerHTML=file.to+file.D04[1];
                lore11.getElementsByTagName("h2")[0].innerHTML=file.to+file.D05[1];
                //Building Paragraphs
                lore01.getElementsByTagName("p")[0].innerHTML=file.B006[2];
                lore02.getElementsByTagName("p")[0].innerHTML=file.B007[2];
                lore03.getElementsByTagName("p")[0].innerHTML=file.B008[2];
                lore04.getElementsByTagName("p")[0].innerHTML=file.B009[2];
                lore05.getElementsByTagName("p")[0].innerHTML=file.B010[2];
                lore06.getElementsByTagName("p")[0].innerHTML=file.B011[2];
                lore07.getElementsByTagName("p")[0].innerHTML=file.P01[2];
            }else if(filename=="marcher_dist"){
                //District
                title.innerHTML=file.D03[1];
head.innerHTML=file.D03[1];
                dist_lore.getElementsByTagName("h2")[0].innerHTML=file.D03[1];
                dist_lore.getElementsByTagName("p")[0].innerHTML=file.D03[2];
                //Building Headings
                lore01.getElementsByTagName("h2")[0].innerHTML=file.B012[0]+file.B012[1];
                lore02.getElementsByTagName("h2")[0].innerHTML=file.B013[0]+file.B013[1];
                lore03.getElementsByTagName("h2")[0].innerHTML=file.B014[0]+file.B014[1];
                lore04.getElementsByTagName("h2")[0].innerHTML=file.B015[0]+file.B015[1];
                lore05.getElementsByTagName("h2")[0].innerHTML=file.B016[0]+file.B016[1];
                lore06.getElementsByTagName("h2")[0].innerHTML=file.B017[0]+file.B017[1];
                lore07.getElementsByTagName("h2")[0].innerHTML=file.B018[0]+file.B018[1];
                lore08.getElementsByTagName("h2")[0].innerHTML=file.B019[0]+file.B019[1];
                lore09.getElementsByTagName("h2")[0].innerHTML=file.B020[0]+file.B020[1];
                lore10.getElementsByTagName("h2")[0].innerHTML=file.S01[0]+file.S01[1];
                //Navigation
                lore11.getElementsByTagName("h2")[0].innerHTML=file.to+file.D01[1];
                lore12.getElementsByTagName("h2")[0].innerHTML=file.to+file.D02[1];
                lore13.getElementsByTagName("h2")[0].innerHTML=file.to+file.D04[1];
                lore14.getElementsByTagName("h2")[0].innerHTML=file.to+file.D31[1];
                lore15.getElementsByTagName("h2")[0].innerHTML=file.to+file.D63[1];
                //Building Paragraphs
                lore01.getElementsByTagName("p")[0].innerHTML=file.B012[2];
                lore02.getElementsByTagName("p")[0].innerHTML=file.B013[2];
                lore03.getElementsByTagName("p")[0].innerHTML=file.B014[2];
                lore04.getElementsByTagName("p")[0].innerHTML=file.B015[2];
                lore05.getElementsByTagName("p")[0].innerHTML=file.B016[2];
                lore06.getElementsByTagName("p")[0].innerHTML=file.B017[2];
                lore07.getElementsByTagName("p")[0].innerHTML=file.B018[2];
                lore08.getElementsByTagName("p")[0].innerHTML=file.B019[2];
                lore09.getElementsByTagName("p")[0].innerHTML=file.B020[2];
                lore10.getElementsByTagName("p")[0].innerHTML=file.S01[2];
            }else if(filename=="ashers_hill"){
                //District
                title.innerHTML=file.D04[1];
head.innerHTML=file.D04[1];
                dist_lore.getElementsByTagName("h2")[0].innerHTML=file.D04[1];
                dist_lore.getElementsByTagName("p")[0].innerHTML=file.D04[2];
                //Building Headings
                lore01.getElementsByTagName("h2")[0].innerHTML=file.B021[0]+file.B021[1];
                lore02.getElementsByTagName("h2")[0].innerHTML=file.B022[0]+file.B022[1];
                lore03.getElementsByTagName("h2")[0].innerHTML=file.B023[0]+file.B023[1];
                lore04.getElementsByTagName("h2")[0].innerHTML=file.B024[0]+file.B024[1];
                lore05.getElementsByTagName("h2")[0].innerHTML=file.B025[0]+file.B025[1];
                lore06.getElementsByTagName("h2")[0].innerHTML=file.B026[0]+file.B026[1];
                lore07.getElementsByTagName("h2")[0].innerHTML=file.B027[0]+file.B027[1];
                lore08.getElementsByTagName("h2")[0].innerHTML=file.B028[0]+file.B028[1];
                lore09.getElementsByTagName("h2")[0].innerHTML=file.B029[0]+file.B029[1];
                lore10.getElementsByTagName("h2")[0].innerHTML=file.B030[0]+file.B030[1];
                //Navigation
                lore11.getElementsByTagName("h2")[0].innerHTML=file.to+file.D02[1];
                lore12.getElementsByTagName("h2")[0].innerHTML=file.to+file.D03[1];
                lore13.getElementsByTagName("h2")[0].innerHTML=file.to+file.D06[1];
                //Building Paragraphs
                lore01.getElementsByTagName("p")[0].innerHTML=file.B021[2];
                lore02.getElementsByTagName("p")[0].innerHTML=file.B022[2];
                lore03.getElementsByTagName("p")[0].innerHTML=file.B023[2];
                lore04.getElementsByTagName("p")[0].innerHTML=file.B024[2];
                lore05.getElementsByTagName("p")[0].innerHTML=file.B025[2];
                lore06.getElementsByTagName("p")[0].innerHTML=file.B026[2];
                lore07.getElementsByTagName("p")[0].innerHTML=file.B027[2];
                lore08.getElementsByTagName("p")[0].innerHTML=file.B028[2];
                lore09.getElementsByTagName("p")[0].innerHTML=file.B029[2];
                lore10.getElementsByTagName("p")[0].innerHTML=file.B030[2];
            }else if(filename=="oakgate"){
                //District
                title.innerHTML=file.D05[1];
head.innerHTML=file.D05[1];
                dist_lore.getElementsByTagName("h2")[0].innerHTML=file.D05[1];
                dist_lore.getElementsByTagName("p")[0].innerHTML=file.D05[2];
                //Building Headings
                lore01.getElementsByTagName("h2")[0].innerHTML=file.B031[0]+file.B031[1];
                lore02.getElementsByTagName("h2")[0].innerHTML=file.B032[0]+file.B032[1];
                lore03.getElementsByTagName("h2")[0].innerHTML=file.B033[0]+file.B033[1];
                lore04.getElementsByTagName("h2")[0].innerHTML=file.B034[0]+file.B034[1];
                lore05.getElementsByTagName("h2")[0].innerHTML=file.B035[0]+file.B035[1];
                lore06.getElementsByTagName("h2")[0].innerHTML=file.B036[0]+file.B036[1];
                lore07.getElementsByTagName("h2")[0].innerHTML=file.B037[0]+file.B037[1];
                lore08.getElementsByTagName("h2")[0].innerHTML=file.B038[0]+file.B038[1];
                lore09.getElementsByTagName("h2")[0].innerHTML=file.B039[0]+file.B039[1];
                //Navigation
                lore10.getElementsByTagName("h2")[0].innerHTML=file.to+file.D53[1];
                lore11.getElementsByTagName("h2")[0].innerHTML=file.to+file.D07[1];
                lore12.getElementsByTagName("h2")[0].innerHTML=file.to+file.D06[1];
                lore13.getElementsByTagName("h2")[0].innerHTML=file.to+file.D02[1];
                //Building Paragraphs
                lore01.getElementsByTagName("p")[0].innerHTML=file.B031[2];
                lore02.getElementsByTagName("p")[0].innerHTML=file.B032[2];
                lore03.getElementsByTagName("p")[0].innerHTML=file.B033[2];
                lore04.getElementsByTagName("p")[0].innerHTML=file.B034[2];
                lore05.getElementsByTagName("p")[0].innerHTML=file.B035[2];
                lore06.getElementsByTagName("p")[0].innerHTML=file.B036[2];
                lore07.getElementsByTagName("p")[0].innerHTML=file.B037[2];
                lore08.getElementsByTagName("p")[0].innerHTML=file.B038[2];
                lore09.getElementsByTagName("p")[0].innerHTML=file.B039[2];
            }else if(filename=="balder_dist"){
                //District
                title.innerHTML=file.D06[1];
head.innerHTML=file.D06[1];
dist_lore.getElementsByTagName("h2")[0].innerHTML=file.D06[1];
dist_lore.getElementsByTagName("p")[0].innerHTML=file.D06[2];
                //Building Headings
                lore01.getElementsByTagName("h2")[0].innerHTML=file.B040[0]+file.B040[1];
lore02.getElementsByTagName("h2")[0].innerHTML=file.B041[0]+file.B041[1];
lore03.getElementsByTagName("h2")[0].innerHTML=file.B042[0]+file.B042[1];
lore04.getElementsByTagName("h2")[0].innerHTML=file.B043[0]+file.B043[1];
lore05.getElementsByTagName("h2")[0].innerHTML=file.B044[0]+file.B044[1];
lore06.getElementsByTagName("h2")[0].innerHTML=file.B045[0]+file.B045[1];
lore07.getElementsByTagName("h2")[0].innerHTML=file.B046[0]+file.B046[1];
lore08.getElementsByTagName("h2")[0].innerHTML=file.B047[0]+file.B047[1];
lore09.getElementsByTagName("h2")[0].innerHTML=file.B048[0]+file.B048[1];
                //Navigation
lore10.getElementsByTagName("h2")[0].innerHTML=file.to+file.D05[1];
lore11.getElementsByTagName("h2")[0].innerHTML=file.to+file.D04[1];
lore12.getElementsByTagName("h2")[0].innerHTML=file.to+file.D07[1];
lore13.getElementsByTagName("h2")[0].innerHTML=file.to+file.D08[1]; 
               //Building Paragraphs
lore01.getElementsByTagName("p")[0].innerHTML=file.B040[2];
lore02.getElementsByTagName("p")[0].innerHTML=file.B041[2];
lore03.getElementsByTagName("p")[0].innerHTML=file.B042[2];
lore04.getElementsByTagName("p")[0].innerHTML=file.B043[2];
lore05.getElementsByTagName("p")[0].innerHTML=file.B044[2];
lore06.getElementsByTagName("p")[0].innerHTML=file.B045[2];
lore07.getElementsByTagName("p")[0].innerHTML=file.B046[2];
lore08.getElementsByTagName("p")[0].innerHTML=file.B047[2];
lore09.getElementsByTagName("p")[0].innerHTML=file.B048[2];
            }else if(filename=="redwani_dist"){
                //District
                title.innerHTML=file.D07[1];
head.innerHTML=file.D07[1];
dist_lore.getElementsByTagName("h2")[0].innerHTML=file.D07[1];
dist_lore.getElementsByTagName("p")[0].innerHTML=file.D07[2];
                //Building Headings
                lore01.getElementsByTagName("h2")[0].innerHTML=file.B049[1];
lore02.getElementsByTagName("h2")[0].innerHTML=file.B050[0]+file.B050[1];
lore03.getElementsByTagName("h2")[0].innerHTML=file.B051[0]+file.B051[1];
lore04.getElementsByTagName("h2")[0].innerHTML=file.B052[0]+file.B052[1];
lore05.getElementsByTagName("h2")[0].innerHTML=file.B053[0]+file.B053[1];
lore06.getElementsByTagName("h2")[0].innerHTML=file.B054[0]+file.B054[1];
lore07.getElementsByTagName("h2")[0].innerHTML=file.B055[0]+file.B055[1];
lore08.getElementsByTagName("h2")[0].innerHTML=file.B056[0]+file.B056[1];
lore09.getElementsByTagName("h2")[0].innerHTML=file.B057[0]+file.B057[1];
lore10.getElementsByTagName("h2")[0].innerHTML=file.P13[0]+file.P13[1];
                //Navigation
                lore11.getElementsByTagName("h2")[0].innerHTML=file.to+file.D06[1];
lore12.getElementsByTagName("h2")[0].innerHTML=file.to+file.D08[1];
lore13.getElementsByTagName("h2")[0].innerHTML=file.to+file.D05[1];
                //Building Paragraphs
                lore01.getElementsByTagName("p")[0].innerHTML=file.B049[2];
lore02.getElementsByTagName("p")[0].innerHTML=file.B050[2];
lore03.getElementsByTagName("p")[0].innerHTML=file.B051[2];
lore04.getElementsByTagName("p")[0].innerHTML=file.B052[2];
lore05.getElementsByTagName("p")[0].innerHTML=file.B053[2];
lore06.getElementsByTagName("p")[0].innerHTML=file.B054[2];
lore07.getElementsByTagName("p")[0].innerHTML=file.B055[2];
lore08.getElementsByTagName("p")[0].innerHTML=file.B056[2];
lore09.getElementsByTagName("p")[0].innerHTML=file.B057[2];
lore10.getElementsByTagName("p")[0].innerHTML=file.P13[2];
            }else if(filename=="crowne_dist"){
                //District
                title.innerHTML=file.D08[1];
head.innerHTML=file.D08[1];
dist_lore.getElementsByTagName("h2")[0].innerHTML=file.D08[1];
dist_lore.getElementsByTagName("p")[0].innerHTML=file.D08[2];
                //Building Headings
                lore01.getElementsByTagName("h2")[0].innerHTML=file.B058[0]+file.B058[1];
lore02.getElementsByTagName("h2")[0].innerHTML=file.B059[0]+file.B059[1];
lore03.getElementsByTagName("h2")[0].innerHTML=file.B060[0]+file.B060[1];
lore04.getElementsByTagName("h2")[0].innerHTML=file.B061[0]+file.B061[1];
lore05.getElementsByTagName("h2")[0].innerHTML=file.B062[0]+file.B062[1];
lore06.getElementsByTagName("h2")[0].innerHTML=file.B063[0]+file.B063[1];
lore07.getElementsByTagName("h2")[0].innerHTML=file.B064[0]+file.B064[1];
lore08.getElementsByTagName("h2")[0].innerHTML=file.B065[0]+file.B065[1];
lore09.getElementsByTagName("h2")[0].innerHTML=file.B066[0]+file.B066[1];
lore10.getElementsByTagName("h2")[0].innerHTML=file.B067[0]+file.B067[1];
lore11.getElementsByTagName("h2")[0].innerHTML=file.B068[0]+file.B068[1];
lore12.getElementsByTagName("h2")[0].innerHTML=file.B069[0]+file.B069[1];
lore13.getElementsByTagName("h2")[0].innerHTML=file.S09[0]+file.S09[1];
                //Navigation
                lore14.getElementsByTagName("h2")[0].innerHTML=file.to+file.D07[1];
lore15.getElementsByTagName("h2")[0].innerHTML=file.to+file.D09[1];
lore16.getElementsByTagName("h2")[0].innerHTML=file.to+file.D06[1];
                //Building Paragraphs
                lore03.getElementsByTagName("p")[0].innerHTML=file.B060[2];
lore04.getElementsByTagName("p")[0].innerHTML=file.B061[2];
lore05.getElementsByTagName("p")[0].innerHTML=file.B062[2];
lore06.getElementsByTagName("p")[0].innerHTML=file.B063[2];
lore07.getElementsByTagName("p")[0].innerHTML=file.B064[2];
lore08.getElementsByTagName("p")[0].innerHTML=file.B065[2];
lore09.getElementsByTagName("p")[0].innerHTML=file.B066[2];
lore10.getElementsByTagName("p")[0].innerHTML=file.B067[2];
lore11.getElementsByTagName("p")[0].innerHTML=file.B068[2];
lore12.getElementsByTagName("p")[0].innerHTML=file.B069[2];
lore13.getElementsByTagName("p")[0].innerHTML=file.S09[2];
            }else if(filename=="bronze_hill"){
                //District
                title.innerHTML=file.D09[1];
head.innerHTML=file.D09[1];
dist_lore.getElementsByTagName("h2")[0].innerHTML=file.D09[1];
dist_lore.getElementsByTagName("p")[0].innerHTML=file.D09[2];
                //Building Headings
                lore01.getElementsByTagName("h2")[0].innerHTML=file.B070[0]+file.B070[1];
lore02.getElementsByTagName("h2")[0].innerHTML=file.B071[0]+file.B071[1];
lore03.getElementsByTagName("h2")[0].innerHTML=file.B072[0]+file.B072[1];
lore04.getElementsByTagName("h2")[0].innerHTML=file.B073[0]+file.B073[1];
lore05.getElementsByTagName("h2")[0].innerHTML=file.B074[0]+file.B074[1];
lore06.getElementsByTagName("h2")[0].innerHTML=file.B075[0]+file.B075[1];
lore07.getElementsByTagName("h2")[0].innerHTML=file.B076[0]+file.B076[1];
lore08.getElementsByTagName("h2")[0].innerHTML=file.B077[0]+file.B077[1];
lore09.getElementsByTagName("h2")[0].innerHTML=file.B078[0]+file.B078[1];
lore10.getElementsByTagName("h2")[0].innerHTML=file.B079[0]+file.B079[1];
lore11.getElementsByTagName("h2")[0].innerHTML=file.B080[0]+file.B080[1];
lore12.getElementsByTagName("h2")[0].innerHTML=file.P12[0]+file.P12[1];
                //Navigation
                lore13.getElementsByTagName("h2")[0].innerHTML=file.to+file.D08[1];
lore14.getElementsByTagName("h2")[0].innerHTML=file.to+file.D10[1];
lore15.getElementsByTagName("h2")[0].innerHTML=file.to+file.D12[1];
lore16.getElementsByTagName("h2")[0].innerHTML=file.to+file.D11[1];
                //Building Paragraphs
                lore01.getElementsByTagName("p")[0].innerHTML=file.B070[2];
lore02.getElementsByTagName("p")[0].innerHTML=file.B071[2];
lore03.getElementsByTagName("p")[0].innerHTML=file.B072[2];
lore04.getElementsByTagName("p")[0].innerHTML=file.B073[2];
lore05.getElementsByTagName("p")[0].innerHTML=file.B074[2];
lore06.getElementsByTagName("p")[0].innerHTML=file.B075[2];
lore07.getElementsByTagName("p")[0].innerHTML=file.B076[2];
lore08.getElementsByTagName("p")[0].innerHTML=file.B077[2];
lore09.getElementsByTagName("p")[0].innerHTML=file.B078[2];
lore10.getElementsByTagName("p")[0].innerHTML=file.B079[2];
lore11.getElementsByTagName("p")[0].innerHTML=file.B080[2];
lore12.getElementsByTagName("p")[0].innerHTML=file.P12[2];
            }else if(filename=="mithrilgate"){
                //District
                title.innerHTML=file.D10[1];
head.innerHTML=file.D10[1];
dist_lore.getElementsByTagName("h2")[0].innerHTML=file.D10[1];
dist_lore.getElementsByTagName("p")[0].innerHTML=file.D10[2];
                //Building Headings
                lore01.getElementsByTagName("h2")[0].innerHTML=file.B081[0]+file.B081[1];
lore02.getElementsByTagName("h2")[0].innerHTML=file.B082[0]+file.B082[1];
lore03.getElementsByTagName("h2")[0].innerHTML=file.B083[0]+file.B083[1];
lore04.getElementsByTagName("h2")[0].innerHTML=file.B084[0]+file.B084[1];
lore05.getElementsByTagName("h2")[0].innerHTML=file.B085[0]+file.B085[1];
lore06.getElementsByTagName("h2")[0].innerHTML=file.B086[0]+file.B086[1];
lore07.getElementsByTagName("h2")[0].innerHTML=file.B087[0]+file.B087[1];
lore08.getElementsByTagName("h2")[0].innerHTML=file.B088[0]+file.B088[1];
lore09.getElementsByTagName("h2")[0].innerHTML=file.S08[0]+file.S08[1];
                //Navigation
                lore10.getElementsByTagName("h2")[0].innerHTML=file.to+file.D09[1];
lore11.getElementsByTagName("h2")[0].innerHTML=file.to+file.D12[1];
lore12.getElementsByTagName("h2")[0].innerHTML=file.to+file.D59[1];
                //Building Paragraphs
                lore01.getElementsByTagName("p")[0].innerHTML=file.B081[2];
lore02.getElementsByTagName("p")[0].innerHTML=file.B082[2];
lore03.getElementsByTagName("p")[0].innerHTML=file.B083[2];
lore04.getElementsByTagName("p")[0].innerHTML=file.B084[2];
lore05.getElementsByTagName("p")[0].innerHTML=file.B085[2];
lore06.getElementsByTagName("p")[0].innerHTML=file.B086[2];
lore07.getElementsByTagName("p")[0].innerHTML=file.B087[2];
lore08.getElementsByTagName("p")[0].innerHTML=file.B088[2];
lore09.getElementsByTagName("p")[0].innerHTML=file.S08[2];
            }else if(filename=="lantern_dist"){
                //District
                title.innerHTML=file.D11[1];
head.innerHTML=file.D11[1];
dist_lore.getElementsByTagName("h2")[0].innerHTML=file.D11[1];
dist_lore.getElementsByTagName("p")[0].innerHTML=file.D11[2];
                //Building Headings
                lore01.getElementsByTagName("h2")[0].innerHTML=file.B089[0]+file.B089[1];
lore02.getElementsByTagName("h2")[0].innerHTML=file.B090[0]+file.B090[1];
lore03.getElementsByTagName("h2")[0].innerHTML=file.B091[0]+file.B091[1];
lore04.getElementsByTagName("h2")[0].innerHTML=file.B092[0]+file.B092[1];
lore05.getElementsByTagName("h2")[0].innerHTML=file.B093[0]+file.B093[1];
lore06.getElementsByTagName("h2")[0].innerHTML=file.B094[0]+file.B094[1];
lore07.getElementsByTagName("h2")[0].innerHTML=file.B095[0]+file.B095[1];
                //Navigation
                lore08.getElementsByTagName("h2")[0].innerHTML=file.to+file.D09[1];
lore09.getElementsByTagName("h2")[0].innerHTML=file.to+file.D12[1];
lore10.getElementsByTagName("h2")[0].innerHTML=file.to+file.D16[1];
                //Building Paragraphs
                lore01.getElementsByTagName("p")[0].innerHTML=file.B089[2];
lore02.getElementsByTagName("p")[0].innerHTML=file.B090[2];
lore03.getElementsByTagName("p")[0].innerHTML=file.B091[2];
lore04.getElementsByTagName("p")[0].innerHTML=file.B092[2];
lore05.getElementsByTagName("p")[0].innerHTML=file.B093[2];
lore06.getElementsByTagName("p")[0].innerHTML=file.B094[2];
lore07.getElementsByTagName("p")[0].innerHTML=file.B095[2];
            }else if(filename=="coinflow_dist"){
                //District
                title.innerHTML=file.D12[1];
head.innerHTML=file.D12[1];
dist_lore.getElementsByTagName("h2")[0].innerHTML=file.D12[1];
dist_lore.getElementsByTagName("p")[0].innerHTML=file.D12[2];
                //Building Headings
                lore01.getElementsByTagName("h2")[0].innerHTML=file.B096[0]+file.B096[1];
lore02.getElementsByTagName("h2")[0].innerHTML=file.B097[0]+file.B097[1];
lore03.getElementsByTagName("h2")[0].innerHTML=file.B098[0]+file.B098[1];
lore04.getElementsByTagName("h2")[0].innerHTML=file.B099[0]+file.B099[1];
lore05.getElementsByTagName("h2")[0].innerHTML=file.B100[0]+file.B100[1];
lore06.getElementsByTagName("h2")[0].innerHTML=file.B101[0]+file.B101[1];
lore07.getElementsByTagName("h2")[0].innerHTML=file.B102[0]+file.B102[1];
lore08.getElementsByTagName("h2")[0].innerHTML=file.B103[0]+file.B103[1];
lore09.getElementsByTagName("h2")[0].innerHTML=file.B104[0]+file.B104[1];
lore10.getElementsByTagName("h2")[0].innerHTML=file.B105[0]+file.B105[1];
                //Navigation
                lore11.getElementsByTagName("h2")[0].innerHTML=file.to+file.D10[1];
lore12.getElementsByTagName("h2")[0].innerHTML=file.to+file.D09[1];
lore13.getElementsByTagName("h2")[0].innerHTML=file.to+file.D15[1];
lore14.getElementsByTagName("h2")[0].innerHTML=file.to+file.D13[1];
lore15.getElementsByTagName("h2")[0].innerHTML=file.to+file.D11[1];
lore16.getElementsByTagName("h2")[0].innerHTML=file.to+file.D16[1];
                //Building Paragraphs
                lore01.getElementsByTagName("p")[0].innerHTML=file.B096[2];
lore02.getElementsByTagName("p")[0].innerHTML=file.B097[2];
lore03.getElementsByTagName("p")[0].innerHTML=file.B098[2];
lore04.getElementsByTagName("p")[0].innerHTML=file.B099[2];
lore05.getElementsByTagName("p")[0].innerHTML=file.B100[2];
lore06.getElementsByTagName("p")[0].innerHTML=file.B101[2];
lore07.getElementsByTagName("p")[0].innerHTML=file.B102[2];
lore08.getElementsByTagName("p")[0].innerHTML=file.B103[2];
lore09.getElementsByTagName("p")[0].innerHTML=file.B104[2];
lore10.getElementsByTagName("p")[0].innerHTML=file.B105[2];
            }else if(filename=="mariqtown"){
                //District
                title.innerHTML=file.D13[1];
head.innerHTML=file.D13[1];
dist_lore.getElementsByTagName("h2")[0].innerHTML=file.D13[1];
dist_lore.getElementsByTagName("p")[0].innerHTML=file.D13[2];
                //Building Headings
                lore01.getElementsByTagName("h2")[0].innerHTML=file.B106[0]+file.B106[1];
lore02.getElementsByTagName("h2")[0].innerHTML=file.B107[0]+file.B107[1];
lore03.getElementsByTagName("h2")[0].innerHTML=file.B108[0]+file.B108[1];
lore04.getElementsByTagName("h2")[0].innerHTML=file.B109[0]+file.B109[1];
                //Navigation
                lore05.getElementsByTagName("h2")[0].innerHTML=file.to+file.D12[1];
lore06.getElementsByTagName("h2")[0].innerHTML=file.to+file.D15[1];
lore07.getElementsByTagName("h2")[0].innerHTML=file.to+file.D14[1];
                //Building Paragraphs
                lore01.getElementsByTagName("p")[0].innerHTML=file.B106[2];
lore02.getElementsByTagName("p")[0].innerHTML=file.B107[2];
lore03.getElementsByTagName("p")[0].innerHTML=file.B108[2];
lore04.getElementsByTagName("p")[0].innerHTML=file.B109[2];
            }else if(filename=="thalonian_dist"){
                //District
                title.innerHTML=file.D14[1];
head.innerHTML=file.D14[1];
dist_lore.getElementsByTagName("h2")[0].innerHTML=file.D14[1];
dist_lore.getElementsByTagName("p")[0].innerHTML=file.D14[2];
                //Building Headings
                lore01.getElementsByTagName("h2")[0].innerHTML=file.B110[0]+file.B110[1];
lore02.getElementsByTagName("h2")[0].innerHTML=file.B111[0]+file.B111[1];
lore03.getElementsByTagName("h2")[0].innerHTML=file.B112[0]+file.B112[1];
lore04.getElementsByTagName("h2")[0].innerHTML=file.B113[0]+file.B113[1];
lore05.getElementsByTagName("h2")[0].innerHTML=file.B114[0]+file.B114[1];
lore06.getElementsByTagName("h2")[0].innerHTML=file.B115[0]+file.B115[1];
lore07.getElementsByTagName("h2")[0].innerHTML=file.B116[0]+file.B116[1];
lore08.getElementsByTagName("h2")[0].innerHTML=file.B117[0]+file.B117[1];
lore09.getElementsByTagName("h2")[0].innerHTML=file.B118[0]+file.B118[1];
lore10.getElementsByTagName("h2")[0].innerHTML=file.B119[0]+file.B119[1];
lore11.getElementsByTagName("h2")[0].innerHTML=file.B120[0]+file.B120[1];
lore12.getElementsByTagName("h2")[0].innerHTML=file.B121[0]+file.B121[1];
lore13.getElementsByTagName("h2")[0].innerHTML=file.B122[0]+file.B122[1];
lore14.getElementsByTagName("h2")[0].innerHTML=file.B123[0]+file.B123[1];
lore15.getElementsByTagName("h2")[0].innerHTML=file.B124[0]+file.B124[1];
lore16.getElementsByTagName("h2")[0].innerHTML=file.B125[0]+file.B125[1];
lore17.getElementsByTagName("h2")[0].innerHTML=file.B126[0]+file.B126[1];
lore18.getElementsByTagName("h2")[0].innerHTML=file.B127[0]+file.B127[1];
lore19.getElementsByTagName("h2")[0].innerHTML=file.B128[0]+file.B128[1];
lore20.getElementsByTagName("h2")[0].innerHTML=file.B129[0]+file.B129[1];
                //Navigation
                lore21.getElementsByTagName("h2")[0].innerHTML=file.to+file.D13[1];
lore22.getElementsByTagName("h2")[0].innerHTML=file.to+file.D15[1];
lore23.getElementsByTagName("h2")[0].innerHTML=file.to+file.D20[1];
lore24.getElementsByTagName("h2")[0].innerHTML=file.to+file.D16[1];
                //Building Paragraphs
                lore01.getElementsByTagName("p")[0].innerHTML=file.B110[2];
lore02.getElementsByTagName("p")[0].innerHTML=file.B111[2];
lore03.getElementsByTagName("p")[0].innerHTML=file.B112[2];
lore04.getElementsByTagName("p")[0].innerHTML=file.B113[2];
lore05.getElementsByTagName("p")[0].innerHTML=file.B114[2];
lore06.getElementsByTagName("p")[0].innerHTML=file.B115[2];
lore07.getElementsByTagName("p")[0].innerHTML=file.B116[2];
lore08.getElementsByTagName("p")[0].innerHTML=file.B117[2];
lore09.getElementsByTagName("p")[0].innerHTML=file.B118[2];
lore10.getElementsByTagName("p")[0].innerHTML=file.B119[2];
lore11.getElementsByTagName("p")[0].innerHTML=file.B120[2];
lore12.getElementsByTagName("p")[0].innerHTML=file.B121[2];
lore13.getElementsByTagName("p")[0].innerHTML=file.B122[2];
lore14.getElementsByTagName("p")[0].innerHTML=file.B123[2];
lore15.getElementsByTagName("p")[0].innerHTML=file.B124[2];
lore16.getElementsByTagName("p")[0].innerHTML=file.B125[2];
lore17.getElementsByTagName("p")[0].innerHTML=file.B126[2];
lore18.getElementsByTagName("p")[0].innerHTML=file.B127[2];
lore19.getElementsByTagName("p")[0].innerHTML=file.B128[2];
lore20.getElementsByTagName("p")[0].innerHTML=file.B129[2];
            }else if(filename=="shriner_dist"){
                //District
                title.innerHTML=file.D15[1];
head.innerHTML=file.D15[1];
dist_lore.getElementsByTagName("h2")[0].innerHTML=file.D15[1];
dist_lore.getElementsByTagName("p")[0].innerHTML=file.D15[2];
                //Building Headings
                lore01.getElementsByTagName("h2")[0].innerHTML=file.B130[0]+file.B130[1];
lore02.getElementsByTagName("h2")[0].innerHTML=file.B131[0]+file.B131[1];
lore03.getElementsByTagName("h2")[0].innerHTML=file.B132[0]+file.B132[1];
lore04.getElementsByTagName("h2")[0].innerHTML=file.B133[0]+file.B133[1];
lore05.getElementsByTagName("h2")[0].innerHTML=file.B134[0]+file.B134[1];
lore06.getElementsByTagName("h2")[0].innerHTML=file.B135[0]+file.B135[1];
lore07.getElementsByTagName("h2")[0].innerHTML=file.B136[0]+file.B136[1];
lore08.getElementsByTagName("h2")[0].innerHTML=file.B137[0]+file.B137[1];
                //Navigation
                lore09.getElementsByTagName("h2")[0].innerHTML=file.to+file.D12[1];
lore10.getElementsByTagName("h2")[0].innerHTML=file.to+file.D13[1];
lore11.getElementsByTagName("h2")[0].innerHTML=file.to+file.D14[1];
                //Building Paragraphs
                lore01.getElementsByTagName("p")[0].innerHTML=file.B130[2];
lore02.getElementsByTagName("p")[0].innerHTML=file.B131[2];
lore03.getElementsByTagName("p")[0].innerHTML=file.B132[2];
lore04.getElementsByTagName("p")[0].innerHTML=file.B133[2];
lore05.getElementsByTagName("p")[0].innerHTML=file.B134[2];
lore06.getElementsByTagName("p")[0].innerHTML=file.B135[2];
lore07.getElementsByTagName("p")[0].innerHTML=file.B136[2];
lore08.getElementsByTagName("p")[0].innerHTML=file.B137[2];
            }else if(filename=="temple_dist"){
                //District
                title.innerHTML=file.D16[1];
head.innerHTML=file.D16[1];
dist_lore.getElementsByTagName("h2")[0].innerHTML=file.D16[1];
dist_lore.getElementsByTagName("p")[0].innerHTML=file.D16[2];
                //Building Headings
                lore01.getElementsByTagName("h2")[0].innerHTML=file.B138[0]+file.B138[1];
lore02.getElementsByTagName("h2")[0].innerHTML=file.B139[0]+file.B139[1];
lore03.getElementsByTagName("h2")[0].innerHTML=file.B140[0]+file.B140[1];
lore04.getElementsByTagName("h2")[0].innerHTML=file.B141[0]+file.B141[1];
lore05.getElementsByTagName("h2")[0].innerHTML=file.B142[0]+file.B142[1];
lore06.getElementsByTagName("h2")[0].innerHTML=file.B143[0]+file.B143[1];
lore07.getElementsByTagName("h2")[0].innerHTML=file.B144[0]+file.B144[1];
lore08.getElementsByTagName("h2")[0].innerHTML=file.B145[0]+file.B145[1];
lore09.getElementsByTagName("h2")[0].innerHTML=file.B146[0]+file.B146[1];
lore10.getElementsByTagName("h2")[0].innerHTML=file.B147[0]+file.B147[1];
lore11.getElementsByTagName("h2")[0].innerHTML=file.B148[0]+file.B148[1];
lore12.getElementsByTagName("h2")[0].innerHTML=file.B149[0]+file.B149[1];
lore13.getElementsByTagName("h2")[0].innerHTML=file.B150[0]+file.B150[1];
lore14.getElementsByTagName("h2")[0].innerHTML=file.B151[0]+file.B151[1];
lore15.getElementsByTagName("h2")[0].innerHTML=file.B152[0]+file.B152[1];
lore16.getElementsByTagName("h2")[0].innerHTML=file.B153[0]+file.B153[1];
lore17.getElementsByTagName("h2")[0].innerHTML=file.B154[0]+file.B154[1];
lore18.getElementsByTagName("h2")[0].innerHTML=file.B155[0]+file.B155[1];
lore19.getElementsByTagName("h2")[0].innerHTML=file.B156[0]+file.B156[1];
lore20.getElementsByTagName("h2")[0].innerHTML=file.S06[0]+file.S06[1];
lore21.getElementsByTagName("h2")[0].innerHTML=file.P11[0]+file.P11[1];
                //Navigation
                lore22.getElementsByTagName("h2")[0].innerHTML=file.to+file.D11[1];
lore23.getElementsByTagName("h2")[0].innerHTML=file.to+file.D12[1];
lore24.getElementsByTagName("h2")[0].innerHTML=file.to+file.D14[1];
lore25.getElementsByTagName("h2")[0].innerHTML=file.to+file.D18[1];
lore26.getElementsByTagName("h2")[0].innerHTML=file.to+file.D19[1];
                //Building Paragraphs
                lore01.getElementsByTagName("p")[0].innerHTML=file.B138[2];
lore02.getElementsByTagName("p")[0].innerHTML=file.B139[2];
lore03.getElementsByTagName("p")[0].innerHTML=file.B140[2];
lore04.getElementsByTagName("p")[0].innerHTML=file.B141[2];
lore05.getElementsByTagName("p")[0].innerHTML=file.B142[2];
lore06.getElementsByTagName("p")[0].innerHTML=file.B143[2];
lore07.getElementsByTagName("p")[0].innerHTML=file.B144[2];
lore08.getElementsByTagName("p")[0].innerHTML=file.B145[2];
lore09.getElementsByTagName("p")[0].innerHTML=file.B146[2];
lore10.getElementsByTagName("p")[0].innerHTML=file.B147[2];
lore11.getElementsByTagName("p")[0].innerHTML=file.B148[2];
lore12.getElementsByTagName("p")[0].innerHTML=file.B149[2];
lore13.getElementsByTagName("p")[0].innerHTML=file.B150[2];
lore14.getElementsByTagName("p")[0].innerHTML=file.B151[2];
lore15.getElementsByTagName("p")[0].innerHTML=file.B152[2];
lore16.getElementsByTagName("p")[0].innerHTML=file.B153[2];
lore17.getElementsByTagName("p")[0].innerHTML=file.B154[2];
lore18.getElementsByTagName("p")[0].innerHTML=file.B155[2];
lore19.getElementsByTagName("p")[0].innerHTML=file.B156[2];
lore20.getElementsByTagName("p")[0].innerHTML=file.S06[2];
lore21.getElementsByTagName("p")[0].innerHTML=file.P11[2];
            }else if(filename=="targenhold"){
                //District
                title.innerHTML=file.D17[1];
head.innerHTML=file.D17[1];
dist_lore.getElementsByTagName("h2")[0].innerHTML=file.D17[1];
dist_lore.getElementsByTagName("p")[0].innerHTML=file.D17[2];
                //Building Headings
                lore01.getElementsByTagName("h2")[0].innerHTML=file.B157[0]+file.B157[1];
lore02.getElementsByTagName("h2")[0].innerHTML=file.B158[0]+file.B158[1];
lore03.getElementsByTagName("h2")[0].innerHTML=file.B159[0]+file.B159[1];
lore04.getElementsByTagName("h2")[0].innerHTML=file.B160[0]+file.B160[1];
                //Navigation
                lore05.getElementsByTagName("h2")[0].innerHTML=file.to+file.D18[1];
                //Building Paragraphs
                lore01.getElementsByTagName("p")[0].innerHTML=file.B157[2];
lore02.getElementsByTagName("p")[0].innerHTML=file.B158[2];
lore03.getElementsByTagName("p")[0].innerHTML=file.B159[2];
lore04.getElementsByTagName("p")[0].innerHTML=file.B160[2];
            }else if(filename=="hightown"){
                //District
                title.innerHTML=file.D18[1];
head.innerHTML=file.D18[1];
dist_lore.getElementsByTagName("h2")[0].innerHTML=file.D18[1];
dist_lore.getElementsByTagName("p")[0].innerHTML=file.D18[2];
                //Building Headings
                lore01.getElementsByTagName("h2")[0].innerHTML=file.B161[0]+file.B161[1];
lore02.getElementsByTagName("h2")[0].innerHTML=file.B162[0]+file.B162[1];
lore03.getElementsByTagName("h2")[0].innerHTML=file.B163[0]+file.B163[1];
lore04.getElementsByTagName("h2")[0].innerHTML=file.B164[0]+file.B164[1];
lore05.getElementsByTagName("h2")[0].innerHTML=file.B165[0]+file.B165[1];
lore06.getElementsByTagName("h2")[0].innerHTML=file.B166[0]+file.B166[1];
lore07.getElementsByTagName("h2")[0].innerHTML=file.B167[0]+file.B167[1];
lore08.getElementsByTagName("h2")[0].innerHTML=file.B168[0]+file.B168[1];
lore09.getElementsByTagName("h2")[0].innerHTML=file.B169[0]+file.B169[1];
lore10.getElementsByTagName("h2")[0].innerHTML=file.B170[0]+file.B170[1];
lore11.getElementsByTagName("h2")[0].innerHTML=file.B171[0]+file.B171[1];
lore12.getElementsByTagName("h2")[0].innerHTML=file.B172[0]+file.B172[1];
lore13.getElementsByTagName("h2")[0].innerHTML=file.B173[0]+file.B173[1];
lore14.getElementsByTagName("h2")[0].innerHTML=file.P09[0]+file.P09[1];
lore15.getElementsByTagName("h2")[0].innerHTML=file.S07[0]+file.S07[1];
lore16.getElementsByTagName("h2")[0].innerHTML=file.P07[0]+file.P07[1];
lore17.getElementsByTagName("h2")[0].innerHTML=file.P08[0]+file.P08[1];
                //Navigation
                lore18.getElementsByTagName("h2")[0].innerHTML=file.to+file.D16[1];
lore19.getElementsByTagName("h2")[0].innerHTML=file.to+file.D21[1];
lore20.getElementsByTagName("h2")[0].innerHTML=file.to+file.D17[1];
                //Building Paragraphs
                lore01.getElementsByTagName("p")[0].innerHTML=file.B161[2];
lore02.getElementsByTagName("p")[0].innerHTML=file.B162[2];
lore03.getElementsByTagName("p")[0].innerHTML=file.B163[2];
lore04.getElementsByTagName("p")[0].innerHTML=file.B164[2];
lore05.getElementsByTagName("p")[0].innerHTML=file.B165[2];
lore06.getElementsByTagName("p")[0].innerHTML=file.B166[2];
lore07.getElementsByTagName("p")[0].innerHTML=file.B167[2];
lore08.getElementsByTagName("p")[0].innerHTML=file.B168[2];
lore09.getElementsByTagName("p")[0].innerHTML=file.B169[2];
lore10.getElementsByTagName("p")[0].innerHTML=file.B170[2];
lore11.getElementsByTagName("p")[0].innerHTML=file.B171[2];
lore12.getElementsByTagName("p")[0].innerHTML=file.B172[2];
lore13.getElementsByTagName("p")[0].innerHTML=file.B173[2];
lore14.getElementsByTagName("p")[0].innerHTML=file.P09[2];
lore15.getElementsByTagName("p")[0].innerHTML=file.S07[2];
lore16.getElementsByTagName("p")[0].innerHTML=file.P07[2];
lore17.getElementsByTagName("p")[0].innerHTML=file.P08[2];
            }else if(filename=="craftsmen_dist"){
                //District
                title.innerHTML=file.D19[1];
head.innerHTML=file.D19[1];
dist_lore.getElementsByTagName("h2")[0].innerHTML=file.D19[1];
dist_lore.getElementsByTagName("p")[0].innerHTML=file.D19[2];
                //Building Headings
                lore01.getElementsByTagName("h2")[0].innerHTML=file.B174[0]+file.B174[1];
lore02.getElementsByTagName("h2")[0].innerHTML=file.B175[0]+file.B175[1];
lore03.getElementsByTagName("h2")[0].innerHTML=file.B176[0]+file.B176[1];
lore04.getElementsByTagName("h2")[0].innerHTML=file.B177[0]+file.B177[1];
lore05.getElementsByTagName("h2")[0].innerHTML=file.B178[0]+file.B178[1];
lore06.getElementsByTagName("h2")[0].innerHTML=file.B179[0]+file.B179[1];
lore07.getElementsByTagName("h2")[0].innerHTML=file.B180[0]+file.B180[1];
lore08.getElementsByTagName("h2")[0].innerHTML=file.B181[0]+file.B181[1];
lore09.getElementsByTagName("h2")[0].innerHTML=file.B182[0]+file.B182[1];
lore10.getElementsByTagName("h2")[0].innerHTML=file.S05[0]+file.S05[1];
lore11.getElementsByTagName("h2")[0].innerHTML=file.P10[0]+file.P10[1];
                //Navigation
                lore12.getElementsByTagName("h2")[0].innerHTML=file.to+file.D16[1];
lore13.getElementsByTagName("h2")[0].innerHTML=file.to+file.D20[1];
lore14.getElementsByTagName("h2")[0].innerHTML=file.to+file.D21[1];
                //Building Paragraphs
                lore01.getElementsByTagName("p")[0].innerHTML=file.B174[2];
lore02.getElementsByTagName("p")[0].innerHTML=file.B175[2];
lore03.getElementsByTagName("p")[0].innerHTML=file.B176[2];
lore04.getElementsByTagName("p")[0].innerHTML=file.B177[2];
lore05.getElementsByTagName("p")[0].innerHTML=file.B178[2];
lore06.getElementsByTagName("p")[0].innerHTML=file.B179[2];
lore07.getElementsByTagName("p")[0].innerHTML=file.B180[2];
lore08.getElementsByTagName("p")[0].innerHTML=file.B181[2];
lore09.getElementsByTagName("p")[0].innerHTML=file.B182[2];
lore10.getElementsByTagName("p")[0].innerHTML=file.S05[2];
lore11.getElementsByTagName("p")[0].innerHTML=file.P10[2];
            }else if(filename=="freemans_dist"){
                //District
                title.innerHTML=file.D20[1];
head.innerHTML=file.D20[1];
dist_lore.getElementsByTagName("h2")[0].innerHTML=file.D20[1];
dist_lore.getElementsByTagName("p")[0].innerHTML=file.D20[2];
                //Building Headings
                lore01.getElementsByTagName("h2")[0].innerHTML=file.B183[0]+file.B183[1];
lore02.getElementsByTagName("h2")[0].innerHTML=file.B184[0]+file.B184[1];
lore03.getElementsByTagName("h2")[0].innerHTML=file.B185[0]+file.B185[1];
lore04.getElementsByTagName("h2")[0].innerHTML=file.B186[0]+file.B186[1];
lore05.getElementsByTagName("h2")[0].innerHTML=file.B187[0]+file.B187[1];
lore06.getElementsByTagName("h2")[0].innerHTML=file.B188[0]+file.B188[1];
lore07.getElementsByTagName("h2")[0].innerHTML=file.B189[0]+file.B189[1];
lore08.getElementsByTagName("h2")[0].innerHTML=file.B190[0]+file.B190[1];
lore09.getElementsByTagName("h2")[0].innerHTML=file.B191[0]+file.B191[1];
lore10.getElementsByTagName("h2")[0].innerHTML=file.B192[0]+file.B192[1];
lore11.getElementsByTagName("h2")[0].innerHTML=file.B193[0]+file.B193[1];
lore12.getElementsByTagName("h2")[0].innerHTML=file.B194[0]+file.B194[1];
lore13.getElementsByTagName("h2")[0].innerHTML=file.B195[0]+file.B195[1];
                //Navigation
                lore14.getElementsByTagName("h2")[0].innerHTML=file.to+file.D14[1];
lore15.getElementsByTagName("h2")[0].innerHTML=file.to+file.D19[1];
lore16.getElementsByTagName("h2")[0].innerHTML=file.to+file.D61[1];
                //Building Paragraphs
                lore01.getElementsByTagName("p")[0].innerHTML=file.B183[2];
lore02.getElementsByTagName("p")[0].innerHTML=file.B184[2];
lore03.getElementsByTagName("p")[0].innerHTML=file.B185[2];
lore04.getElementsByTagName("p")[0].innerHTML=file.B186[2];
lore05.getElementsByTagName("p")[0].innerHTML=file.B187[2];
lore06.getElementsByTagName("p")[0].innerHTML=file.B188[2];
lore07.getElementsByTagName("p")[0].innerHTML=file.B189[2];
lore08.getElementsByTagName("p")[0].innerHTML=file.B190[2];
lore09.getElementsByTagName("p")[0].innerHTML=file.B191[2];
lore10.getElementsByTagName("p")[0].innerHTML=file.B192[2];
lore11.getElementsByTagName("p")[0].innerHTML=file.B193[2];
lore12.getElementsByTagName("p")[0].innerHTML=file.B194[2];
lore13.getElementsByTagName("p")[0].innerHTML=file.B195[2];
            }else if(filename=="andarien_dist"){
                //District
                title.innerHTML=file.D21[1];
head.innerHTML=file.D21[1];
dist_lore.getElementsByTagName("h2")[0].innerHTML=file.D21[1];
dist_lore.getElementsByTagName("p")[0].innerHTML=file.D21[2];
                //Building Headings
                lore01.getElementsByTagName("h2")[0].innerHTML=file.B196[0]+file.B196[1];
lore02.getElementsByTagName("h2")[0].innerHTML=file.B197[0]+file.B197[1];
lore03.getElementsByTagName("h2")[0].innerHTML=file.B198[0]+file.B198[1];
lore04.getElementsByTagName("h2")[0].innerHTML=file.B199[0]+file.B199[1];
lore05.getElementsByTagName("h2")[0].innerHTML=file.B200[0]+file.B200[1];
lore06.getElementsByTagName("h2")[0].innerHTML=file.B201[0]+file.B201[1];
lore07.getElementsByTagName("h2")[0].innerHTML=file.B202[0]+file.B202[1];
lore08.getElementsByTagName("h2")[0].innerHTML=file.B203[0]+file.B203[1];
lore09.getElementsByTagName("h2")[0].innerHTML=file.S04[0]+file.S04[1];
                //Navigation
                lore10.getElementsByTagName("h2")[0].innerHTML=file.to+file.D19[1];
lore11.getElementsByTagName("h2")[0].innerHTML=file.to+file.D23[1];
lore12.getElementsByTagName("h2")[0].innerHTML=file.to+file.D28[1];
lore13.getElementsByTagName("h2")[0].innerHTML=file.to+file.D22[1];
lore14.getElementsByTagName("h2")[0].innerHTML=file.to+file.D18[1];
                //Building Paragraphs
                lore01.getElementsByTagName("p")[0].innerHTML=file.B196[2];
lore02.getElementsByTagName("p")[0].innerHTML=file.B197[2];
lore03.getElementsByTagName("p")[0].innerHTML=file.B198[2];
lore04.getElementsByTagName("p")[0].innerHTML=file.B199[2];
lore05.getElementsByTagName("p")[0].innerHTML=file.B200[2];
lore06.getElementsByTagName("p")[0].innerHTML=file.B201[2];
lore07.getElementsByTagName("p")[0].innerHTML=file.B202[2];
lore08.getElementsByTagName("p")[0].innerHTML=file.B203[2];
lore09.getElementsByTagName("p")[0].innerHTML=file.S04[2];
            }else if(filename=="valaisian_dist"){
                //District
                title.innerHTML=file.D22[1];
head.innerHTML=file.D22[1];
dist_lore.getElementsByTagName("h2")[0].innerHTML=file.D22[1];
dist_lore.getElementsByTagName("p")[0].innerHTML=file.D22[2];
                //Building Headings
                lore01.getElementsByTagName("h2")[0].innerHTML=file.B204[0]+file.B204[1];
lore02.getElementsByTagName("h2")[0].innerHTML=file.B205[0]+file.B205[1];
lore03.getElementsByTagName("h2")[0].innerHTML=file.B206[0]+file.B206[1];
lore04.getElementsByTagName("h2")[0].innerHTML=file.B207[0]+file.B207[1];
lore05.getElementsByTagName("h2")[0].innerHTML=file.B208[0]+file.B208[1];
lore06.getElementsByTagName("h2")[0].innerHTML=file.B209[0]+file.B209[1];
lore07.getElementsByTagName("h2")[0].innerHTML=file.B210[0]+file.B210[1];
lore08.getElementsByTagName("h2")[0].innerHTML=file.B211[0]+file.B211[1];
lore09.getElementsByTagName("h2")[0].innerHTML=file.B212[0]+file.B212[1];
lore10.getElementsByTagName("h2")[0].innerHTML=file.B213[0]+file.B213[1];
lore11.getElementsByTagName("h2")[0].innerHTML=file.S04[0]+file.S04[1];
lore12.getElementsByTagName("h2")[0].innerHTML=file.P06[0]+file.P06[1];
                //Navigation
                lore13.getElementsByTagName("h2")[0].innerHTML=file.to+file.D21[1];
lore14.getElementsByTagName("h2")[0].innerHTML=file.to+file.D30[1];
                //Building Paragraphs
                lore01.getElementsByTagName("p")[0].innerHTML=file.B204[2];
lore02.getElementsByTagName("p")[0].innerHTML=file.B205[2];
lore03.getElementsByTagName("p")[0].innerHTML=file.B206[2];
lore04.getElementsByTagName("p")[0].innerHTML=file.B207[2];
lore05.getElementsByTagName("p")[0].innerHTML=file.B208[2];
lore06.getElementsByTagName("p")[0].innerHTML=file.B209[2];
lore07.getElementsByTagName("p")[0].innerHTML=file.B210[2];
lore08.getElementsByTagName("p")[0].innerHTML=file.B211[2];
lore09.getElementsByTagName("p")[0].innerHTML=file.B212[2];
lore10.getElementsByTagName("p")[0].innerHTML=file.B213[2];
lore11.getElementsByTagName("p")[0].innerHTML=file.S04[2];
lore12.getElementsByTagName("p")[0].innerHTML=file.P06[2];
            }else if(filename=="the_narrows"){
                //District
                title.innerHTML=file.D23[1];
head.innerHTML=file.D23[1];
dist_lore.getElementsByTagName("h2")[0].innerHTML=file.D23[1];
dist_lore.getElementsByTagName("p")[0].innerHTML=file.D23[2];
                //Building Headings
                lore01.getElementsByTagName("h2")[0].innerHTML=file.B214[0]+file.B214[1];
lore02.getElementsByTagName("h2")[0].innerHTML=file.B215[0]+file.B215[1];
lore03.getElementsByTagName("h2")[0].innerHTML=file.B216[0]+file.B216[1];
lore04.getElementsByTagName("h2")[0].innerHTML=file.B217[0]+file.B217[1];
lore05.getElementsByTagName("h2")[0].innerHTML=file.B218[0]+file.B218[1];
lore06.getElementsByTagName("h2")[0].innerHTML=file.B219[0]+file.B219[1];
                //Navigation
                lore07.getElementsByTagName("h2")[0].innerHTML=file.to+file.D21[1];
lore08.getElementsByTagName("h2")[0].innerHTML=file.to+file.D28[1];
                //Building Paragraphs
                lore01.getElementsByTagName("p")[0].innerHTML=file.B214[2];
lore02.getElementsByTagName("p")[0].innerHTML=file.B215[2];
lore03.getElementsByTagName("p")[0].innerHTML=file.B216[2];
lore04.getElementsByTagName("p")[0].innerHTML=file.B217[2];
lore05.getElementsByTagName("p")[0].innerHTML=file.B218[2];
lore06.getElementsByTagName("p")[0].innerHTML=file.B219[2];
            }else if(filename=="lower_commons"){
                //District
                title.innerHTML=file.D24[1];
head.innerHTML=file.D24[1];
dist_lore.getElementsByTagName("h2")[0].innerHTML=file.D24[1];
dist_lore.getElementsByTagName("p")[0].innerHTML=file.D24[2];
                //Building Headings
                lore01.getElementsByTagName("h2")[0].innerHTML=file.B220[0]+file.B220[1];
lore02.getElementsByTagName("h2")[0].innerHTML=file.B221[0]+file.B221[1];
lore03.getElementsByTagName("h2")[0].innerHTML=file.B222[0]+file.B222[1];
lore04.getElementsByTagName("h2")[0].innerHTML=file.B223[0]+file.B223[1];
                //Navigation
                lore05.getElementsByTagName("h2")[0].innerHTML=file.to+file.D26[1];
lore06.getElementsByTagName("h2")[0].innerHTML=file.to+file.D61[1];
lore07.getElementsByTagName("h2")[0].innerHTML=file.to+file.D63[1];
lore08.getElementsByTagName("h2")[0].innerHTML=file.to+file.D25[1];
                //Building Paragraphs
                lore01.getElementsByTagName("p")[0].innerHTML=file.B220[2];
lore02.getElementsByTagName("p")[0].innerHTML=file.B221[2];
lore03.getElementsByTagName("p")[0].innerHTML=file.B222[2];
lore04.getElementsByTagName("p")[0].innerHTML=file.B223[2];
            }else if(filename=="upper_commons"){
                //District
                title.innerHTML=file.D25[1];
head.innerHTML=file.D25[1];
dist_lore.getElementsByTagName("h2")[0].innerHTML=file.D25[1];
dist_lore.getElementsByTagName("p")[0].innerHTML=file.D25[2];
                //Building Headings
                lore01.getElementsByTagName("h2")[0].innerHTML=file.B224[0]+file.B224[1];
lore02.getElementsByTagName("h2")[0].innerHTML=file.B225[0]+file.B225[1];
lore03.getElementsByTagName("h2")[0].innerHTML=file.B226[0]+file.B226[1];
lore04.getElementsByTagName("h2")[0].innerHTML=file.B227[0]+file.B227[1];
                //Navigation
                lore05.getElementsByTagName("h2")[0].innerHTML=file.to+file.D26[1];
lore06.getElementsByTagName("h2")[0].innerHTML=file.to+file.D28[1];
lore07.getElementsByTagName("h2")[0].innerHTML=file.to+file.D24[1];
                //Building Paragraphs
                lore01.getElementsByTagName("p")[0].innerHTML=file.B224[2];
lore02.getElementsByTagName("p")[0].innerHTML=file.B225[2];
lore03.getElementsByTagName("p")[0].innerHTML=file.B226[2];
lore04.getElementsByTagName("p")[0].innerHTML=file.B227[2];
            }else if(filename=="greater_canden"){
                //District
                title.innerHTML=file.D26[1];
head.innerHTML=file.D26[1];
dist_lore.getElementsByTagName("h2")[0].innerHTML=file.D26[1];
dist_lore.getElementsByTagName("p")[0].innerHTML=file.D26[2];
                //Building Headings
                lore01.getElementsByTagName("h2")[0].innerHTML=file.B228[0]+file.B228[1];
lore02.getElementsByTagName("h2")[0].innerHTML=file.B229[0]+file.B229[1];
lore03.getElementsByTagName("h2")[0].innerHTML=file.B230[0]+file.B230[1];
lore04.getElementsByTagName("h2")[0].innerHTML=file.B231[0]+file.B231[1];
lore05.getElementsByTagName("h2")[0].innerHTML=file.B232[0]+file.B232[1];
lore06.getElementsByTagName("h2")[0].innerHTML=file.B233[0]+file.B233[1];
lore07.getElementsByTagName("h2")[0].innerHTML=file.B234[0]+file.B234[1];
lore08.getElementsByTagName("h2")[0].innerHTML=file.B235[0]+file.B235[1];
lore09.getElementsByTagName("h2")[0].innerHTML=file.B236[0]+file.B236[1];
lore10.getElementsByTagName("h2")[0].innerHTML=file.P04[0]+file.P04[1];
                //Navigation
                lore11.getElementsByTagName("h2")[0].innerHTML=file.to+file.D27[1];
lore12.getElementsByTagName("h2")[0].innerHTML=file.to+file.D28[1];
lore13.getElementsByTagName("h2")[0].innerHTML=file.to+file.D25[1];
                //Building Paragraphs
                lore01.getElementsByTagName("p")[0].innerHTML=file.B228[2];
lore02.getElementsByTagName("p")[0].innerHTML=file.B229[2];
lore03.getElementsByTagName("p")[0].innerHTML=file.B230[2];
lore04.getElementsByTagName("p")[0].innerHTML=file.B231[2];
lore05.getElementsByTagName("p")[0].innerHTML=file.B232[2];
lore06.getElementsByTagName("p")[0].innerHTML=file.B233[2];
lore07.getElementsByTagName("p")[0].innerHTML=file.B234[2];
lore08.getElementsByTagName("p")[0].innerHTML=file.B235[2];
lore09.getElementsByTagName("p")[0].innerHTML=file.B236[2];
lore10.getElementsByTagName("p")[0].innerHTML=file.P04[2];
            }else if(filename=="lesser_canden"){
                //District
                title.innerHTML=file.D27[1];
head.innerHTML=file.D27[1];
dist_lore.getElementsByTagName("h2")[0].innerHTML=file.D27[1];
dist_lore.getElementsByTagName("p")[0].innerHTML=file.D27[2];
                //Building Headings
                lore01.getElementsByTagName("h2")[0].innerHTML=file.B237[0]+file.B237[1];
lore02.getElementsByTagName("h2")[0].innerHTML=file.B238[0]+file.B238[1];
lore03.getElementsByTagName("h2")[0].innerHTML=file.B239[0]+file.B239[1];
lore04.getElementsByTagName("h2")[0].innerHTML=file.B240[0]+file.B240[1];
lore05.getElementsByTagName("h2")[0].innerHTML=file.B241[0]+file.B241[1];
lore06.getElementsByTagName("h2")[0].innerHTML=file.B242[0]+file.B242[1];
lore07.getElementsByTagName("h2")[0].innerHTML=file.B243[0]+file.B243[1];
lore08.getElementsByTagName("h2")[0].innerHTML=file.B244[0]+file.B244[1];
lore09.getElementsByTagName("h2")[0].innerHTML=file.B245[0]+file.B245[1];
lore10.getElementsByTagName("h2")[0].innerHTML=file.B246[0]+file.B246[1];
lore11.getElementsByTagName("h2")[0].innerHTML=file.B247[0]+file.B247[1];
lore12.getElementsByTagName("h2")[0].innerHTML=file.B248[0]+file.B248[1];
lore13.getElementsByTagName("h2")[0].innerHTML=file.B249[0]+file.B249[1];
lore14.getElementsByTagName("h2")[0].innerHTML=file.P03[0]+file.P03[1];
                //Navigation
                lore15.getElementsByTagName("h2")[0].innerHTML=file.to+file.D29[1];
lore16.getElementsByTagName("h2")[0].innerHTML=file.to+file.D28[1];
lore17.getElementsByTagName("h2")[0].innerHTML=file.to+file.D26[1];
lore18.getElementsByTagName("h2")[0].innerHTML=file.to+file.D35[1];
lore19.getElementsByTagName("h2")[0].innerHTML=file.to+file.D34[1];
                //Building Paragraphs
                lore01.getElementsByTagName("p")[0].innerHTML=file.B237[2];
lore02.getElementsByTagName("p")[0].innerHTML=file.B238[2];
lore03.getElementsByTagName("p")[0].innerHTML=file.B239[2];
lore04.getElementsByTagName("p")[0].innerHTML=file.B240[2];
lore05.getElementsByTagName("p")[0].innerHTML=file.B241[2];
lore06.getElementsByTagName("p")[0].innerHTML=file.B242[2];
lore07.getElementsByTagName("p")[0].innerHTML=file.B243[2];
lore08.getElementsByTagName("p")[0].innerHTML=file.B244[2];
lore09.getElementsByTagName("p")[0].innerHTML=file.B245[2];
lore10.getElementsByTagName("p")[0].innerHTML=file.B246[2];
lore11.getElementsByTagName("p")[0].innerHTML=file.B247[2];
lore12.getElementsByTagName("p")[0].innerHTML=file.B248[2];
lore13.getElementsByTagName("p")[0].innerHTML=file.B249[2];
lore14.getElementsByTagName("p")[0].innerHTML=file.P03[2];
            }else if(filename=="gennmere_dist"){
                //District
                title.innerHTML=file.D28[1];
head.innerHTML=file.D28[1];
dist_lore.getElementsByTagName("h2")[0].innerHTML=file.D28[1];
dist_lore.getElementsByTagName("p")[0].innerHTML=file.D28[2];
                //Building Headings
                lore01.getElementsByTagName("h2")[0].innerHTML=file.B250[0]+file.B250[1];
lore02.getElementsByTagName("h2")[0].innerHTML=file.B251[0]+file.B251[1];
lore03.getElementsByTagName("h2")[0].innerHTML=file.B252[0]+file.B252[1];
lore04.getElementsByTagName("h2")[0].innerHTML=file.B253[0]+file.B253[1];
lore05.getElementsByTagName("h2")[0].innerHTML=file.B254[0]+file.B254[1];
lore06.getElementsByTagName("h2")[0].innerHTML=file.B255[0]+file.B255[1];
lore07.getElementsByTagName("h2")[0].innerHTML=file.B256[0]+file.B256[1];
lore08.getElementsByTagName("h2")[0].innerHTML=file.B257[0]+file.B257[1];
lore09.getElementsByTagName("h2")[0].innerHTML=file.B258[0]+file.B258[1];
lore10.getElementsByTagName("h2")[0].innerHTML=file.B259[0]+file.B259[1];
lore11.getElementsByTagName("h2")[0].innerHTML=file.B260[0]+file.B260[1];
lore12.getElementsByTagName("h2")[0].innerHTML=file.B261[0]+file.B261[1];
lore13.getElementsByTagName("h2")[0].innerHTML=file.P05[0]+file.P05[1];
lore14.getElementsByTagName("h2")[0].innerHTML=file.S03[0]+file.S03[1];
                //Navigation
                lore15.getElementsByTagName("h2")[0].innerHTML=file.to+file.D24[1];
lore16.getElementsByTagName("h2")[0].innerHTML=file.to+file.D25[1];
lore17.getElementsByTagName("h2")[0].innerHTML=file.to+file.D23[1];
lore18.getElementsByTagName("h2")[0].innerHTML=file.to+file.D26[1];
lore19.getElementsByTagName("h2")[0].innerHTML=file.to+file.D27[1];
lore20.getElementsByTagName("h2")[0].innerHTML=file.to+file.D21[1];
lore21.getElementsByTagName("h2")[0].innerHTML=file.to+file.D29[1];
lore22.getElementsByTagName("h2")[0].innerHTML=file.to+file.D30[1];
                //Building Paragraphs
                lore01.getElementsByTagName("p")[0].innerHTML=file.B250[2];
lore02.getElementsByTagName("p")[0].innerHTML=file.B251[2];
lore03.getElementsByTagName("p")[0].innerHTML=file.B252[2];
lore04.getElementsByTagName("p")[0].innerHTML=file.B253[2];
lore05.getElementsByTagName("p")[0].innerHTML=file.B254[2];
lore06.getElementsByTagName("p")[0].innerHTML=file.B255[2];
lore07.getElementsByTagName("p")[0].innerHTML=file.B256[2];
lore08.getElementsByTagName("p")[0].innerHTML=file.B257[2];
lore09.getElementsByTagName("p")[0].innerHTML=file.B258[2];
lore10.getElementsByTagName("p")[0].innerHTML=file.B259[2];
lore11.getElementsByTagName("p")[0].innerHTML=file.B260[2];
lore12.getElementsByTagName("p")[0].innerHTML=file.B261[2];
lore13.getElementsByTagName("p")[0].innerHTML=file.P05[2];
lore14.getElementsByTagName("p")[0].innerHTML=file.S03[2];
            }else if(filename=="graver_hill"){
                //District
                title.innerHTML=file.D29[1];
head.innerHTML=file.D29[1];
dist_lore.getElementsByTagName("h2")[0].innerHTML=file.D29[1];
dist_lore.getElementsByTagName("p")[0].innerHTML=file.D29[2];
                //Building Headings
                lore01.getElementsByTagName("h2")[0].innerHTML=file.B262[0]+file.B262[1];
lore02.getElementsByTagName("h2")[0].innerHTML=file.B263[0]+file.B263[1];
lore03.getElementsByTagName("h2")[0].innerHTML=file.B264[0]+file.B264[1];
lore04.getElementsByTagName("h2")[0].innerHTML=file.B265[0]+file.B265[1];
                //Navigation
                lore05.getElementsByTagName("h2")[0].innerHTML=file.to+file.D30[1];
lore06.getElementsByTagName("h2")[0].innerHTML=file.to+file.D28[1];
lore07.getElementsByTagName("h2")[0].innerHTML=file.to+file.D27[1];
                //Building Paragraphs
                lore01.getElementsByTagName("p")[0].innerHTML=file.B262[2];
lore02.getElementsByTagName("p")[0].innerHTML=file.B263[2];
lore03.getElementsByTagName("p")[0].innerHTML=file.B264[2];
lore04.getElementsByTagName("p")[0].innerHTML=file.B265[2];
            }else if(filename=="durner_dist"){
                //District
                title.innerHTML=file.D30[1];
head.innerHTML=file.D30[1];
dist_lore.getElementsByTagName("h2")[0].innerHTML=file.D30[1];
dist_lore.getElementsByTagName("p")[0].innerHTML=file.D30[2];
                //Building Headings
                lore01.getElementsByTagName("h2")[0].innerHTML=file.B266[0]+file.B266[1];
lore02.getElementsByTagName("h2")[0].innerHTML=file.B267[0]+file.B267[1];
lore03.getElementsByTagName("h2")[0].innerHTML=file.B268[0]+file.B268[1];
lore04.getElementsByTagName("h2")[0].innerHTML=file.B269[0]+file.B269[1];
lore05.getElementsByTagName("h2")[0].innerHTML=file.B270[0]+file.B270[1];
lore06.getElementsByTagName("h2")[0].innerHTML=file.B271[0]+file.B271[1];
lore07.getElementsByTagName("h2")[0].innerHTML=file.B272[0]+file.B272[1];
lore08.getElementsByTagName("h2")[0].innerHTML=file.B273[0]+file.B273[1];
lore09.getElementsByTagName("h2")[0].innerHTML=file.B274[0]+file.B274[1];
lore10.getElementsByTagName("h2")[0].innerHTML=file.S02[0]+file.S02[1];
                //Navigation
                lore11.getElementsByTagName("h2")[0].innerHTML=file.to+file.D63[1];
lore12.getElementsByTagName("h2")[0].innerHTML=file.to+file.D22[1];
lore13.getElementsByTagName("h2")[0].innerHTML=file.to+file.D28[1];
lore14.getElementsByTagName("h2")[0].innerHTML=file.to+file.D34[1];
lore15.getElementsByTagName("h2")[0].innerHTML=file.to+file.D33[1];
lore16.getElementsByTagName("h2")[0].innerHTML=file.to+file.D31[1];
lore17.getElementsByTagName("h2")[0].innerHTML=file.to+file.D29[1];
                //Building Paragraphs
                lore01.getElementsByTagName("p")[0].innerHTML=file.B266[2];
lore02.getElementsByTagName("p")[0].innerHTML=file.B267[2];
lore03.getElementsByTagName("p")[0].innerHTML=file.B268[2];
lore04.getElementsByTagName("p")[0].innerHTML=file.B269[2];
lore05.getElementsByTagName("p")[0].innerHTML=file.B270[2];
lore06.getElementsByTagName("p")[0].innerHTML=file.B271[2];
lore07.getElementsByTagName("p")[0].innerHTML=file.B272[2];
lore08.getElementsByTagName("p")[0].innerHTML=file.B273[2];
lore09.getElementsByTagName("p")[0].innerHTML=file.B274[2];
lore10.getElementsByTagName("p")[0].innerHTML=file.S02[2];
            }else if(filename=="greenfallen_dist"){
                //District
                title.innerHTML=file.D31[1];
head.innerHTML=file.D31[1];
dist_lore.getElementsByTagName("h2")[0].innerHTML=file.D31[1];
dist_lore.getElementsByTagName("p")[0].innerHTML=file.D31[2];
                //Building Headings
                lore01.getElementsByTagName("h2")[0].innerHTML=file.B275[0]+file.B275[1];
lore02.getElementsByTagName("h2")[0].innerHTML=file.B276[0]+file.B276[1];
lore03.getElementsByTagName("h2")[0].innerHTML=file.B277[0]+file.B277[1];
lore04.getElementsByTagName("h2")[0].innerHTML=file.B278[0]+file.B278[1];
lore05.getElementsByTagName("h2")[0].innerHTML=file.B279[0]+file.B279[1];
lore06.getElementsByTagName("h2")[0].innerHTML=file.B280[0]+file.B280[1];
                //Navigation
                lore07.getElementsByTagName("h2")[0].innerHTML=file.to+file.D03[1];
lore08.getElementsByTagName("h2")[0].innerHTML=file.to+file.D30[1];
lore09.getElementsByTagName("h2")[0].innerHTML=file.to+file.D33[1];
lore10.getElementsByTagName("h2")[0].innerHTML=file.to+file.D32[1];
                //Building Paragraphs
                lore01.getElementsByTagName("p")[0].innerHTML=file.B275[2];
lore02.getElementsByTagName("p")[0].innerHTML=file.B276[2];
lore03.getElementsByTagName("p")[0].innerHTML=file.B277[2];
lore04.getElementsByTagName("p")[0].innerHTML=file.B278[2];
lore05.getElementsByTagName("p")[0].innerHTML=file.B279[2];
lore06.getElementsByTagName("p")[0].innerHTML=file.B280[2];
            }else if(filename=="irongate"){
                //District
                title.innerHTML=file.D32[1];
head.innerHTML=file.D32[1];
dist_lore.getElementsByTagName("h2")[0].innerHTML=file.D32[1];
dist_lore.getElementsByTagName("p")[0].innerHTML=file.D32[2];
                //Building Headings
                lore01.getElementsByTagName("h2")[0].innerHTML=file.B281[0]+file.B281[1];
lore02.getElementsByTagName("h2")[0].innerHTML=file.B282[0]+file.B282[1];
lore03.getElementsByTagName("h2")[0].innerHTML=file.B283[0]+file.B283[1];
lore04.getElementsByTagName("h2")[0].innerHTML=file.B284[0]+file.B284[1];
lore05.getElementsByTagName("h2")[0].innerHTML=file.B285[0]+file.B285[1];
lore06.getElementsByTagName("h2")[0].innerHTML=file.B286[0]+file.B286[1];
lore07.getElementsByTagName("h2")[0].innerHTML=file.B287[0]+file.B287[1];
                //Navigation
                lore08.getElementsByTagName("h2")[0].innerHTML=file.to+file.D41[1];
lore09.getElementsByTagName("h2")[0].innerHTML=file.to+file.D31[1];
lore10.getElementsByTagName("h2")[0].innerHTML=file.to+file.D33[1];
lore11.getElementsByTagName("h2")[0].innerHTML=file.to+file.D34[1];
                //Building Paragraphs
                lore01.getElementsByTagName("p")[0].innerHTML=file.B281[2];
lore02.getElementsByTagName("p")[0].innerHTML=file.B282[2];
lore03.getElementsByTagName("p")[0].innerHTML=file.B283[2];
lore04.getElementsByTagName("p")[0].innerHTML=file.B284[2];
lore05.getElementsByTagName("p")[0].innerHTML=file.B285[2];
lore06.getElementsByTagName("p")[0].innerHTML=file.B286[2];
lore07.getElementsByTagName("p")[0].innerHTML=file.B287[2];
            }else if(filename=="golden_oak_hill"){
                //District
                title.innerHTML=file.D33[1];
head.innerHTML=file.D33[1];
dist_lore.getElementsByTagName("h2")[0].innerHTML=file.D33[1];
dist_lore.getElementsByTagName("p")[0].innerHTML=file.D33[2];
                //Building Headings
                lore01.getElementsByTagName("h2")[0].innerHTML=file.B288[0]+file.B288[1];
lore02.getElementsByTagName("h2")[0].innerHTML=file.B289[0]+file.B289[1];
lore03.getElementsByTagName("h2")[0].innerHTML=file.B290[0]+file.B290[1];
lore04.getElementsByTagName("h2")[0].innerHTML=file.B291[0]+file.B291[1];
lore05.getElementsByTagName("h2")[0].innerHTML=file.B292[0]+file.B292[1];
lore06.getElementsByTagName("h2")[0].innerHTML=file.B293[0]+file.B293[1];
lore07.getElementsByTagName("h2")[0].innerHTML=file.B294[0]+file.B294[1];
lore08.getElementsByTagName("h2")[0].innerHTML=file.B295[0]+file.B295[1];
lore09.getElementsByTagName("h2")[0].innerHTML=file.B296[0]+file.B296[1];
lore10.getElementsByTagName("h2")[0].innerHTML=file.B297[0]+file.B297[1];
lore11.getElementsByTagName("h2")[0].innerHTML=file.P02[0]+file.P02[1];
                //Navigation
                lore12.getElementsByTagName("h2")[0].innerHTML=file.to+file.D31[1];
lore13.getElementsByTagName("h2")[0].innerHTML=file.to+file.D30[1];
lore14.getElementsByTagName("h2")[0].innerHTML=file.to+file.D34[1];
lore15.getElementsByTagName("h2")[0].innerHTML=file.to+file.D32[1];
                //Building Paragraphs
                lore01.getElementsByTagName("p")[0].innerHTML=file.B288[2];
lore02.getElementsByTagName("p")[0].innerHTML=file.B289[2];
lore03.getElementsByTagName("p")[0].innerHTML=file.B290[2];
lore04.getElementsByTagName("p")[0].innerHTML=file.B291[2];
lore05.getElementsByTagName("p")[0].innerHTML=file.B292[2];
lore06.getElementsByTagName("p")[0].innerHTML=file.B293[2];
lore07.getElementsByTagName("p")[0].innerHTML=file.B294[2];
lore08.getElementsByTagName("p")[0].innerHTML=file.B295[2];
lore09.getElementsByTagName("p")[0].innerHTML=file.B296[2];
lore10.getElementsByTagName("p")[0].innerHTML=file.B297[2];
lore11.getElementsByTagName("p")[0].innerHTML=file.P02[2];
            }else if(filename=="dirktown_slums"){
                //District
                title.innerHTML=file.D34[1];
head.innerHTML=file.D34[1];
dist_lore.getElementsByTagName("h2")[0].innerHTML=file.D34[1];
dist_lore.getElementsByTagName("p")[0].innerHTML=file.D34[2];
                //Building Headings
                lore01.getElementsByTagName("h2")[0].innerHTML=file.B298[0]+file.B298[1];
lore02.getElementsByTagName("h2")[0].innerHTML=file.B299[0]+file.B299[1];
lore03.getElementsByTagName("h2")[0].innerHTML=file.B300[0]+file.B300[1];
lore04.getElementsByTagName("h2")[0].innerHTML=file.B301[0]+file.B301[1];
                //Navigation
                lore05.getElementsByTagName("h2")[0].innerHTML=file.to+file.D35[1];
lore06.getElementsByTagName("h2")[0].innerHTML=file.to+file.D32[1];
lore07.getElementsByTagName("h2")[0].innerHTML=file.to+file.D33[1];
lore08.getElementsByTagName("h2")[0].innerHTML=file.to+file.D30[1];
lore09.getElementsByTagName("h2")[0].innerHTML=file.to+file.D27[1];
                //Building Paragraphs
                lore01.getElementsByTagName("p")[0].innerHTML=file.B298[2];
lore02.getElementsByTagName("p")[0].innerHTML=file.B299[2];
lore03.getElementsByTagName("p")[0].innerHTML=file.B300[2];
lore04.getElementsByTagName("p")[0].innerHTML=file.B301[2];
            }else if(filename=="smogtown"){
                //District
                title.innerHTML=file.D35[1];
head.innerHTML=file.D35[1];
dist_lore.getElementsByTagName("h2")[0].innerHTML=file.D35[1];
dist_lore.getElementsByTagName("p")[0].innerHTML=file.D35[2];
                //Building Headings
                lore01.getElementsByTagName("h2")[0].innerHTML=file.B302[0]+file.B302[1];
lore02.getElementsByTagName("h2")[0].innerHTML=file.B303[0]+file.B303[1];
lore03.getElementsByTagName("h2")[0].innerHTML=file.B304[0]+file.B304[1];
lore04.getElementsByTagName("h2")[0].innerHTML=file.B305[0]+file.B305[1];
lore05.getElementsByTagName("h2")[0].innerHTML=file.B306[0]+file.B306[1];
lore06.getElementsByTagName("h2")[0].innerHTML=file.B307[0]+file.B307[1];
lore07.getElementsByTagName("h2")[0].innerHTML=file.B308[0]+file.B308[1];
lore08.getElementsByTagName("h2")[0].innerHTML=file.B309[0]+file.B309[1];
lore09.getElementsByTagName("h2")[0].innerHTML=file.B310[0]+file.B310[1];
lore10.getElementsByTagName("h2")[0].innerHTML=file.B311[0]+file.B311[1];
lore11.getElementsByTagName("h2")[0].innerHTML=file.B312[0]+file.B312[1];
lore12.getElementsByTagName("h2")[0].innerHTML=file.B313[0]+file.B313[1];
lore13.getElementsByTagName("h2")[0].innerHTML=file.B314[0]+file.B314[1];
lore14.getElementsByTagName("h2")[0].innerHTML=file.B315[0]+file.B315[1];
lore15.getElementsByTagName("h2")[0].innerHTML=file.B316[0]+file.B316[1];
                //Navigation
                lore16.getElementsByTagName("h2")[0].innerHTML=file.to+file.D34[1];
lore17.getElementsByTagName("h2")[0].innerHTML=file.to+file.D27[1];
lore18.getElementsByTagName("h2")[0].innerHTML=file.to+file.D36[1];
                //Building Paragraphs
                lore01.getElementsByTagName("p")[0].innerHTML=file.B302[2];
lore02.getElementsByTagName("p")[0].innerHTML=file.B303[2];
lore03.getElementsByTagName("p")[0].innerHTML=file.B304[2];
lore04.getElementsByTagName("p")[0].innerHTML=file.B305[2];
lore05.getElementsByTagName("p")[0].innerHTML=file.B306[2];
lore06.getElementsByTagName("p")[0].innerHTML=file.B307[2];
lore07.getElementsByTagName("p")[0].innerHTML=file.B308[2];
lore08.getElementsByTagName("p")[0].innerHTML=file.B309[2];
lore09.getElementsByTagName("p")[0].innerHTML=file.B310[2];
lore10.getElementsByTagName("p")[0].innerHTML=file.B311[2];
lore11.getElementsByTagName("p")[0].innerHTML=file.B312[2];
lore12.getElementsByTagName("p")[0].innerHTML=file.B313[2];
lore13.getElementsByTagName("p")[0].innerHTML=file.B314[2];
lore14.getElementsByTagName("p")[0].innerHTML=file.B315[2];
lore15.getElementsByTagName("p")[0].innerHTML=file.B316[2];
            }else if(filename=="farwater_slums"){
                //District
                title.innerHTML=file.D36[1];
head.innerHTML=file.D36[1];
dist_lore.getElementsByTagName("h2")[0].innerHTML=file.D36[1];
dist_lore.getElementsByTagName("p")[0].innerHTML=file.D36[2];
                //Building Headings
                
                //Navigation
                lore01.getElementsByTagName("h2")[0].innerHTML=file.to+file.D35[1];
lore02.getElementsByTagName("h2")[0].innerHTML=file.to+file.D37[1];
                //Building Paragraphs
                
            }else if(filename=="veshauper_isles"){
                //District
                title.innerHTML=file.D37[1];
head.innerHTML=file.D37[1];
dist_lore.getElementsByTagName("h2")[0].innerHTML=file.D37[1];
dist_lore.getElementsByTagName("p")[0].innerHTML=file.D37[2];
                //Building Headings
                lore01.getElementsByTagName("h2")[0].innerHTML=file.o11[0]+file.o11[1];
                //Navigation
                lore02.getElementsByTagName("h2")[0].innerHTML=file.to+file.D36[1];
                //Building Paragraphs
                lore01.getElementsByTagName("p")[0].innerHTML=file.o11[2];
            }else if(filename=="gendron_fields"){
                //District
                title.innerHTML=file.D38[1];
head.innerHTML=file.D38[1];
dist_lore.getElementsByTagName("h2")[0].innerHTML=file.D38[1];
dist_lore.getElementsByTagName("p")[0].innerHTML=file.D38[2];
                //Building Headings
                
                //Navigation
                lore01.getElementsByTagName("h2")[0].innerHTML=file.to+file.D39[1];
                //Building Paragraphs
                
            }else if(filename=="swinstead"){
                //District
                title.innerHTML=file.D39[1];
head.innerHTML=file.D39[1];
dist_lore.getElementsByTagName("h2")[0].innerHTML=file.D39[1];
dist_lore.getElementsByTagName("p")[0].innerHTML=file.D39[2];
                //Building Headings
                
                //Navigation
                lore01.getElementsByTagName("h2")[0].innerHTML=file.to+file.D40[1];
lore02.getElementsByTagName("h2")[0].innerHTML=file.to+file.D38[1];
                //Building Paragraphs
                
            }else if(filename=="pagle_fields"){
                //District
                title.innerHTML=file.D40[1];
head.innerHTML=file.D40[1];
dist_lore.getElementsByTagName("h2")[0].innerHTML=file.D40[1];
dist_lore.getElementsByTagName("p")[0].innerHTML=file.D40[2];
                //Building Headings
                lore01.getElementsByTagName("h2")[0].innerHTML=file.o12[0]+file.o12[1];
                //Navigation
                lore02.getElementsByTagName("h2")[0].innerHTML=file.to+file.D45[1];
lore03.getElementsByTagName("h2")[0].innerHTML=file.to+file.D42[1];
lore04.getElementsByTagName("h2")[0].innerHTML=file.to+file.D41[1];
lore05.getElementsByTagName("h2")[0].innerHTML=file.to+file.D39[1];
                //Building Paragraphs
                lore01.getElementsByTagName("p")[0].innerHTML=file.o12[2];
            }else if(filename=="irontown"){
                //District
                title.innerHTML=file.D41[1];
head.innerHTML=file.D41[1];
dist_lore.getElementsByTagName("h2")[0].innerHTML=file.D41[1];
dist_lore.getElementsByTagName("p")[0].innerHTML=file.D41[2];
                //Building Headings
                lore01.getElementsByTagName("h2")[0].innerHTML=file.o13[0]+file.o13[1];
                //Navigation
                lore02.getElementsByTagName("h2")[0].innerHTML=file.to+file.D32[1];
lore03.getElementsByTagName("h2")[0].innerHTML=file.to+file.D43[1];
lore04.getElementsByTagName("h2")[0].innerHTML=file.to+file.D42[1];
lore05.getElementsByTagName("h2")[0].innerHTML=file.to+file.D40[1];
                //Building Paragraphs
                lore01.getElementsByTagName("p")[0].innerHTML=file.o13[2];
            }else if(filename=="laker_fields"){
                //District
                title.innerHTML=file.D42[1];
head.innerHTML=file.D42[1];
dist_lore.getElementsByTagName("h2")[0].innerHTML=file.D42[1];
dist_lore.getElementsByTagName("p")[0].innerHTML=file.D42[2];
                //Building Headings
                
                //Navigation
                lore01.getElementsByTagName("h2")[0].innerHTML=file.to+file.D40[1];
lore02.getElementsByTagName("h2")[0].innerHTML=file.to+file.D32[1];
lore03.getElementsByTagName("h2")[0].innerHTML=file.to+file.D45[1];
lore04.getElementsByTagName("h2")[0].innerHTML=file.to+file.D44[1];
lore05.getElementsByTagName("h2")[0].innerHTML=file.to+file.D43[1];
                //Building Paragraphs
                
            }else if(filename=="laketown"){
                //District
                title.innerHTML=file.D43[1];
head.innerHTML=file.D43[1];
dist_lore.getElementsByTagName("h2")[0].innerHTML=file.D43[1];
dist_lore.getElementsByTagName("p")[0].innerHTML=file.D43[2];
                //Building Headings
                
                //Navigation
                lore01.getElementsByTagName("h2")[0].innerHTML=file.to+file.D41[1];
lore02.getElementsByTagName("h2")[0].innerHTML=file.to+file.D44[1];
lore03.getElementsByTagName("h2")[0].innerHTML=file.to+file.D42[1];
                //Building Paragraphs
                
            }else if(filename=="malmstown"){
                //District
                title.innerHTML=file.D44[1];
head.innerHTML=file.D44[1];
dist_lore.getElementsByTagName("h2")[0].innerHTML=file.D44[1];
dist_lore.getElementsByTagName("p")[0].innerHTML=file.D44[2];
                //Building Headings
                lore01.getElementsByTagName("h2")[0].innerHTML=file.o03[0]+file.o03[1];
lore02.getElementsByTagName("h2")[0].innerHTML=file.o04[0]+file.o04[1];
                //Navigation
                lore03.getElementsByTagName("h2")[0].innerHTML=file.to+file.D48[1];
lore04.getElementsByTagName("h2")[0].innerHTML=file.to+file.D50[1];
lore05.getElementsByTagName("h2")[0].innerHTML=file.to+file.D43[1];
lore06.getElementsByTagName("h2")[0].innerHTML=file.to+file.D42[1];
                //Building Paragraphs
                lore01.getElementsByTagName("p")[0].innerHTML=file.o03[2];
lore02.getElementsByTagName("p")[0].innerHTML=file.o04[2];
            }else if(filename=="harker_fields"){
                //District
                title.innerHTML=file.D45[1];
head.innerHTML=file.D45[1];
dist_lore.getElementsByTagName("h2")[0].innerHTML=file.D45[1];
dist_lore.getElementsByTagName("p")[0].innerHTML=file.D45[2];
                //Building Headings
                
                //Navigation
                lore01.getElementsByTagName("h2")[0].innerHTML=file.to+file.D46[1];
lore02.getElementsByTagName("h2")[0].innerHTML=file.to+file.D42[1];
lore03.getElementsByTagName("h2")[0].innerHTML=file.to+file.D40[1];
                //Building Paragraphs
                
            }else if(filename=="jeffson_fields"){
                //District
                title.innerHTML=file.D46[1];
head.innerHTML=file.D46[1];
dist_lore.getElementsByTagName("h2")[0].innerHTML=file.D46[1];
dist_lore.getElementsByTagName("p")[0].innerHTML=file.D46[2];
                //Building Headings
                
                //Navigation
                lore01.getElementsByTagName("h2")[0].innerHTML=file.to+file.D47[1];
lore02.getElementsByTagName("h2")[0].innerHTML=file.to+file.D45[1];
lore03.getElementsByTagName("h2")[0].innerHTML=file.to+file.D48[1];
                //Building Paragraphs
                
            }else if(filename=="stillgrain_fields"){
                //District
                title.innerHTML=file.D47[1];
head.innerHTML=file.D47[1];
dist_lore.getElementsByTagName("h2")[0].innerHTML=file.D47[1];
dist_lore.getElementsByTagName("p")[0].innerHTML=file.D47[2];
                //Building Headings
                
                //Navigation
                lore01.getElementsByTagName("h2")[0].innerHTML=file.to+file.D46[1];
lore02.getElementsByTagName("h2")[0].innerHTML=file.to+file.D48[1];
                //Building Paragraphs
                
            }else if(filename=="jons_fields"){
                //District
                title.innerHTML=file.D48[1];
head.innerHTML=file.D48[1];
dist_lore.getElementsByTagName("h2")[0].innerHTML=file.D48[1];
dist_lore.getElementsByTagName("p")[0].innerHTML=file.D48[2];
                //Building Headings
                
                //Navigation
                lore01.getElementsByTagName("h2")[0].innerHTML=file.to+file.D47[1];
lore02.getElementsByTagName("h2")[0].innerHTML=file.to+file.D46[1];
lore03.getElementsByTagName("h2")[0].innerHTML=file.to+file.D44[1];
                //Building Paragraphs
                
            }else if(filename=="fentic_fields"){
                //District
                title.innerHTML=file.D49[1];
head.innerHTML=file.D49[1];
dist_lore.getElementsByTagName("h2")[0].innerHTML=file.D49[1];
dist_lore.getElementsByTagName("p")[0].innerHTML=file.D49[2];
                //Building Headings
                
                //Navigation
                lore01.getElementsByTagName("h2")[0].innerHTML=file.to+file.D51[1];
lore02.getElementsByTagName("h2")[0].innerHTML=file.to+file.D50[1];
                //Building Paragraphs
                
            }else if(filename=="darrowtown"){
                //District
                title.innerHTML=file.D50[1];
head.innerHTML=file.D50[1];
dist_lore.getElementsByTagName("h2")[0].innerHTML=file.D50[1];
dist_lore.getElementsByTagName("p")[0].innerHTML=file.D50[2];
                //Building Headings
                lore01.getElementsByTagName("h2")[0].innerHTML=file.o02[0]+file.o02[1];
                //Navigation
                lore02.getElementsByTagName("h2")[0].innerHTML=file.to+file.D44[1];
lore03.getElementsByTagName("h2")[0].innerHTML=file.to+file.D49[1];
lore04.getElementsByTagName("h2")[0].innerHTML=file.to+file.D52[1];
lore05.getElementsByTagName("h2")[0].innerHTML=file.to+file.D01[1];
lore06.getElementsByTagName("h2")[0].innerHTML=file.to+file.D51[1];
                //Building Paragraphs
                lore01.getElementsByTagName("p")[0].innerHTML=file.o02[2];
            }else if(filename=="glen_hill"){
                //District
                title.innerHTML=file.D51[1];
head.innerHTML=file.D51[1];
dist_lore.getElementsByTagName("h2")[0].innerHTML=file.D51[1];
dist_lore.getElementsByTagName("p")[0].innerHTML=file.D51[2];
                //Building Headings
                lore01.getElementsByTagName("h2")[0].innerHTML=file.o01[0]+file.o01[1];
                //Navigation
                lore02.getElementsByTagName("h2")[0].innerHTML=file.to+file.D52[1];
lore03.getElementsByTagName("h2")[0].innerHTML=file.to+file.D49[1];
lore04.getElementsByTagName("h2")[0].innerHTML=file.to+file.D50[1];
                //Building Paragraphs
                lore01.getElementsByTagName("p")[0].innerHTML=file.o01[2];
            }else if(filename=="highcrowe_fields"){
                //District
                title.innerHTML=file.D52[1];
head.innerHTML=file.D52[1];
dist_lore.getElementsByTagName("h2")[0].innerHTML=file.D52[1];
dist_lore.getElementsByTagName("p")[0].innerHTML=file.D52[2];
                //Building Headings
                lore01.getElementsByTagName("h2")[0].innerHTML=file.o05[0]+file.o05[1];
                //Navigation
                lore02.getElementsByTagName("h2")[0].innerHTML=file.to+file.D54[1];
lore03.getElementsByTagName("h2")[0].innerHTML=file.to+file.D53[1];
lore04.getElementsByTagName("h2")[0].innerHTML=file.to+file.D50[1];
lore05.getElementsByTagName("h2")[0].innerHTML=file.to+file.D51[1];
                //Building Paragraphs
                lore01.getElementsByTagName("p")[0].innerHTML=file.o05[2];
            }else if(filename=="breytown"){
                //District
                title.innerHTML=file.D53[1];
head.innerHTML=file.D53[1];
dist_lore.getElementsByTagName("h2")[0].innerHTML=file.D53[1];
dist_lore.getElementsByTagName("p")[0].innerHTML=file.D53[2];
                //Building Headings
                lore01.getElementsByTagName("h2")[0].innerHTML=file.o06[0]+file.o06[1];
                //Navigation
                lore02.getElementsByTagName("h2")[0].innerHTML=file.to+file.D05[1];
lore03.getElementsByTagName("h2")[0].innerHTML=file.to+file.D55[1];
lore04.getElementsByTagName("h2")[0].innerHTML=file.to+file.D52[1];
lore05.getElementsByTagName("h2")[0].innerHTML=file.to+file.D56[1];
                //Building Paragraphs
                lore01.getElementsByTagName("p")[0].innerHTML=file.o06[2];
            }else if(filename=="breywood_forest"){
                //District
                title.innerHTML=file.D54[1];
head.innerHTML=file.D54[1];
dist_lore.getElementsByTagName("h2")[0].innerHTML=file.D54[1];
dist_lore.getElementsByTagName("p")[0].innerHTML=file.D54[2];
                //Building Headings
                lore01.getElementsByTagName("h2")[0].innerHTML=file.o07[0]+file.o07[1];
                //Navigation
                lore02.getElementsByTagName("h2")[0].innerHTML=file.to+file.D57[1];
lore03.getElementsByTagName("h2")[0].innerHTML=file.to+file.D55[1];
lore04.getElementsByTagName("h2")[0].innerHTML=file.to+file.D52[1];
                //Building Paragraphs
                lore01.getElementsByTagName("p")[0].innerHTML=file.o07[2];
            }else if(filename=="suttwine_fields"){
                //District
                title.innerHTML=file.D55[1];
head.innerHTML=file.D55[1];
dist_lore.getElementsByTagName("h2")[0].innerHTML=file.D55[1];
dist_lore.getElementsByTagName("p")[0].innerHTML=file.D55[2];
                //Building Headings
                
                //Navigation
                lore01.getElementsByTagName("h2")[0].innerHTML=file.to+file.D54[1];
lore02.getElementsByTagName("h2")[0].innerHTML=file.to+file.D53[1];
lore03.getElementsByTagName("h2")[0].innerHTML=file.to+file.D56[1];
                //Building Paragraphs
                
            }else if(filename=="west_mudwreck"){
                //District
                title.innerHTML=file.D56[1];
head.innerHTML=file.D56[1];
dist_lore.getElementsByTagName("h2")[0].innerHTML=file.D56[1];
dist_lore.getElementsByTagName("p")[0].innerHTML=file.D56[2];
                //Building Headings
                
                //Navigation
                lore01.getElementsByTagName("h2")[0].innerHTML=file.to+file.D57[1];
lore02.getElementsByTagName("h2")[0].innerHTML=file.to+file.D55[1];
lore03.getElementsByTagName("h2")[0].innerHTML=file.to+file.D53[1];
                //Building Paragraphs
                
            }else if(filename=="east_mudwreck"){
                //District
                title.innerHTML=file.D57[1];
head.innerHTML=file.D57[1];
dist_lore.getElementsByTagName("h2")[0].innerHTML=file.D57[1];
dist_lore.getElementsByTagName("p")[0].innerHTML=file.D57[2];
                //Building Headings
                
                //Navigation
                lore01.getElementsByTagName("h2")[0].innerHTML=file.to+file.D56[1];
lore02.getElementsByTagName("h2")[0].innerHTML=file.to+file.D58[1];
lore03.getElementsByTagName("h2")[0].innerHTML=file.to+file.D59[1];
                //Building Paragraphs
                
            }else if(filename=="applewine_hill"){
                //District
                title.innerHTML=file.D58[1];
head.innerHTML=file.D58[1];
dist_lore.getElementsByTagName("h2")[0].innerHTML=file.D58[1];
dist_lore.getElementsByTagName("p")[0].innerHTML=file.D58[2];
                //Building Headings
                lore01.getElementsByTagName("h2")[0].innerHTML=file.o08[0]+file.o08[1];
lore02.getElementsByTagName("h2")[0].innerHTML=file.o09[0]+file.o09[1];
                //Navigation
                lore03.getElementsByTagName("h2")[0].innerHTML=file.to+file.D57[1];
                //Building Paragraphs
                lore01.getElementsByTagName("p")[0].innerHTML=file.o08[2];
lore02.getElementsByTagName("p")[0].innerHTML=file.o09[2];
            }else if(filename=="kintown"){
                //District
                title.innerHTML=file.D59[1];
head.innerHTML=file.D59[1];
dist_lore.getElementsByTagName("h2")[0].innerHTML=file.D59[1];
dist_lore.getElementsByTagName("p")[0].innerHTML=file.D59[2];
                //Building Headings
                
                //Navigation
                lore01.getElementsByTagName("h2")[0].innerHTML=file.to+file.D10[1];
lore02.getElementsByTagName("h2")[0].innerHTML=file.to+file.D57[1];
lore03.getElementsByTagName("h2")[0].innerHTML=file.to+file.D60[1];
                //Building Paragraphs
                
            }else if(filename=="gledstone_fields"){
                //District
                title.innerHTML=file.D60[1];
head.innerHTML=file.D60[1];
dist_lore.getElementsByTagName("h2")[0].innerHTML=file.D60[1];
dist_lore.getElementsByTagName("p")[0].innerHTML=file.D60[2];
                //Building Headings
                
                //Navigation
                lore01.getElementsByTagName("h2")[0].innerHTML=file.to+file.D59[1];
                //Building Paragraphs
                
            }else if(filename=="morn_isle-deadmans_rock"){
                //District
                title.innerHTML=file.D61[1];
head.innerHTML=file.D61[1];
dist_lore.getElementsByTagName("h2")[0].innerHTML=file.D61[1];
dist_lore.getElementsByTagName("p")[0].innerHTML=file.D61[2];
                //Building Headings
                lore01.getElementsByTagName("h2")[0].innerHTML=file.o14[0]+file.o14[1];
                //Navigation
                lore02.getElementsByTagName("h2")[0].innerHTML=file.to+file.D20[1];
lore03.getElementsByTagName("h2")[0].innerHTML=file.to+file.D24[1];
                //Building Paragraphs
                lore01.getElementsByTagName("p")[0].innerHTML=file.o14[2];
            }else if(filename=="old_mans_rock"){
                //District
                title.innerHTML=file.D62[1];
head.innerHTML=file.D62[1];
dist_lore.getElementsByTagName("h2")[0].innerHTML=file.D62[1];
dist_lore.getElementsByTagName("p")[0].innerHTML=file.D62[2];
                //Building Headings
                lore01.getElementsByTagName("h2")[0].innerHTML=file.o10[0]+file.o10[1];
                //Navigation
                lore02.getElementsByTagName("h2")[0].innerHTML=file.to+file.D24[1];
                //Building Paragraphs
                lore01.getElementsByTagName("p")[0].innerHTML=file.o10[2];
            }else if(filename=="mew_isle"){
                //District
                title.innerHTML=file.D63[1];
head.innerHTML=file.D63[1];
dist_lore.getElementsByTagName("h2")[0].innerHTML=file.D63[1];
dist_lore.getElementsByTagName("p")[0].innerHTML=file.D63[2];
                //Building Headings
                
                //Navigation
                lore01.getElementsByTagName("h2")[0].innerHTML=file.to+file.D03[1];
lore02.getElementsByTagName("h2")[0].innerHTML=file.to+file.D30[1];
                //Building Paragraphs
                
            }
        };
        };
        lorexml.open("GET", loreURL, true);
        lorexml.send();
    }
},100);