import ReactApexChart from "react-apexcharts";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import useBarChart from "../../../../common/hooks/useBarChart";
/* eslint-disable-next-line */
import { fetchDashboard } from "../../../../common/reducers/dashboardReducer";

const selectBarChartByMonth = createSelector(
  state => state.dashboard,
  dashboard => dashboard.entities.barChartByMonth
);

const ByMonthChart = () => {
  /* eslint-disable-next-line */
  const dispatch = useDispatch();
  const barChartByMonth = useSelector(selectBarChartByMonth);
  const state = useBarChart(barChartByMonth, "Accesos", {
    text: "Accesos por mes",
    align: "left"
  },
  {
    // dataPointSelection: (_event, _chartContext, config) => {
    //   const { w, dataPointIndex } = config;
    //   const { categoryLabels } = w.globals;

    //   dispatch(
    //     fetchDashboard({
    //       month: month,
    //       year: year,
    //       filterByMunicipality: categoryLabels[dataPointIndex],
    //     })
    //   );
    // },
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

export default ByMonthChart;
