import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const BarChart = () => {
  const [state] = useState({
    series: [
      {
        name: "Deitos",
        data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35]
      }
    ],
    options: {
      // annotations: {
      //   points: [
      //     {
      //       x: "Bananas",
      //       seriesIndex: 0,
      //       label: {
      //         borderColor: "#775DD0",
      //         offsetY: 0,
      //         style: {
      //           color: "#fff",
      //           background: "#775DD0"
      //         },
      //         text: "Bananas are good"
      //       }
      //     }
      //   ]
      // },
      chart: {
        height: 350,
        type: "bar"
      },
      plotOptions: {
        bar: {
          borderRadius: 0,
          columnWidth: "80%"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 2
      },

      grid: {
        row: {
          colors: ["#fff", "#f2f2f2"]
        }
      },
      xaxis: {
        labels: {
          rotate: -45
        },
        categories: [
          "Apples",
          "Oranges",
          "Strawberries",
          "Pineapples",
          "Mangoes",
          "Bananas",
          "Blackberries",
          "Pears",
          "Watermelons",
          "Cherries",
          "Pomegranates",
          "Tangerines",
          "Papayas"
        ],
        tickPlacement: "on"
      },
      yaxis: {
        title: {
          text: ""
        }
      },
      fill: {
        type: "solid",
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 0.85,
          opacityTo: 0.85,
          stops: [50, 0, 100]
        }
      }
    }
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="bar"
        height={250}
      />
    </div>
  );
};

export default BarChart;
