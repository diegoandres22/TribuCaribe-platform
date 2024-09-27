import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DeviceState {
  isMobile: boolean;
}

const initialState: DeviceState = {
  isMobile: false, // Por defecto, asumimos que el usuario está en una PC.
};

export const deviceSlice = createSlice({
  name: "device",
  initialState,
  reducers: {
    setDevice: (state, action: PayloadAction<boolean>) => {
      state.isMobile = action.payload; // Actualiza el estado según el valor recibido.
    },
  },
});

// Exportamos la acción para cambiar el estado
export const { setDevice } = deviceSlice.actions;

// Exportamos el reducer para incluirlo en el store
export default deviceSlice.reducer;
