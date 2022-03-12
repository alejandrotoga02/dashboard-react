import { useEffect, useState, useMemo } from "react";
import { forEachObjIndexed, keys, values } from "ramda";
import { find, findIndex, forEach, propEq } from "ramda";

const initialStruct = {
  series: [],
  options: {
    chart: {
      height: 350,
      type: "bar",
      zoom: {
        enabled: false
      }
    },
    plotOptions: {
      bar: {
        borderRadius: 0,
        columnWidth: "70%",
        dataLabels: {
          position: "top"
        }
      }
    },
    title: {},
    stroke: {
      width: 2
    },
    grid: {
      row: {
        colors: ["#fff", "#f2f2f2"]
      }
    },
    xaxis: {
      categories: []
    },
    yaxis: {
      title: {
        text: ""
      }
    },
    tooltip: {
      y: {
        formatter: function(val) {
          return `${val}M ingresos`;
        }
      }
    }
  }
};

const useBarChart = ({ data, title, dataLabels = {} }) => {
  const [struct, setStruct] = useState(initialStruct);

  const series = useMemo(() => {
    let elements = [];
    forEach(item => {
      forEachObjIndexed((_v, k) => {
        const exists = find(propEq("name", k))(elements);

        if (!exists) {
          elements = [
            ...elements,
            {
              name: k,
              data: [item[k]]
            }
          ];
        } else {
          const index = findIndex(propEq("name", k))(elements);
          elements[index] = {
            ...elements[index],
            data: [...elements[index]["data"], item[k]]
          };
        }
      }, item);
    }, values(data));

    return elements;
  }, [data]);

  useEffect(() => {
    if (data) {
      setStruct(state => ({
        ...state,
        series: series,
        options: {
          ...state.options,
          chart: {
            ...state.options.chart
          },
          title: title,
          dataLabels: dataLabels,
          xaxis: {
            ...state.options.xaxis,
            categories: keys(data)
          }
        }
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [series]);

  return struct;
};

export default useBarChart;
