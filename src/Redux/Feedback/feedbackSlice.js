import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  feedback: null,
  loading: false,
};

const feedbackSlice = createSlice({
  name: "Feedback",
  initialState,
  reducers: {
    catchAction: (state, action) => {
      state.loading = action.payload;
    },
    setfeedback: (state, action) => {
      state.feedback = action.payload;
    },
    storeFeedback: (state, action) => {
      state.feedback = [...state.feedback, action.payload];
    },
    resetData: () => {
      return initialState;
    }
  },
});

export default feedbackSlice;

export const feedbackAction = feedbackSlice.actions;