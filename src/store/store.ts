import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import bookDetailsReducer from "./features/bookDetailsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    bookDetails: bookDetailsReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
