import { configureStore } from "@reduxjs/toolkit";

import category from "./slices/category.slice";
import managers from "./slices/managers.slice";
import blogs from "./slices/blog.slice"

export const store = configureStore({
  reducer: { category, managers, blogs },
  devTools: process.env.NODE_ENV !== "production",
});
