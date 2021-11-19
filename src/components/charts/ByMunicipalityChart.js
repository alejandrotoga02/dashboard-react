import ReactApexChart from "react-apexcharts";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import useBarChart from "../../common/hooks/useBarChart";
import { fetchDashboard } from "../../common/reducers/dashboardReducer";

const selectAccumulatedByMunicipality = createSelector(
  (state) => state.dashboard,
  (dashboard) => dashboard.entities.accumulatedByMunicipality
);

const ByMunicipalityChart = ({ month, year }) => {
  const dispatch = useDispatch();
  const accumulatedByMunicipality = useSelector(
    selectAccumulatedByMunicipality
  );
  const state = useBarChart(
    accumulatedByMunicipality,
    {
      text: "Distribución por municipio",
      align: "left",
    },
    {
      dataPointSelection: (_event, _chartContext, config) => {
        const { w, dataPointIndex } = config;
        const { categoryLabels } = w.globals;

        dispatch(
          fetchDashboard({
            month: month,
            year: year,
            filterByMunicipality: categoryLabels[dataPointIndex],
          })
        );
      },
    }
  );

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
