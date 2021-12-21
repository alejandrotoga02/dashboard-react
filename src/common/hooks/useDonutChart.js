import { useEffect, useState } from "react";
import { keys, map, values } from "ramda";
const initialStruct = {
  series: [44, 55, 41, 17, 15],
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
    ]
  }
};

export const useDonutChart = (data, titleProps) => {
  const [struct, setStruct] = useState(initialStruct);

  useEffect(() => {
    setStruct(state => ({
      ...state,
      series: map(item => item.value, values(data)),
      options: {
        ...state.options,
        title: {...titleProps},
        labels: keys(data)
      }
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return struct;
};

export default useDonutChart;
