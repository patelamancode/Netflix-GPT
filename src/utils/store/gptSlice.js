import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearchView: false,
  },
  reducers: {
    toggleGptView: (state) => {
      state.showGptSearchView = !state.showGptSearchView;
    },
  },
});

export const { toggleGptView } = gptSlice.actions;
export default gptSlice.reducer;
