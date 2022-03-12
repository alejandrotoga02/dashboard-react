import ReactApexChart from "react-apexcharts";
import useBarChart from "../useBarChart";

const IngressByMonth = ({ data, text, height = 250 }) => {
  const state = useBarChart({
    data: data,
    title: {
      text,
      align: "left",
      style: {
        fontSize: "12px"
      }
    },
    dataLabels: {
      enabled: true,
      formatter: val => val + "M"
    }
  });

  return (
    <div id="chart2">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="bar"
        height={height}
      />
    </div>
  );
};

export default IngressByMonth;
