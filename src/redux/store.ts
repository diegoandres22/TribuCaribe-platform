import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import ejemploSlice from "./slices/ejemploSlice";
import deviceReducer from "./slices/DeviceSlice";

export const store = configureStore({
  reducer: {
    ejemplo: ejemploSlice,
    device: deviceReducer,
  },
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
