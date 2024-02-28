import { configureStore } from "@reduxjs/toolkit";

import category from "./slices/category.slice";
import managers from "./slices/managers.slice";
import blogs from "./slices/blog.slice"
import recentPosts from "./slices/recentPost.slice"

export const store = configureStore({
  reducer: { category, managers, blogs, recentPosts },
  devTools: process.env.NODE_ENV !== "production",
});
