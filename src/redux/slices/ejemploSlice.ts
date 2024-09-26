import { createSlice } from "@reduxjs/toolkit";
import { getEjemplo } from "../services/ejemploActions";

interface ejemploState {
  arrayEjemplo: any[];
  loading: boolean;
  error: string | null | undefined;
}

const initialState: ejemploState = {
  arrayEjemplo: [],
  loading: false,
  error: null,
};

const ejemploSlice = createSlice({
  name: "ejemplo",
  initialState,
  reducers: {
    // Funciones que van a manipular el estado, no se utiliza para respuestas del back.
    // PayloadAction<el type de lo que viene en action>
    funcionEjemplo: () => {
      //    state, action
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getEjemplo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getEjemplo.fulfilled, (state) => {
        state.loading = false;
        // state.arrayEjemplo = action.payload;        //NOTA--lo deje comentado porque estaba dando un error con typescript
      })
      .addCase(getEjemplo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { funcionEjemplo } = ejemploSlice.actions;

export default ejemploSlice.reducer;
