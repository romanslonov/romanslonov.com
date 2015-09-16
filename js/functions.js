function resizeDiv() {
    vpw = $(window).width();
    vph = $(window).height();
    $(".right").css({ height: vph + "px" })
}
$(document).ready(function() {
    resizeDiv()
});


$(document).ready(function() {
  resizeDiv()

  var el = $("#navigation");
  el.on("click", "button", function() {
    $.ajax('russian.html', {
      success: function(response) {
        $('.content').html(response).fadeIn();
      },
      error: function() {
        $('.content').html('<li>There was a problem fetching the latest photos. Please try again.</li>');
      }
    });
  });
});


window.onresize = function(e) {
    resizeDiv()
};

