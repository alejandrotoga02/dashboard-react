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
      type: "line",
      stacked: false,
      height: 350,
      zoom: {
        type: "x",
        enabled: false,
        autoScaleYaxis: true
      },
      toolbar: {
        autoSelected: "zoom"
      }
    },
    dataLabels: {
      enabled: false
    },
    markers: {
      size: 2
    },
    title: {
      text: "Accesos promedio de Autotransporte de carga por hora del día",
      align: "left"
    },
    xaxis: {
      categories: []
    }
  }
};

export const useLineBar = (data, serieName, titleProps) => {
  const [struct, setStruct] = useState(initialStruct);

  useEffect(() => {
    setStruct(state => ({
      ...state,
      series: [
        {
          ...state.series[0],
          name: serieName,
          data: values(data)
        }
      ],
      options: {
        ...state.options,
        title: {...titleProps},
        xaxis: {
          ...state.options.xaxis,
          categories: keys(data)
        }
      }
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return struct;
};

export default useLineBar;
