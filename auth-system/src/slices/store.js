import { configureStore } from "@reduxjs/toolkit";
import moduleName from "module";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
