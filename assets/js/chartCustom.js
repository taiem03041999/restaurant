// Tạo biểu đồ

Chart.defaults.font.size = 14;
var chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        color: "rgba(78,101,121, 0.5)",
        offset: 30,
      },
    },
    y: {
      beginAtZero: true,
      min: 20,
      ticks: {
        color: "rgba(78,101,121, 0.5)",
        callback: function (value, index, values) {
          return value + "tr";
        },
      },
    },
  },
  plugins: {
    beforeDraw: function (chart) {
      var ctx = chart.canvas.getContext("2d");
      ctx.save();
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, chart.canvas.width, chart.canvas.height);
      ctx.restore();
    },
    legend: {
      display: false, // Ẩn chú thích
    },
  },
};

var chartCanvas = document.getElementById("chart").getContext("2d");
chartCanvas.height = 400;
var gradient = chartCanvas.createLinearGradient(
  0,
  chartCanvas.canvas.height,
  0,
  0
);
gradient.addColorStop(0, "rgba(39,183,55,0.08)");
gradient.addColorStop(0.6, "rgba(39,183,55,0.25)");
gradient.addColorStop(1, "rgba(39,183,55,0.25)");

var chartData = {
  labels: [
    "T1",
    "T2",
    "T3",
    "T4",
    "T5",
    "T6",
    "T7",
    "T8",
    "T9",
    "T10",
    "T11",
    "T12",
  ],
  datasets: [
    {
      label: "Data",
      data: [116, 130, 116, 65, 100, 75, 110, 150, 185, 165, 110, 130, 125],
      fill: true,
      backgroundColor: gradient,
      borderColor: "#27B737",
      borderWidth: 2,
      pointRadius: 0,
    },
  ],
};

new Chart(chartCanvas, {
  type: "line",
  data: chartData,
  options: chartOptions,
});
