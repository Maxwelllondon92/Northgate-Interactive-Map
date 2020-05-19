var square = document.getElementById('csquare');
var i = 0;
square.addEventListener('wheel', function(event)
{
 if (event.deltaY < 0)
 {
  cycleup();
 }
 else if (event.deltaY > 0)
 {
  cycledown();
 }
});
square.addEventListener('click',reset);
window.onload = getcol()

function getcol(){
	var filename = document.getElementById("filename").innerHTML;
	square.style.backgroundColor = localStorage.getItem(filename+'_color');
	if(localStorage.getItem(filename+'_color')==null){localStorage.setItem(filename+'_color', 0)};
};

function cycleup(){
	var filename = document.getElementById("filename").innerHTML;
	i++;
	if (i==0){
		localStorage.setItem(filename+'_color','white');
		}
	else{if(i==1){
		localStorage.setItem(filename+'_color','red');
		}
	else{if(i==2){
		localStorage.setItem(filename+'_color','orange');
		}
	else{if(i==3){
		localStorage.setItem(filename+'_color','yellow');
		}
	else{if(i==4){
		localStorage.setItem(filename+'_color','lime');
		}
	else{if(i==5){
		localStorage.setItem(filename+'_color','green');
		}
	else{if(i==6){
		localStorage.setItem(filename+'_color','darkcyan');
		}
	else{if(i==7){
		localStorage.setItem(filename+'_color','cyan');
		}
	else{if(i==8){
		localStorage.setItem(filename+'_color','blue');
		}
	else{if(i==9){
		localStorage.setItem(filename+'_color','purple');
		}
	else{if(i==10){
		localStorage.setItem(filename+'_color','magenta');
		}
	else{if(i==11){
		i=0;
		localStorage.setItem(filename+'_color','white');
		}
}}}}}}}}}}}
	getcol();
	};

function cycledown(){
	var filename = document.getElementById("filename").innerHTML;
	i--;
	if (i==0){
		localStorage.setItem(filename+'_color','white');
		}
	else{if(i==1){
		localStorage.setItem(filename+'_color','red');
		}
	else{if(i==2){
		localStorage.setItem(filename+'_color','orange');
		}
	else{if(i==3){
		localStorage.setItem(filename+'_color','yellow');
		}
	else{if(i==4){
		localStorage.setItem(filename+'_color','lime');
		}
	else{if(i==5){
		localStorage.setItem(filename+'_color','green');
		}
	else{if(i==6){
		localStorage.setItem(filename+'_color','darkcyan');
		}
	else{if(i==7){
		localStorage.setItem(filename+'_color','cyan');
		}
	else{if(i==8){
		localStorage.setItem(filename+'_color','blue');
		}
	else{if(i==9){
		localStorage.setItem(filename+'_color','purple');
		}
	else{if(i==10){
		localStorage.setItem(filename+'_color','magenta');
		}
	else{if(i==-1){
		i=11;
		localStorage.setItem(filename+'_color','white');
		}
}}}}}}}}}}}
	getcol();
	}

function reset(){
	var filename = document.getElementById("filename").innerHTML;
	localStorage.setItem(filename+'_color','white');
	getcol();
}