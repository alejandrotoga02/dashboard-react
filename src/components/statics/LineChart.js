import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
// import useLineBar from "../../common/hooks/useLineBar";

// const selectAccumulatedCrimesYearByEachMonth = createSelector(
//   (state) => state.dashboard,
//   (dashboard) => dashboard.entities.accumulatedCrimesYearByEachMonth
// );

const LineChart = () => {
  // const accumulatedCrimesYearByEachMonth = useSelector(
  //   selectAccumulatedCrimesYearByEachMonth
  // );
  const state = {
    series: [
      {
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "Accesos promedios de autotransporte de carga por hora del dia",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8"
        ]
      }
    }
  };

  return (
    <div id="chart2">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="area"
        height={250}
      />
    </div>
  );
};

export default LineChart;
