import { createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../hooks/useHttp";

export const recentPosts = createAsyncThunk("blog/getRecentPosts", async (page_size = 6) => {
  const { request } = useHttp()
  return await request({ url: `/content/contentlist/10/contents/?page_size=${page_size}` })
})