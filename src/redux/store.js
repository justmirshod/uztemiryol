import { configureStore } from "@reduxjs/toolkit";

import category from "./slices/category.slice";
import managers from "./slices/managers.slice";
import blogs from "./slices/blog.slice";
import recentPosts from "./slices/recentPost.slice";
import apply from "./slices/contact.slice";

export const store = configureStore({
  reducer: { category, managers, blogs, recentPosts, apply },
  devTools: process.env.NODE_ENV !== "production",
});
