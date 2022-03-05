import ReactApexChart from "react-apexcharts";
import useDonutChart from "../../../common/hooks/useDonutChart";

const DonutChart = ({ data, text, width = 300 }) => {
  const { options, series } = useDonutChart(data, {
    text
  });

  return (
    <div id={`chart-${text}`}>
      <ReactApexChart
        options={options}
        series={series}
        type="donut"
        width={width}
      />
    </div>
  );
};

export default DonutChart;
