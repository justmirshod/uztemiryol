import { configureStore } from "@reduxjs/toolkit";

import about from "./slices/about.slice";

export const store = configureStore({
  reducer: { about },
  devTools: process.env.NODE_ENV !== "production",
});
