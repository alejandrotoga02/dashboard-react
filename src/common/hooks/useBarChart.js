import { useState } from "react"

export const useBarChart = () => {
    const [struct, setStruct] = useState({
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
            type: "bar",
            events: {
                dataPointSelection: function(event, chartContext, config) {
                    console.log(chartContext, config)
                },
            }
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

    return struct;
}