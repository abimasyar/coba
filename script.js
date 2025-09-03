$(window).scroll(function () {
  var wScroll = $(this).scrollTop();
  var windowHeight = $(this).height();


  $(".home h1").css({
    transform: "translate(0px, " + wScroll / 2 + "%)",
  });

  $(".timeline-item").each(function () {
    var itemTop = $(this).offset().top;

    if (wScroll + windowHeight - 100 > itemTop) {
      $(this).addClass("muncul");  // muncul kalau masuk viewport
    } else {
      $(this).removeClass("muncul"); // reset kalau keluar viewport
    }
  });
});

$(window).on('load', function() {
  $('.hAtas').addClass('hMuncul')
});

$(".zoomable").on("click", function () {
  $(this).toggleClass("active");
});
