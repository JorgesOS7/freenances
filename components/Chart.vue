<template>
  <apexchart type="bar" :options="chartOptions" :series="series"></apexchart>
</template>

<script>
export default {
  data() {
    return {
      chartOptions: {
        colors: ["#7e22ce", "#e11d48"],
        chart: {
          width: "100%",
          height: 350,
          zoom: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            distributed: true,
          },
        },
        tooltip: {
          enabled: false,
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },
        legend: {
          show: false,
        },
        grid: {
          show: true,
          xaxis: {
            lines: {
              show: false,
            },
          },
          yaxis: {
            lines: {
              show: false,
            },
          },
        },
        xaxis: {
          labels: {
            show: false,
          },
        },
        yaxis: {
          labels: {
            show: false,
          },
        },
      },
    };
  },
  computed: {
    series() {
      return [
        {
          data: [
            Math.floor(Math.random() * 10000),
            Math.floor(Math.random() * 10000),
          ],
        },
      ];
    },
  },
};
</script>