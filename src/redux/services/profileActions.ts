import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProfileProps } from "@/types";

const url = `url del back que debe estar en el archivo .env`;

export const getProfile = createAsyncThunk<
  ProfileProps,
  string,
  { rejectValue: string }
>("profile/getProfile", async (userId, { rejectWithValue }) => {
  try {
    const response = await axios.get<any>(`${url}/${userId}`);
    const data = response.data;
    return data;
  } catch (error: any) {
    console.error(error.response.data);
    return rejectWithValue("string mensaje de error");
  }
});
