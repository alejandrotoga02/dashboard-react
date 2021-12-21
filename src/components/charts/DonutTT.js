import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import useDonutChart from "../../common/hooks/useDonutChart";

const selectDonutTT = createSelector(
  state => state.dashboard,
  dashboard => dashboard.entities.donutTT
);

const DonutTTChart = () => {
  const donutTT = useSelector(selectDonutTT);
  const state = useDonutChart(donutTT,{
    text: "Accesos de Vehículos ligeras"
  });

  return (
    <div id="chart-TT">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="donut"
      />
    </div>
  );
};

export default DonutTTChart;
