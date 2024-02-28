import { createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../hooks/useHttp";

export const getBlogList = createAsyncThunk("blog/getBLogList", async (id) => {
  const { request } = useHttp()
  return await request({ url: `/content/contentlist/${id}/contents/` })
})

export const getSingleBlog = createAsyncThunk("blog/singleBlog", async (id) => {
  const { request } = useHttp()
  return await request({ url: `/content/contentlist/detail/${id}/` })
})