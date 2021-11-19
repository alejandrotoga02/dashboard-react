import { useEffect, useState } from "react";
import { keys, values } from "ramda";

const initialStruct = {
  series: [
    {
      name: "Deitos",
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "bar",
      events: {
        dataPointSelection: function (event, chartContext, config) {
          console.log(chartContext, config);
        },
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 0,
        columnWidth: "80%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 2,
    },
    grid: {
      row: {
        colors: ["#fff", "#f2f2f2"],
      },
    },
    xaxis: {
      labels: {
        rotate: -45,
      },
      categories: [],
      tickPlacement: "on",
    },
    yaxis: {
      title: {
        text: "",
      },
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
        stops: [50, 0, 100],
      },
    },
  },
};

export const useBarChart = (accumulated) => {
  const [struct, setStruct] = useState(initialStruct);

  useEffect(() => {
    setStruct((state) => ({
      ...state,
      series: [
        {
          ...state.series[0],
          data: values(accumulated),
        },
      ],
      options: {
        ...state.options,
        xaxis: {
          ...state.options.xaxis,
          categories: keys(accumulated),
        },
      },
    }));
  }, [accumulated]);

  return struct;
};
