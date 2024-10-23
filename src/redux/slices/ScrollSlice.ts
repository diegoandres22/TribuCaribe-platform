// src/store/slices/scrollSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ScrollState {
  isScrollingUpOrAtTop: boolean;
  atBottom: boolean;
}

const initialState: ScrollState = {
  isScrollingUpOrAtTop: true,
  atBottom: false,
};

const scrollSlice = createSlice({
  name: "scroll",
  initialState,
  reducers: {
    setScrollingUpOrAtTop: (state, action: PayloadAction<boolean>) => {
      state.isScrollingUpOrAtTop = action.payload;

    },
    setAtBottom: (state, action: PayloadAction<boolean>) => {
      state.atBottom = action.payload;
      
    },
  },
});

export const { setScrollingUpOrAtTop, setAtBottom } = scrollSlice.actions;
export default scrollSlice.reducer;
