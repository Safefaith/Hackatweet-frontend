import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const tweetSlice = createSlice({
  name: "tweet",
  initialState,
  reducers: {
    addTweetToStore: (state, action) => {
      const { username, message } = action.payload;
      state.value.push({ username, message, date: new Date().toISOString() });
    },
  },
});

export const { addTweetToStore } = tweetSlice.actions;
export default tweetSlice.reducer;
