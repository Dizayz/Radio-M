
window.onload = function () { fix(); }
$(window).resize(function () {
    fix();
});
function fix() {
    if ($(window).width() > 990) {

        height2 = $(".contenue-page").height();
        height = $(".sidebar-panel").height();
        // alert(height);
        // alert(height2);
        height = height - 15;
        $(".contenue-page").css("height", height);
        $(".contenue-page").css("overflow-x", "hidden");
        $(".contenue-page").css("overflow-y", "auto");
    }
    else {
        $(".contenue-page").css("height", "fit-content");
    }
}