import { configureStore } from "@reduxjs/toolkit";
import BookSlice from "./BookSlice";
import authSlice from "./authSlice";
import reportSlice from "./repoertSlice";
export default configureStore({
  reducer: {
    book: BookSlice,
    auth: authSlice,
    report: reportSlice,
  },
});
