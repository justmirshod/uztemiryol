import { createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../hooks/useHttp";

export const getBlogList = createAsyncThunk("blog/getBLogList", async ({ id, page = 1, page_size = 8 }) => {
  const { request } = useHttp()
  return await request({ url: `/content/contentlist/${id}/contents/?page=${page}&page_size=${page_size}` })
})

export const getSingleBlog = createAsyncThunk("blog/singleBlog", async (id) => {
  const { request } = useHttp()
  return await request({ url: `/content/contentlist/detail/${id}/` })
})

export const getGallery = createAsyncThunk("blog/gallery", async () => {
  const { request } = useHttp()
  return await request({ url: `/content/contentlist/20/contents/` })
})


