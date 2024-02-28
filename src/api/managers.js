import { createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../hooks/useHttp";

const getManagersList = createAsyncThunk("managers/getAll", async () => {
  const { request } = useHttp();
  return await request({ url: `/account/management` });
});

export { getManagersList };
