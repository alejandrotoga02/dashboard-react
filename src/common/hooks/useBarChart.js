import { useEffect, useState } from "react";
import { keys, values } from "ramda";

const initialStruct = {
  series: [
    {
      name: "",
      data: []
    }
  ],
  options: {
    chart: {
      height: 350,
      type: "bar",
      zoom: {
        enabled: false,
      }
    },
    plotOptions: {
      bar: {
        borderRadius: 0,
        columnWidth: "80%",
        dataLabels: {
          position: "top"
        }
      }
    },
    dataLabels: {
      enabled: true,
      formatter: val => {
        return val;
      }
    },
    title: {
      text: "",
      align: "left"
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
      categories: [],
      tickPlacement: "on"
    },
    yaxis: {
      title: {
        text: ""
      }
    }
  }
};

const useBarChart = (
  accumulated,
  serieName = "",
  titleProps,
  customEvents = {}
) => {
  const [struct, setStruct] = useState(initialStruct);

  useEffect(() => {
    setStruct(state => ({
      ...state,
      series: [
        {
          ...state.series[0],
          name: serieName,
          data: values(accumulated)
        }
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
          categories: keys(accumulated)
        }
      }
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return struct;
};

export default useBarChart;
