import ReactApexChart from "react-apexcharts";
import { useBarChart } from "../../common/hooks/useBarChart";

const BarChart = () => {
  const state = useBarChart()
  return (
    <div id="chart">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="bar"
        height={250}
      />
    </div>
  );
};

export default BarChart;
