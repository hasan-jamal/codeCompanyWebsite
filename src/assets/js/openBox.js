$(document).ready(function () {
  $(".ourDatacenterPartnersS1 .box").on("click", function () {
    $(".ourDatacenterPartnersS1 .box").removeClass("active scale-animation");

    $(this).addClass("active scale-animation");

    setTimeout(() => {
      $(this).removeClass("scale-animation");
    }, 300);

    $(".ourDatacenterPartnersS1 .part2").hide();

    var part2 = $(this).find(".ourDatacenterPartnersS1 .part2");
    part2.show().addClass("animate-part2");

    setTimeout(() => {
      part2.removeClass("animate-part2");
    }, 600);
  });
});
