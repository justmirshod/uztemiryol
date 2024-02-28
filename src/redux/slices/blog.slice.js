import { createSlice } from "@reduxjs/toolkit";
import { getBlogList, getGallery, getSingleBlog } from "../../api/blog";

const initialState = {
  blogs: [],
  loading: true,
  singleBlog: {},
  blogLoading: true,
  gallery: [],
  galleryLoading: true,
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
        state.blogLoading = true
      })
      .addCase(getSingleBlog.fulfilled, (state, action) => {
        state.singleBlog = action.payload
        state.blogLoading = false
      })
      .addCase(getSingleBlog.rejected, (state) => {
        state.blogLoading = false
      })
      .addCase(getGallery.pending, (state) => {
        state.galleryLoading = true
      })
      .addCase(getGallery.fulfilled, (state, action) => {
        state.galleryLoading = false
        state.gallery = action.payload
      })
      .addCase(getGallery.rejected, (state) => {
        state.galleryLoading = false
      })
  }
})
export default blogSlice.reducer

