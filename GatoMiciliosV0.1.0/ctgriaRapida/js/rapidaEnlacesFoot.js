let uno = document.getElementById('uno');
let icon1 = document.getElementById('icon1');

uno.addEventListener('mouseover',function(){
    uno.style.boxShadow = "-105px 0 rgba(0,0,0,.5) inset";
    uno.style.color = "white";
    uno.style.transform = "scale(1.1)";
    icon1.style.color = "white";

});
uno.addEventListener('mouseout',function(){
    uno.style.boxShadow = "";
    uno.style.color = "";
    uno.style.transform = "";
    icon1.style.color = "";

});



var imgPrincipal1 = document.getElementById('imgPrincipal1');
var enlaceFalso1 = document.getElementById('enlaceFalso1');

function desenfoque1(){
	imgPrincipal1.classList.add('imgPrincipal1-active');
	enlaceFalso1.style.background = "rgba(0,0,0,.5)";
	enlaceFalso1.style.color = "#fff";	
	enlaceFalso1.innerHTML = "Ir";
}
function enfoque1(){
	imgPrincipal1.classList.remove('imgPrincipal1-active');
	enlaceFalso1.style.background = "rgba(255, 255, 255, 0.384)";
	enlaceFalso1.style.color = "#000";	
	enlaceFalso1.innerHTML = "Visitar";
}
// cierre evento 1
var imgPrincipal2 = document.getElementById('imgPrincipal2');
var enlaceFalso2 = document.getElementById('enlaceFalso2');

function desenfoque2(){
	imgPrincipal2.classList.add('imgPrincipal2-active');
	enlaceFalso2.style.background = "rgba(0,0,0,.5)";
	enlaceFalso2.style.color = "#fff";	
	enlaceFalso2.innerHTML = "Ir";
}
function enfoque2(){
	imgPrincipal2.classList.remove('imgPrincipal2-active');
	enlaceFalso2.style.background = "rgba(255, 255, 255, 0.384)";
	enlaceFalso2.style.color = "#000";	
	enlaceFalso2.innerHTML = "Visitar";
}
// cierre evento 2
var imgPrincipal3 = document.getElementById('imgPrincipal3');
var enlaceFalso3 = document.getElementById('enlaceFalso3');

function desenfoque3(){
	imgPrincipal3.classList.add('imgPrincipal3-active');
	enlaceFalso3.style.background = "rgba(0,0,0,.5)";
	enlaceFalso3.style.color = "#fff";	
	enlaceFalso3.innerHTML = "Ir";
}
function enfoque3(){
	imgPrincipal3.classList.remove('imgPrincipal3-active');
	enlaceFalso3.style.background = "rgba(255, 255, 255, 0.384)";
	enlaceFalso3.style.color = "#000";	
	enlaceFalso3.innerHTML = "Visitar";
}
// cierre evento 3
var imgPrincipal4 = document.getElementById('imgPrincipal4');
var enlaceFalso4 = document.getElementById('enlaceFalso4');

function desenfoque4(){
	imgPrincipal4.classList.add('imgPrincipal4-active');
	enlaceFalso4.style.background = "rgba(0,0,0,.5)";
	enlaceFalso4.style.color = "#fff";	
	enlaceFalso4.innerHTML = "Ir";
}
function enfoque4(){
	imgPrincipal4.classList.remove('imgPrincipal4-active');
	enlaceFalso4.style.background = "rgba(255, 255, 255, 0.384)";
	enlaceFalso4.style.color = "#000";	
	enlaceFalso4.innerHTML = "Visitar";
}
// cierre evento 4
var imgPrincipal5 = document.getElementById('imgPrincipal5');
var enlaceFalso5 = document.getElementById('enlaceFalso5');

function desenfoque5(){
	imgPrincipal5.classList.add('imgPrincipal5-active');
	enlaceFalso5.style.background = "rgba(0,0,0,.5)";
	enlaceFalso5.style.color = "#fff";	
	enlaceFalso5.innerHTML = "Ir";
}
function enfoque5(){
	imgPrincipal5.classList.remove('imgPrincipal5-active');
	enlaceFalso5.style.background = "rgba(255, 255, 255, 0.584)";
	enlaceFalso5.style.color = "#000";	
	enlaceFalso5.innerHTML = "Visitar";
}
// cierre evento 5
var imgPrincipal6 = document.getElementById('imgPrincipal6');
var enlaceFalso6 = document.getElementById('enlaceFalso6');

function desenfoque6(){
	imgPrincipal6.classList.add('imgPrincipal6-active');
	enlaceFalso6.style.background = "rgba(0,0,0,.5)";
	enlaceFalso6.style.color = "#fff";	
	enlaceFalso6.innerHTML = "Ir";
}
function enfoque6(){
	imgPrincipal6.classList.remove('imgPrincipal6-active');
	enlaceFalso6.style.background = "rgba(255, 255, 255, 0.384)";
	enlaceFalso6.style.color = "#000";	
	enlaceFalso6.innerHTML = "Visitar";
}
// cierre evento 6
var tel = document.getElementById('tel');
var num = "300-765-8521";

tel.addEventListener('click',function(e){
		e.preventDefault();
		alert("Comuniquése al numero: "+num+" Bogotá");
	});
