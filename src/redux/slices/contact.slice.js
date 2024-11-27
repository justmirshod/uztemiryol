import { createSlice } from "@reduxjs/toolkit";
import { postApplies } from "../../api/contact";
import { toast } from "react-toastify";

const initialState = {
  createdApply: {},
  createLoading: false,
};

const applySlice = createSlice({
  name: "apply",
  initialState,
  reducers: {
    clearCreatedApply: (state) => {
      state.createdApply = {};
      state.createLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postApplies.pending, (state) => {
        state.createLoading = true;
      })
      .addCase(postApplies.fulfilled, (state, { payload }) => {
        state.createLoading = false;
        state.createdApply = payload;
      })
      .addCase(postApplies.rejected, (state, { error }) => {
        state.createLoading = false;
      });
  },
});

export default applySlice.reducer;
export const { clearCreatedApply } = applySlice.actions;
