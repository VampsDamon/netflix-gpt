import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptToggle: false,
  },
  reducers: {
    showgptToggle: (state) => {
      state.gptToggle = !state.gptToggle;
    },
  },
});

export const  {showgptToggle}=gptSlice.actions;
export default gptSlice.reducer;

