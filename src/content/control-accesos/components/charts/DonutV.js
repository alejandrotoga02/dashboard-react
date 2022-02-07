import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import useDonutChart from "../../../../common/hooks/useDonutChart";

const selectGaritas = createSelector(
  state => state.dashboard,
  dashboard => dashboard.entities.PV.garitas
);

const DonutVChart = () => {
  const data = useSelector(selectGaritas);
  const { options, series } = useDonutChart(data, {
    text: "Accesos de Vehículos ligeros"
  });

  return (
    <div id="chart-V">
      <ReactApexChart
        options={options}
        series={series}
        type="donut"
        width={350}
      />
    </div>
  );
};

export default DonutVChart;
