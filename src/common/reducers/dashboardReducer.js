import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getGraphs, getStatistics } from "../../services/AcessService";

const initialState = {
  entities: {
    PC: {
      avg: 0,
      total: 0,
      garitas: {}
    },
    PV: {
      avg: 0,
      total: 0,
      garitas: {}
    },
    TT: {
      avg: 0,
      total: 0,
      garitas: {}
    },
    lastSyncAt: ""
  },
  dashboardLoading: false
};

// First, create the thunk
export const fetchDashboard = createAsyncThunk(
  "dashboard/fetch",
  async (params = {}) => {
    const { data: dataOne } = await getStatistics(params);
    const { data: dataTwo } = await getGraphs(params);
    const response = {
      ...dataOne,
      ...dataTwo
    };
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
        state.entities = { ...action.payload };
        state.dashboardLoading = false;
      })
      .addCase(fetchDashboard.pending, (state, _action) => {
        state.dashboardLoading = true;
      })
      .addCase(fetchDashboard.rejected, state => {
        state.dashboardLoading = false;
      });
  }
});

export default dashboardSlice.reducer;
