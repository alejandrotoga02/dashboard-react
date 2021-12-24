import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import useDonutChart from "../../../../common/hooks/useDonutChart";

const selectDonutV = createSelector(
  state => state.dashboard,
  dashboard => dashboard.entities.donutV
);

const DonutVChart = () => {
  const donutV = useSelector(selectDonutV);
  const state = useDonutChart(donutV,{
    text: "Accesos de Vehículos ligeros"
  });

  return (
    <div id="chart-V">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="donut"
      />
    </div>
  );
};

export default DonutVChart;
