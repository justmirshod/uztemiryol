import { createSlice } from "@reduxjs/toolkit";
import { getCategoryById } from "../../api/category";

const initialState = {
  loading: false,
  data: [],
};

const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategoryById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCategoryById.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.loading = false;
      });
  },
});

export const {} = aboutSlice.actions;
export default aboutSlice.reducer;
