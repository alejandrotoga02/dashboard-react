import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "../common/reducers/dashboardReducer";
import numeraliaReducer from "../common/reducers/numeraliaReducer";
import historicoReducer from "../common/reducers/historicalReducer";

export default configureStore({
  reducer: {
    dashboard: dashboardReducer,
    numeralia: numeraliaReducer,
    historico: historicoReducer
  }
});
