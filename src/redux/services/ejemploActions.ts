import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface respuestaDelBack {
  name: string;
  id: string;
}

const url = `url del back que debe estar en el archivo .env`;

export const getEjemplo = createAsyncThunk<
  respuestaDelBack,
  string,
  { rejectValue: string }
>("nameDeSlice/getEjemplo", async (idEjemplo, { rejectWithValue }) => {
  try {
    const response = await axios.get<any>(`${url}/${idEjemplo}`);
    const data = response.data;
    return data;
  } catch (error: any) {
    console.error(error.response.data);
    return rejectWithValue("string mensaje de error");
  }
});
