// When the user scrolls the page, execute myFunction

// Get the header
var header = document.getElementById("myNavbar");
var lang = document.getElementById("lang");
var lang0 = document.getElementById("selectlang");
var img2p = document.getElementById("img2p");


var sticky
//CALLS
resize();
$(window).resize(function () {
    resize();
});
window.addEventListener("load", () => {
    resize();
});
window.onscroll = function () {
    myFunction();
};

// FUNCTIONS
function resize() {
    sticky = $(".navbar-live").height();

}
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        lang.classList.remove("nonedisplay");
        lang0.classList.add("nonedisplay");
        img2p.classList.remove("nonedisplay");
        img2p.classList.add("displayinlineblock");
        document.getElementById("pic2").src = "./Img_ALaUne/en-direct.png";
    } else {
        header.classList.remove("sticky");
        lang.classList.add("nonedisplay");
        lang0.classList.remove("nonedisplay");
        img2p.classList.add("nonedisplay");
        document.getElementById("pic2").src = "./Img_ALaUne/320.png";
        img2p.classList.remove("displayinlineblock");
    }
}


//////////////////////////////////////////////////////////////////////////////////////





