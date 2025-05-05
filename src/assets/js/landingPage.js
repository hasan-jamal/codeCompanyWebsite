$(document).ready(function () {
  $(".sectionThree-box").on("click", function () {
    $(".sectionThree-box").removeClass("active scale-animation");

    $(this).addClass("active scale-animation");

    setTimeout(() => {
      $(this).removeClass("scale-animation");
    }, 300);

    $(".sectionThree-part2").hide();

    var part2 = $(this).find(".sectionThree-part2");
    part2.show().addClass("animate-part2");

    setTimeout(() => {
      part2.removeClass("animate-part2");
    }, 600);
  });
});
