import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDashboard } from "./common/reducers/dashboardReducer";
import Dashboard from "./components/Dashboard";

const App = () => {
  const { dashboardLoading } = useSelector(state => state.dashboard);

  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchDashboard({
    month: 3
  })), [dispatch]);

  return !dashboardLoading && <Dashboard />;
};

export default App;
