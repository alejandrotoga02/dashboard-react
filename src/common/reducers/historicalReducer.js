import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getHistorics } from "../../services/AcessService";

const initialState = {
  data: [],
  loading: false
};

// First, create the thunk
export const fetchHistorico = createAsyncThunk(
  "access/historics/fetch",
  async () => {
    const {
      data: { records }
    } = await getHistorics();

    return records;
  }
);

// Then, handle actions in your reducers:
const historicoSlice = createSlice({
  name: "historico",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchHistorico.fulfilled, (state, action) => {
        state.data = [...action.payload];
        state.loading = false;
      })
      .addCase(fetchHistorico.pending, (state, _action) => {
        state.loading = true;
      })
      .addCase(fetchHistorico.rejected, state => {
        state.loading = false;
      });
  }
});

export default historicoSlice.reducer;
