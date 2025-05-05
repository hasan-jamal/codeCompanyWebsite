$(document).ready(function () {
  // Set the second faqBox as active on page load
  var defaultBox = $(".faqBox").eq(1); // Select the second faqBox (index starts from 0)
  defaultBox.addClass("active");
  defaultBox.find(".boxText").show().css("opacity", "1");
  defaultBox
    .find(".faq-icon")
    .attr("src", "./images/minus-circle.svg")
    .css("transform", "rotate(180deg)");

  $(".faqBox-head").click(function () {
    var parentBox = $(this).closest(".faqBox");
    var boxText = parentBox.find(".boxText");
    var icon = $(this).find(".faq-icon");

    // Close all other faqBoxes
    $(".faqBox")
      .not(parentBox)
      .removeClass("active")
      .find(".boxText")
      .slideUp(300)
      .css("opacity", "0");
    $(".faqBox")
      .not(parentBox)
      .find(".faq-icon")
      .attr("src", "./images/plus-circle.svg")
      .css("transform", "rotate(0deg)");

    // Toggle active state for the clicked faqBox
    parentBox.toggleClass("active");

    // Slide toggle with fade effect
    if (parentBox.hasClass("active")) {
      boxText.stop(true, true).slideDown(300).css("opacity", "1");
      icon
        .attr("src", "./images/minus-circle.svg")
        .css("transform", "rotate(180deg)");
    } else {
      boxText.stop(true, true).slideUp(300, function () {
        $(this).css("opacity", "0");
      });
      icon
        .attr("src", "./images/plus-circle.svg")
        .css("transform", "rotate(0deg)");
    }
  });
});
