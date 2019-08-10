$(function() {
  //Adjust the slider Height//
  var windowHeight = $(window).height();
  var navbarHeight = $(".navbar").innerHeight();
  var upperBarHeight = $(".upper-bar").innerHeight();
  $(".slider,.carousel-inner,.carousel-item").height(
    windowHeight - (navbarHeight + upperBarHeight)
  );
  //Work section add active class//
  $(".work ul li").on("click", function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
    if ($(this).data("class") === "all") {
      $(".shuffle-images .col-md").css("opacity", " 1");
    } else {
      $(".shuffle-images .col-md").css("opacity", "0.09");
      $($(this).data("class")).css("opacity", "1");
      $($(this).data("class")).css("box-shadow", "0 0 5px #2a2c34");
    }
  });
});
