import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { useBarChart } from "../../common/hooks/useBarChart";

const selectAccumulatedCrimesByCurrentMonthDifferentYear = createSelector(
  (state) => state.dashboard,
  (dashboard) => dashboard.entities.accumulatedCrimesByCurrentMonthDifferentYear
);

const ByMonthDifferentYear = () => {
  const accumulatedCrimesByCurrentMonthDifferentYear = useSelector(
    selectAccumulatedCrimesByCurrentMonthDifferentYear
  );
  const state = useBarChart(accumulatedCrimesByCurrentMonthDifferentYear);

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

export default ByMonthDifferentYear;
