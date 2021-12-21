import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import useBarChart from "../../common/hooks/useBarChart";

const selectBarChartByMonth = createSelector(
  state => state.dashboard,
  dashboard => dashboard.entities.barChartByMonth
);

const ByMonthChart = () => {
  const barChartByMonth = useSelector(selectBarChartByMonth);
  const state = useBarChart(barChartByMonth, "Accesos", {
    text: "Accesos por mes",
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

export default ByMonthChart;
