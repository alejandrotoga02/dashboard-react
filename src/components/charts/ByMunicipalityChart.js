import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { useBarChart } from "../../common/hooks/useBarChart";

const selectAccumulatedByMunicipality = createSelector(
  (state) => state.dashboard,
  (dashboard) => dashboard.entities.accumulatedByMunicipality
);

const ByMunicipalityChart = () => {
  const accumulatedByMunicipality = useSelector(
    selectAccumulatedByMunicipality
  );
  const state = useBarChart(accumulatedByMunicipality);

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

export default ByMunicipalityChart;
