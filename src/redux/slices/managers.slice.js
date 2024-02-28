import { createSlice } from "@reduxjs/toolkit";
import { getManagersList } from "../../api/managers";

const initialState = {
  managers: [],
  loading: false,
};

const managersSlice = createSlice({
  name: "managers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getManagersList.pending, (state) => {
        state.loading = true;
      })
      .addCase(getManagersList.fulfilled, (state, { payload }) => {
        state.managers = payload;
        state.loading = false;
      });
  },
});

export default managersSlice.reducer;
export const {} = managersSlice.actions;
