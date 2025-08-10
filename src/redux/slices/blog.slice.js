import { createSlice } from "@reduxjs/toolkit";
import { getBlogList, getGallery, getSingleBlog } from "../../api/blog";

const initialState = {
  blogs: [],
  loading: true,
  singleBlog: {},
  blogLoading: true,
  gallery: [],
  galleryLoading: true,
  search: "",
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBlogList.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBlogList.fulfilled, (state, action) => {
        state.blogs = action.payload;
        state.loading = false;
      })
      .addCase(getBlogList.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getSingleBlog.pending, (state) => {
        state.blogLoading = true;
      })
      .addCase(getSingleBlog.fulfilled, (state, action) => {
        state.singleBlog = action.payload;
        state.blogLoading = false;
      })
      .addCase(getSingleBlog.rejected, (state) => {
        state.blogLoading = false;
      })
      .addCase(getGallery.pending, (state) => {
        state.galleryLoading = true;
      })
      .addCase(getGallery.fulfilled, (state, action) => {
        state.galleryLoading = false;
        // If it's the first page, replace data. Otherwise, accumulate data
        if (action.meta.arg.page === 1) {
          state.gallery = action.payload;
        } else {
          // Accumulate results while keeping other properties
          state.gallery = {
            ...action.payload,
            results: [
              ...(state.gallery?.results || []),
              ...(action.payload?.results || []),
            ],
          };
        }
      })
      .addCase(getGallery.rejected, (state) => {
        state.galleryLoading = false;
      });
  },
});
export default blogSlice.reducer;
export const { setSearch } = blogSlice.actions;
