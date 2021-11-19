import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import useLineBar from "../../common/hooks/useLineBar";

const selectAccumulatedCrimesYearByEachMonth = createSelector(
  (state) => state.dashboard,
  (dashboard) => dashboard.entities.accumulatedCrimesYearByEachMonth
);

const LineChart = () => {
  const accumulatedCrimesYearByEachMonth = useSelector(
    selectAccumulatedCrimesYearByEachMonth
  );
  const state = useLineBar(accumulatedCrimesYearByEachMonth);

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
