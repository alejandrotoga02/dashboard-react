import dayjs from "dayjs";
import { isNil } from "ramda";
import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { fetchDashboard } from "../reducers/dashboardReducer";

const useFinanzas = () => {
  const [rangeValue, setRangeValue] = useState([null, null]);
  // const dispatch = useDispatch();

  const onDateRangeChange = newValue => {
    setRangeValue(newValue);
  };

  const onAcceptRange = values => {
    let [startOfTime, endOfTime] = values;
    // eslint-disable-next-line
    startOfTime = dayjs(startOfTime).format("YYYY-MM-DD");
    // eslint-disable-next-line
    endOfTime = dayjs(endOfTime).format("YYYY-MM-DD");
    // dispatch(
    //   fetchDashboard({
    //     zona,
    //     filterBy: "range",
    //     startOfTime,
    //     endOfTime
    //   })
    // );
  };

  const rangeIsnotSelected = () => {
    const [ini, fin] = rangeValue;

    return isNil(ini) && isNil(fin);
  };

  const resetRange = () => {
    setRangeValue([null, null]);
    // dispatch(fetchDashboard({
    //   zona
    // }));
  };

  return {
    rangeValue,
    resetRange,
    rangeIsnotSelected,
    onDateRangeChange,
    onAcceptRange
  };
};

export default useFinanzas;
