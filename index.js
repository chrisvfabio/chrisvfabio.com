$(document).ready(function () {

  var selectedTile;
  var clickCount = false

  $(".contact").click(function() {
    $("html, body").animate({
      scrollTop: $("#contact-section").offset().top
    }, 1000);
  });

  $("body").click(function() {
    if (selectedTile.find(".popup").is(":visible")) {
      // alert("vis");
      if (clickCount == false ) {
        clickCount = true;
      } else {
        selectedTile.find(".popup").addClass("hide");
        clickCount = false;
      }
    }

    // var target = $(this);
    // alert("check" );
    // alert(target);
    // if (target.parents(selectedTile).length == 0) {
    //   alert("hide popup");
    //   selectedTile.find(".popup").addClass("hide");
    // }
  });

  $(".tile").click(function() {
    // alert("Hellow");
    selectedTile = $(this);
    $(".tile .popup").addClass("hide");
    $(this).find(".popup").removeClass("hide");

  });



});
