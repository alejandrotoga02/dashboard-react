import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import useBarChart from "../../common/hooks/useBarChart";

const selectAccumulatedCrimesByYear = createSelector(
  (state) => state.dashboard,
  (dashboard) => dashboard.entities.accumulatedCrimesByYear
);

const ByYearChart = () => {
  const accumulatedCrimesByYear = useSelector(
    selectAccumulatedCrimesByYear
  );
  const state = useBarChart(accumulatedCrimesByYear, {
    text: "Acumulado por año",
    align: "left"
  });

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

export default ByYearChart;
