import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
// import useLineBar from "../../common/hooks/useLineBar";

// const selectAccumulatedCrimesYearByEachMonth = createSelector(
//   (state) => state.dashboard,
//   (dashboard) => dashboard.entities.accumulatedCrimesYearByEachMonth
// );

const DonutChart = () => {
  // const accumulatedCrimesYearByEachMonth = useSelector(
  //   selectAccumulatedCrimesYearByEachMonth
  // );
  const state = {
          
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        type: 'donut',
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 250
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },
  
  
  };

  return (
    <div id="chart2">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="donut"
      />
    </div>
  );
};

export default DonutChart;
