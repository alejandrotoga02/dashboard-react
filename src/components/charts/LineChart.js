import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import useLineBar from "../../common/hooks/useLineBar";

const selectLineChartByHour = createSelector(
  state => state.dashboard,
  dashboard => dashboard.entities.lineChartByHour
);

const LineChart = () => {
  const lineChartByHour = useSelector(selectLineChartByHour);
  const state = useLineBar(lineChartByHour);

  return (
    <div id="chart2">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="area"
        height={250}
      />
    </div>
  );
};

export default LineChart;
