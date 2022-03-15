import { useEffect, useState } from "react";
import { keys, values } from "ramda";
import { numberWithCommas } from "../utils";

const initialStruct = {
  series: [],
  options: {
    chart: {
      type: "donut"
    },
    title: {
      text: ""
    },
    labels: [],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 350
          },
          legend: {
            position: "bottom"
          }
        }
      }
    ],
    tooltip: {
      y: {
        formatter: val => numberWithCommas(val)
      }
    }
  }
};

export const useDonutChart = (data, titleProps) => {
  const [struct, setStruct] = useState(initialStruct);

  useEffect(() => {
    setStruct(state => ({
      ...state,
      series: values(data),
      options: {
        ...state.options,
        title: { ...titleProps },
        labels: keys(data)
      }
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return struct;
};

export default useDonutChart;
