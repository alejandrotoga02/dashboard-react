import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
// import useLineBar from "../../common/hooks/useLineBar";

// const selectAccumulatedCrimesYearByEachMonth = createSelector(
//   (state) => state.dashboard,
//   (dashboard) => dashboard.entities.accumulatedCrimesYearByEachMonth
// );

const BarChart = () => {
  // const accumulatedCrimesYearByEachMonth = useSelector(
  //   selectAccumulatedCrimesYearByEachMonth
  // );
  const state = {
    series: [
      {
        name: "Accesos",
        data: [21, 22, 10, 28, 16, 21, 13, 30]
      }
    ],
    options: {
      chart: {
        height: 350,
        type: "bar"
      },
      plotOptions: {
        bar: {
          borderRadius: 0,
          columnWidth: "80%"
        }
      },
      dataLabels: {
        enabled: false
      },
      title: {
        text: "",
        align: "left"
      },
      stroke: {
        width: 2
      },
      grid: {
        row: {
          colors: ["#fff", "#f2f2f2"]
        }
      },
      xaxis: {
        labels: {
          rotate: -45
        },
        categories: [
          ['John', 'Doe'],
          ['Joe', 'Smith'],
          ['Jake', 'Williams'],
          'Amber',
          ['Peter', 'Brown'],
          ['Mary', 'Evans'],
          ['David', 'Wilson'],
          ['Lily', 'Roberts'], 
        ],
        tickPlacement: "on"
      },
      yaxis: {
        title: {
          text: ""
        }
      },
      fill: {
        type: "solid",
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 0.85,
          opacityTo: 0.85,
          stops: [50, 0, 100]
        }
      }
    }
  };

  return (
    <div id="chart2">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="bar"
        height={250}
      />
    </div>
  );
};

export default BarChart;
