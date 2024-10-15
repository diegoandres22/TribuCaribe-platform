import { createSlice } from "@reduxjs/toolkit";
import { getProfile } from "../services/profileActions";
import { ProfileProps } from "@/types";

interface ProfileState {
  profile: ProfileProps | null;
  loading: boolean;
  error: string | null | undefined;
}

const initialState: ProfileState = {
  profile: null,
  loading: false,
  error: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    funcionEjemplo: () => {
      //    state, action
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {funcionEjemplo} = profileSlice.actions;

export default profileSlice.reducer;
