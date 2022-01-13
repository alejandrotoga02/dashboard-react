import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import useDonutChart from "../../../../common/hooks/useDonutChart";

const selectDonutPC = createSelector(
  state => state.dashboard,
  dashboard => dashboard.entities.donutPC
);

const DonutPCChart = () => {
  const donutPC = useSelector(selectDonutPC);
  const state = useDonutChart(donutPC,{
    text: "Accesos de Autotransporte de carga"
  });

  return (
    <div id="chart-PC">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="donut"
        width={410}
      />
    </div>
  );
};

export default DonutPCChart;
