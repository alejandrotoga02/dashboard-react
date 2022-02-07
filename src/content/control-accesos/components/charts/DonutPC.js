import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import useDonutChart from "../../../../common/hooks/useDonutChart";

const selectGaritas = createSelector(
  state => state.dashboard,
  dashboard => dashboard.entities.PC.garitas
);

const DonutPCChart = () => {
  const data = useSelector(selectGaritas);
  const { options, series } = useDonutChart(data, {
    text: "Accesos de Autotransporte de carga"
  });

  return (
    <div id="chart-PC">
      <ReactApexChart
        options={options}
        series={series}
        type="donut"
        width={350}
      />
    </div>
  );
};

export default DonutPCChart;
