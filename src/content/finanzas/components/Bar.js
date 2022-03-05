import ReactApexChart from "react-apexcharts";
import useBarChart from "../../../common/hooks/useBarChart";

const LineBarChart = ({ data, serieName, text, height = 250 }) => {
  const state = useBarChart(data, serieName, {
    text
  });

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

export default LineBarChart;
