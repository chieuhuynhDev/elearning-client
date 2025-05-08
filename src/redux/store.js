import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import courseSlice from "./courseSlice";
import spinnerSlice from "./spinnerSlice";
import userAdminSlice from "./userAdminSlice";
import courseAdminSlice from "./courseAdminSlice";

const store = configureStore({
  reducer: {
    userSlice,
    courseSlice,
    spinnerSlice,
    userAdminSlice,
    courseAdminSlice,
  },
});

export default store;
