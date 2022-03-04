import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { verifyPermissions } from "../../services/PisService";

const initialState = {
  data: {
    error:  true
  },
  loading: false
};

// First, create the thunk
export const fetchAuthentication = createAsyncThunk(
  "authentication/fetch",
  async () => {
    const { data } = await verifyPermissions();
    return data;
  }
);

// Then, handle actions in your reducers:
const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchAuthentication.fulfilled, (state, action) => {
        state.data = { ...action.payload };
        state.loading = false;
      })
      .addCase(fetchAuthentication.pending, (state, _action) => {
        state.loading = true;
      })
      .addCase(fetchAuthentication.rejected, state => {
        state.data = {
          error: true
        };
        state.loading = false;
      });
  }
});

export default authenticationSlice.reducer;
