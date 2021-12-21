import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import useBarChart from "../../common/hooks/useBarChart";

const selectBarChartByDay = createSelector(
  state => state.dashboard,
  dashboard => dashboard.entities.barChartByDay
);

const ByDayChart = () => {
  const barChartByDay = useSelector(selectBarChartByDay);
  const state = useBarChart(barChartByDay, "Accesos", {
    text: "Aut. de carga promedio por día",
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

export default ByDayChart;
