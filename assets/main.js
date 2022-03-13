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