import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "../common/reducers/dashboardReducer";

export default configureStore({
  reducer: {
    dashboard: dashboardReducer
  }
});
