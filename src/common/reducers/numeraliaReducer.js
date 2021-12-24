import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getNumeralics } from "../../services/AcessService";

const initialState = {
  data: [],
  loading: false
};

// First, create the thunk
export const fetchNumeralia = createAsyncThunk(
  "access/numeralia/fetch",
  async (params = {}) => {
    const {
      data: { agrouped }
    } = await getNumeralics(params);
    return agrouped;
  }
);

// Then, handle actions in your reducers:
const numeraliaSlice = createSlice({
  name: "numeralia",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchNumeralia.fulfilled, (state, action) => {
        state.data = [ ...state.data, ...action.payload ];
        state.loading = false;
      })
      .addCase(fetchNumeralia.pending, (state, _action) => {
        state.loading = true;
      })
      .addCase(fetchNumeralia.rejected, state => {
        state.loading = false;
      });
  }
});

export default numeraliaSlice.reducer;
