import { configureStore } from "@reduxjs/toolkit";

import category from "./slices/category.slice";
import managers from "./slices/managers.slice";

export const store = configureStore({
  reducer: { category, managers },
  devTools: process.env.NODE_ENV !== "production",
});
