import { useEffect, useState } from "react";
import { forEachObjIndexed, keys, values } from "ramda";
const initialStruct = {
  series: [
    {
      name: "Accesos",
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
        enabled: true,
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
      size: 2,
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

const months = {
  Enero: "01",
  Febrero: "02",
  Marzo: "03",
  Abril: "04",
  Mayo: "05",
  Junio: "06",
  Julio: "07",
  Agosto: "08",
  Septiembre: "09",
  Octubre: "10",
  Noviembre: "11",
  Diciembre: "12"
};

export const useLineBar = accumulated => {
  console.log("here", accumulated);
  const [struct, setStruct] = useState(initialStruct);

  useEffect(() => {
    setStruct(state => ({
      ...state,
      series: [
        {
          ...state.series[0],
          data: values(accumulated)
        }
      ],
      options: {
        ...state.options,
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

export default useLineBar;
