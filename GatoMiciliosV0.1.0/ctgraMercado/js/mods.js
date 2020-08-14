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

let Dia = document.getElementById("Dia");
let Noche = document.getElementById('Noche');
let barraIzq = document.getElementById('barraIzq');
let barraDer = document.getElementById('barraDer');
let contMods = document.getElementById('contMods');
let Padre = document.getElementById('Padre');
let Body1 = document.getElementById('Body1');
let Body2 = document.getElementById('Body2');
let Body3 = document.getElementById('Body3');
let Body4 = document.getElementById('Body4');
let Body5 = document.getElementById('Body5');
let imagen0 = document.getElementById('imagen0');
let imagen1 = document.getElementById('imagen1');
let imagen2 = document.getElementById('imagen2');
let imagen3 = document.getElementById('imagen3');
let imagen4 = document.getElementById('imagen4');
let imagen5 = document.getElementById('imagen5');
let Foot = document.getElementById('Foot');
let colorLeft = document.getElementById('colorLeft');
let enlc1 = document.getElementById('enlc1');
let enlc2 = document.getElementById('enlc2');
let enlc3 = document.getElementById('enlc3');
let colorRight  = document.getElementById('colorRight ');

Dia.addEventListener('click',function(){
    barraIzq.style.background = "white";
    Dia.style.color = "white";
    barraDer.style.background = "rgba(199, 198, 211, 0.89)";
    Noche.style.color = "black";
    contMods.style.background = "";
    Padre.style.background = "";
    uno.style.color = "";
    icon1.style.color = "";
    Body1.style.background = "";
    Body2.style.background = "";
    Body3.style.background = "";
    Body4.style.background = "";
    Body5.style.background = "";
    Body6.style.background = "";

    goUp.addEventListener("mouseover", function escala() {
        goUp.style.borderColor = "black";
        goUp.style.transform = "scale(2.2)";
    });
    goUp.addEventListener("mouseout", function escala() {
        goUp.style.borderColor = "";
        goUp.style.transform = "scale(1)";
    });
    
    goUp.style.color = "black";
    Foot.style.background = "";
    colorLeft.style.color = "black";
    enlc1.style.color = "black";
    enlc2.style.color = "black";
    enlc3.style.color = "black";
    colorRight.style.color = "black";
});

Noche.addEventListener('click',function(){
    barraDer.style.background = "white";
    Noche.style.color = "white";
    barraIzq.style.background = "rgba(199, 198, 211, 0.89)";
    Dia.style.color = "black";
    contMods.style.background = "rgba(0, 0, 0, 0.267)";
    Padre.style.background = "rgba(0, 0, 0, .2)";
    uno.style.color = "white";
    icon1.style.color = "white";
    Body1.style.background = "rgba(0, 0, 0, .7)";
    Body2.style.background = "rgba(0, 0, 0, .7)";
    Body3.style.background = "rgba(0, 0, 0, .7)";
    Body4.style.background = "rgba(0, 0, 0, .7)";
    Body5.style.background = "rgba(0, 0, 0, .7)";
    Body6.style.background = "rgba(0, 0, 0, .7)";

    goUp.addEventListener("mouseover", function escala() {
        goUp.style.borderColor = "white";
        goUp.style.transform = "scale(2.2)";
    });
    goUp.addEventListener("mouseout", function escala() {
        goUp.style.borderColor = "";
        goUp.style.transform = "scale(1)";
    });
    
    goUp.style.color = "white";
    Foot.style.background = "#cccccc9f";
    colorLeft.style.color = "white";
    enlc1.style.color = "white";
    enlc2.style.color = "white";
    enlc3.style.color = "white";
    Foot.style.color = "white";
});

document.getElementById('goUp').addEventListener("click", scrollUp);
function scrollUp() {
    var currentScroll = document.documentElement.scrollTop;
    if (currentScroll > 0) {
        window.requestAnimationFrame(scrollUp);
        window.scrollTo (0, currentScroll - (currentScroll / 10));
    }
}

var goUp = document.getElementById('goUp');

window.onscroll = function () {
    var scroll = document.documentElement.scrollTop;
    if (scroll > 150) {
        goUp.style.transform = "scale(1)";
    }else if (scroll < 150) {
        goUp.style.transform = "scale(0)";
    }
}


