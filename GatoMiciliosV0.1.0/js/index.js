window.onload = function(){
	barraIzq.style.background = "white";
    Dia.style.color = "white";
    barraDer.style.background = "rgba(199, 198, 211, 0.89)";
    Noche.style.color = "black";
    contMods.style.background = "";
	Body1.style.background = "";
	goUp.style.color = "black";
	goUp.addEventListener("mouseover", function escala() {
        goUp.style.borderColor = "black";
        goUp.style.transform = "scale(2.2)";
    });
    goUp.addEventListener("mouseout", function escala() {
        goUp.style.borderColor = "";
        goUp.style.transform = "scale(1)";
    });
	}

var menuActivo = document.getElementById('menuActivo');
var navegacion = document.getElementById('navegacion');

	// if(navegacion.classList.contains('mostrar')){
	// 	navegacion.classList.add('mostrar');
	// }
menuActivo.addEventListener('click',function(){
	if(navegacion.classList.contains('mostrar')){
		navegacion.classList.remove('mostrar');
		menuActivo.style.color = "#3E269B";		
	}else{
		navegacion.classList.add('mostrar');
		menuActivo.style.color = "white";
	}
});
navegacion.addEventListener('click',function(){
	
		navegacion.classList.remove('mostrar');
		menuActivo.style.color = "#3E269B";

});

(function(){
	var actualizarHora = function(){
		var fecha = new Date();
		var	horas = fecha.getHours();
		var	ampm;
		var	minutos = fecha.getMinutes();
		var	segundos = fecha.getSeconds();
		var	diaSemana = fecha.getDay();
		var	dia = fecha.getDate();
		var	mes = fecha.getMonth();
		var	year = fecha.getFullYear();
			
		var pHoras = document.getElementById('horas');
		var	pAMPM = document.getElementById('ampm');
		var	pMinutos = document.getElementById('minutos');
		var	pSegundos = document.getElementById('segundos');
		var	pDiaSemana = document.getElementById('diaSemana');
		var	pDia = document.getElementById('dia');
		var	pMes = document.getElementById('mes');
		var	pYear = document.getElementById('year');
			
		var semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
			pDiaSemana.textContent = semana[diaSemana];
			pDia.textContent = dia;
		var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];	
			pMes.textContent = meses[mes];
			
			pYear.textContent = year;
			
		if(horas >= 12){
			horas = horas - 12;
			ampm = 'PM';
			}else{
				ampm = 'AM';
				}
				
		if(horas == 0){
			horas = 12;
		}
		
		if(horas < 10){
			horas = "0"+horas;
			}			
		
		pHoras.textContent = horas;	
		pAMPM.textContent = ampm;
		
		if(minutos < 10){
			minutos = "0"+minutos;
		}
		
		if(segundos < 10){
			segundos = "0"+segundos;
		}
		
		pMinutos.textContent = minutos;
		pSegundos.textContent = segundos;	
	}; 
	actualizarHora();
	var intervalo = setInterval(actualizarHora, 1000);
}())

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
// cierre evento chino
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
// cierre evento rapida
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
// cierre evento corriente
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
// cierre evento tienda
// var posicion = document.getElementById("img1");

// function cambio(button) {
//     if (button.innerHTML === "1") {
//         posicion.src = "arena.png";
//     } 
//     else if(button.innerHTML === "2"){
//         posicion.src = "blue.png";
//     }
//     else if(button.innerHTML === "3")
//     {
//         posicion.src = "rojo.png";
//     }
// }

// function origen(button) {
//     if (button.innerHTML === "1") {
//         posicion.src = "rojo.png";
//     } 
//     else if(button.innerHTML === "2"){
//         posicion.src = "rojo.png";
//     }
//     else if(button.innerHTML === "3")
//     {
//         posicion.src = "rojo.png";
//     }
// }

var atencion1 = document.getElementById('atencion1');
var img1 = document.getElementById("img1");

atencion1.addEventListener('mouseover',function(){
	
	img1.style.border = "20px solid rgba(61, 38, 153,.8)";
	
});

atencion1.addEventListener('mouseout',function(){
	
	img1.style.border = "0px solid rgba(61, 38, 153,.8)";
});
// evento-slide1


var atencion2 = document.getElementById('atencion2');
var img2 = document.getElementById("img2");

atencion2.addEventListener('mouseover',function(){
	
	img2.style.border = "20px solid rgba(244, 86, 21,.8)";
	
});

atencion2.addEventListener('mouseout',function(){
	
	img2.style.border = "0px solid rgba(244, 86, 21,.8)";
});
// evento-slide2

var atencion3 = document.getElementById('atencion3');
var img3 = document.getElementById("img3");

atencion3.addEventListener('mouseover',function(){
	
	img3.style.border = "20px solid rgba(61, 38, 153,.8)";
});

atencion3.addEventListener('mouseout',function(){
	
	img3.style.border = "0px solid rgba(61, 38, 153,.8)";
});
// evento-slide3

var atencion4 = document.getElementById('atencion4');
var img4 = document.getElementById("img4");

atencion4.addEventListener('mouseover',function(){
	
	img4.style.border = "20px solid rgba(244, 86, 21,.8)";
});

atencion4.addEventListener('mouseout',function(){
	
	img4.style.border = "0px solid rgba(244, 86, 21,.8)";
});
// evento-slide4

var atencion5 = document.getElementById('atencion5');
var img5 = document.getElementById("img5");

atencion5.addEventListener('mouseover',function(){
	
	img5.style.border = "20px solid rgba(61, 38, 153,.8)";
});

atencion5.addEventListener('mouseout',function(){
	
	img5.style.border = "0px solid rgba(61, 38, 153,.8)";
});
// evento-slide5

var tel = document.getElementById('tel');
var num = "300-765-8521";

tel.addEventListener('click',function(e){
		e.preventDefault();
		alert("Comuniquése al numero: "+num+" Bogotá");
	});
