function toggleSidenav() {
  document.body.classList.toggle("sidenav-active");
}
function closeSidenav() {
  document.body.classList.remove();
}
// const interval = setInterval(toggleSidenav, 1500);
document.addEventListener("mousemove", removeInterval);
document.addEventListener("click", removeInterval);

function removeInterval() {
  document.removeEventListener("mousemove", removeInterval);
  document.removeEventListener("click", removeInterval);
}
// //////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  const btnServicesHeader = document.querySelector(".btnServicesHeader");
  const listServicesHeader = document.querySelector(".listServicesHeader");

  btnServicesHeader.addEventListener("mouseenter", function () {
    listServicesHeader.classList.add("active");
  });

  btnServicesHeader.addEventListener("mouseleave", function () {
    listServicesHeader.classList.remove("active");
  });
});

///////////////////////////////////////
$(document).ready(function () {
  $(".btnServicesMb .link").click(function (e) {
    e.preventDefault();

    var targetId = $(this).data("target");
    var targetList = $("#" + targetId);

    targetList.slideToggle(300);

    $(this).toggleClass("active");
  });
});
