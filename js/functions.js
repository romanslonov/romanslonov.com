



function resizeDiv() {
    vpw = $(window).width();
    vph = $(window).height();
    $(".right").css({
        height: vph + "px"
    })
}
$(document).ready(function() {
    resizeDiv()
});
window.onresize = function(e) {
    resizeDiv()
};

