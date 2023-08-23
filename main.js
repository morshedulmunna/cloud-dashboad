import "./src/styles/style.scss";

document.addEventListener("DOMContentLoaded", function () {
  var scrollContainer = document.querySelector(".card_area_wrapper");
  scrollContainer.addEventListener("wheel", function (event) {
    event.preventDefault();
    var scrollLeft = scrollContainer.scrollLeft;
    scrollContainer.scrollLeft = scrollLeft + event.deltaY;
  });
});
