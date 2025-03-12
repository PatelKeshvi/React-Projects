import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./jobSlice";
import userReducer from "./userSlice"; // Added user reducer

export const store = configureStore({
  reducer: {
    jobs: jobReducer,
    users: userReducer, 
  },
});
