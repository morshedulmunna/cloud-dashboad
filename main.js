import "./src/styles/style.scss";

document.addEventListener("DOMContentLoaded", function () {
  var scrollContainer = document.querySelector(".card_area_wrapper");
  scrollContainer.addEventListener("wheel", function (event) {
    event.preventDefault();
    var scrollLeft = scrollContainer.scrollLeft;
    scrollContainer.scrollLeft = scrollLeft + event.deltaY;
  });
});

// chart
const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JULY",
      "AUG",
      "SEP",
      "NOV",
      "DEC",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 5, 2, 4, 2, 9, 3, 5, 2, 3, 4, 4, 3, 2, 5],
        drawTicks: false,
        backgroundColor: "#25396f",
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// Mobile toggle
const toggleButton = document.getElementById("togglebtn");
const sidebar = document.querySelector(".mobile_sidebar");

toggleButton.addEventListener("click", () => {
  sidebar.classList.toggle("active_sidebar");
});
// Click outside sidebar to remove active_sidebar class
document.addEventListener("click", (event) => {
  const target = event.target;
  if (!sidebar.contains(target) && target !== toggleButton) {
    sidebar.classList.remove("active_sidebar");
  }
});
