let slider = document.querySelector(".contenedor_del_slider")
let sliderIndividual = document.querySelectorAll(".contenido_de_cada_slider")
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 7000;

window.addEventListener("resize", function(){
    width = sliderIndividual[0].clientWidth;
})

setInterval(function(){
    slides();
},intervalo);



function slides(){
    slider.style.transform = "translate("+(-width*contador)+"px)";
    slider.style.transition = "transform .8s";
    contador++;

    if(contador == sliderIndividual.length){
        setTimeout(function(){
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            contador=1;
        },1500)
    }
}

// var img1 = document.getElementById('img1');
// var cambiar = document.getElementById('cambiar');

// cambiar.onclick = function() {
//     img1.src = "blue.png";
// }
