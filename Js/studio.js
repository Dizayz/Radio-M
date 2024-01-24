window.onload = function () { stud(); }
$(window).resize(function () {
    stud();
});
function stud() {
    if ($(window).width() < 992) {
        $("#big-item-hidden").removeClass("nonedisplay");
        $("#big-item").addClass("nonedisplay");
    }
    else {
        if ($("#big-item").hasClass("nonedisplay") == true) {
            $("#big-item").removeClass("nonedisplay");
        }
        if ($("#big-item-hidden").hasClass("nonedisplay") == false) {
            $("#big-item-hidden").addClass("nonedisplay");
        }
    }
}