import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import ejemploSlice from "./slices/ejemploSlice";
import deviceReducer from "./slices/DeviceSlice";
import profileSlice from "./slices/profileSlice";

export const store = configureStore({
  reducer: {
    ejemplo: ejemploSlice,
    device: deviceReducer,
    profile: profileSlice,
  },
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
