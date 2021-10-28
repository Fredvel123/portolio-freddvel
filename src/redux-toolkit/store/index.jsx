import { configureStore } from "@reduxjs/toolkit";
import languajes from "../slices/languaje";

export const store = configureStore({
  reducer: {
    languajes
  }
})