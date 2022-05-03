import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getStatistics } from "../../services/HechosService";

const initialState = {
  data: {
    numeralia: {},
    avgTimes: {},
    cargo: {}
  },
  summaryLoading: false
};

// First, create the thunk
export const fetchDashboard = createAsyncThunk(
  "hechos/summary/fetch",
  async (params = {}) => {
    const { data } = await getStatistics(params);
    return data;
  }
);

// Then, handle actions in your reducers:
const heechosSlice = createSlice({
  name: "hechos",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchDashboard.fulfilled, (state, action) => {
        state.data = { ...action.payload };
        state.loading = false;
      })
      .addCase(fetchDashboard.pending, (state, _action) => {
        state.loading = true;
      })
      .addCase(fetchDashboard.rejected, state => {
        state.loading = false;
      });
  }
});

export const hechosSelector = state => state.hechos;

export default heechosSlice.reducer;
