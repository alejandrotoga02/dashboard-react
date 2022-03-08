import ReactApexChart from "react-apexcharts";
import useBarChart from "../../../common/hooks/useBarChart";

const IngressByMonth = ({ data, serieName, text, height = 250 }) => {
  const state = useBarChart(
    data,
    serieName,
    {
      text,
      align: "left",
      style: {
        fontSize: "12px"
      }
    },
    {
      enabled: true,
      textAnchor: "middle",
      style: {
        fontSize: "9px",
        colors: ["#333", "#999"]
      },
      formatter: (_val, opts) => {
        const {
          dataPointIndex,
          w: { config }
        } = opts;
        const { data } = config.series[0];
        return data[dataPointIndex];
      }
    }
  );

  return (
    <div id="chart2">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="bar"
        height={height}
      />
    </div>
  );
};

export default IngressByMonth;
