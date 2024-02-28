import { createSlice } from "@reduxjs/toolkit";
import { getBlogList, getSingleBlog } from "../../api/blog";

const initialState = {
  blogs: [],
  loading: false,
  singleBlog: {},
  blogLoading: false,
}

const blogSlice = createSlice({
  name: "blog",
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getBlogList.pending, (state) => {
        state.loading = true
      })
      .addCase(getBlogList.fulfilled, (state, action) => {
        state.blogs = action.payload
        state.loading = false
      })
      .addCase(getBlogList.rejected, (state) => {
        state.loading = false
      })
      .addCase(getSingleBlog.pending, (state) => {
        state.blogLoading = false
      })
      .addCase(getSingleBlog.fulfilled, (state, action) => {
        state.singleBlog = action.payload
        state.blogLoading = false
      })
      .addCase(getSingleBlog.rejected, (state) => {
        state.blogLoading = false
      })
  }
})
export default blogSlice.reducer

