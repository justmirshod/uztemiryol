import { createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../hooks/useHttp";
import { toast } from "react-toastify";

const postApplies = createAsyncThunk("applies/post", async (data) => {
  const { request } = useHttp();
  const response = await request({
    method: "POST",
    url: "/category/virtual_reception/",
    data,
  }).then((res) => {
    if (res?.id) {
      toast.success("Xabaringiz muvaffaqiyatli jo'natildi", {
        theme: "colored",
      });
    }
  });
});

export { postApplies };
