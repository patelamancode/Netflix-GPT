import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
  name: "lang",
  initialState: {
    Language: "en",
  },
  reducers: {
    selectedLanguage: (state, action) => {
      state.Language = action.payload;
    },
  },
});

export const { selectedLanguage } = langSlice.actions;
export default langSlice.reducer;
