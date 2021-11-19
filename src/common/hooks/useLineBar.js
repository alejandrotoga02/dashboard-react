import { useEffect, useState } from "react";
import { forEachObjIndexed } from "ramda";
const initialStruct = {
  series: [
    {
      name: "Delitos",
      data: [],
    },
  ],
  options: {
    chart: {
      type: "area",
      stacked: false,
      height: 350,
      zoom: {
        type: "x",
        enabled: true,
        autoScaleYaxis: true,
      },
      toolbar: {
        autoSelected: "zoom",
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    title: {
      text: "",
      align: "left",
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },
    yaxis: {
      labels: {
        formatter: function (val) {
          return (val).toFixed(0);
        },
      },
      title: {
        text: "",
      },
    },
    xaxis: {
      type: "datetime",
    },
    tooltip: {
      shared: false,
      y: {
        formatter: function (val) {
          return val;
        },
      },
    },
  },
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
  Diciembre: "12",
};

const parseToDatetimeSeries = (elements) => {
  const arrayElements = [];
  const printKeyConcatValue = (values, year) => {
    forEachObjIndexed((v, key) => {
      arrayElements.push({
        x: `${months[key]}/01/${year}`,
        y: v,
      });
    }, values);
  };
  forEachObjIndexed(printKeyConcatValue, elements);
  return arrayElements;
};

export const useLineBar = (accumulated) => {
  const [struct, setStruct] = useState(initialStruct);

  useEffect(() => {
    setStruct((state) => ({
      ...state,
      series: [
        {
          ...state.series[0],
          data: parseToDatetimeSeries(accumulated),
        },
      ],
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return struct;
};

export default useLineBar;
