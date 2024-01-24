window.onload = function () { setheight(); }
$(window).resize(function () {
    setheight();
});
function setheight() {
    if ($(window).width() > 990) {
        height5 = $(".blog-header").height();
        height3 = $(".blogrow").height();
        height4 = $(".alaunecontenue").height();
        height4 = height4 - height5 - 20
        $(".blogrow").css("height", height4);
        $(".blogrow").css("overflow-x", "hidden");
        $(".blogrow").css("overflow-y", "auto");
    }
    else {
        $(".blogrow").css("height", "650px");
        $(".blogrow").css("overflow-x", "hidden");
        $(".blogrow").css("overflow-y", "auto");
    }
}