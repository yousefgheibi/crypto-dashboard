const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
    {
      label: "My Two dataset",
      backgroundColor: "rgb(0, 99, 132)",
      borderColor: "rgb(0, 99, 132)",
      data: [3, 8, 22, 12, 29, 14, 40],
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {
      responsive: true
  },
};

const myChart = new Chart(document.getElementById("chart"), config);



// show or hide sidebar
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("aside");

menuBtn.addEventListener('click',()=>{
  sidebar.style.display ="block";
})

closeBtn.addEventListener("click", () => {
  sidebar.style.display = "none";
});



// theme-toggle
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click",()=>{
  document.body.classList.toggle("dark-theme");


  themeBtn.querySelector("span:first-child").classList.toggle("active");
  themeBtn.querySelector("span:last-child").classList.toggle("active");

});