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
      state.value.push({ username, message, date: new Date() });
    },
    deleteTweetFromStore: (state, action) => {
      state.value = state.value.filter(tweet => tweet.date !== action.payload.date);
    }
  },
});

export const { addTweetToStore, deleteTweetFromStore } = tweetSlice.actions;
export default tweetSlice.reducer;