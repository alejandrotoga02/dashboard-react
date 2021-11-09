import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDashboard } from "../../services/DashboardService";

// First, create the thunk
export const fetchDashboard = createAsyncThunk(
  "dashboard/fetch",
  async (params = {}) => {
    const response = await getDashboard(params);
    return response.data;
  }
);

// Then, handle actions in your reducers:
const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    entities: {},
    dashboardLoading: false
  },
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
