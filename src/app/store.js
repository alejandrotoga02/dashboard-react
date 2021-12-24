import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "../common/reducers/dashboardReducer";
import numeraliaReducer from "../common/reducers/numeraliaReducer";

export default configureStore({
  reducer: {
    dashboard: dashboardReducer,
    numeralia: numeraliaReducer
  }
});
