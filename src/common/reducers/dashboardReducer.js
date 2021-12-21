import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getGraphs, getStatistics } from "../../services/DashboardService";

const initialState = {
  entities: {
    totalAccessNP: 0,
    totalAccessPC: 0,
    avgTotalAccessPC: 0,
    totalAccessPV: 0,
    totalAccessPersonal: 0,
    totalAccessPersonalB1: 0,
    totalAccessPersonalB2: 0,
    totalAccessPersonalB3: 0,
    totalAccessPersonalCEP: 0,
    totalAccessPersonalFL: 0,
    totalAccessPersonalGP: 0,
    totalAccessPersonalMO: 0,
    totalAccessPersonalNE: 0,
    totalAccessPersonalRO: 0,
    totalAccessPersonalSP: 0,
    totalAccessTR: 0,
    totalAccessVehicles: 0,
    avgTotalAccessVehicles: 0,
    totalAccessVehiclesNL: 0,
    totalAccessVehiclesRO: 0,
    totalAccessVehiclesSP: 0,
  },
  dashboardLoading: false
}

// First, create the thunk
export const fetchDashboard = createAsyncThunk(
  "dashboard/fetch",
  async (params = {}) => {
    const { data: dataOne} = await getStatistics(params);
    const { data: dataTwo } = await getGraphs(params);
    const response = {
      ...dataOne,
      ...dataTwo
    }
    return response;
  }
);

// Then, handle actions in your reducers:
const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchDashboard.fulfilled, (state, action) => {
        state.entities = { ...state.entities, ...action.payload };
        state.dashboardLoading = false;
      })
      .addCase(fetchDashboard.pending, (state, _action) => {
        state.dashboardLoading = true;
      })
      .addCase(fetchDashboard.rejected, (state) => {
        state.dashboardLoading = false;
      });
  }
});

export default dashboardSlice.reducer;
