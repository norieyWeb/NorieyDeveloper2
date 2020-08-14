window.onload = function(){
	
    goUp.style.color = "white";
	
	}

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

goUp.addEventListener("mouseover", function escala() {
    goUp.style.borderColor = "white";
    goUp.style.transform = "scale(2.2)";
});
goUp.addEventListener("mouseout", function escala() {
    goUp.style.borderColor = "";
    goUp.style.transform = "scale(1)";
});