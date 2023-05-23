import { configureStore } from "@reduxjs/toolkit";
import userReducer from "features/userSlice";
import productReducer from "features/productSlice";
import listReducer from "features/shareSlice";

const store = configureStore({
  reducer: {
    users: userReducer,
    products: productReducer,
    list: listReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
