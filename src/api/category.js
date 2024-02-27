import { createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../hooks/useHttp";

const getCategoryById = createAsyncThunk("category/getById", async (id) => {
  const { request } = useHttp();
  return await request({ url: `/content/contentlist/${id}/contents/` });
});

export { getCategoryById };
