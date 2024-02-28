import { createSlice } from "@reduxjs/toolkit";
import { recentPosts } from "../../api/recentPost";

const initialState = {
  posts: [],
  loading: true
}

const recentPostsSlice = createSlice({
  name: "recentPosts",
  initialState,
  extraReducers: builder => {
    builder
      .addCase(recentPosts.pending, (state) => {
        state.loading = true
      })
      .addCase(recentPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload
      })
      .addCase(recentPosts.rejected, (state) => {
        state.loading = false
      })
  }
})
export default recentPostsSlice.reducer