import { useEffect, useState } from "react";
import { keys, values } from "ramda";

const initialStruct = {
  series: [
    {
      name: "Delitos",
      data: [],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "bar",
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
    title: {
      text: "",
      align: "left",
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

const useBarChart = (accumulated, titleProps, customEvents = {}) => {
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
        chart: {
          ...state.options.chart,
          events: customEvents
        },
        title: titleProps,
        xaxis: {
          ...state.options.xaxis,
          categories: keys(accumulated),
        },
      },
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return struct;
};

export default useBarChart;
