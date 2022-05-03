import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "../common/reducers/dashboardReducer";
import numeraliaReducer from "../common/reducers/numeraliaReducer";
import historicoReducer from "../common/reducers/historicalReducer";
import authenticationReducer from "../common/reducers/authenticationReducer";
import hechosReducers from "../common/reducers/hechosReducer";

export default configureStore({
  reducer: {
    dashboard: dashboardReducer,
    numeralia: numeraliaReducer,
    historico: historicoReducer,
    authentication: authenticationReducer,
    hechos: hechosReducers
  }
});
