import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  issuesStore: [],
};

export const issuesSlice = createSlice({
  name: 'issues',
  initialState,
  reducers: {
    getIssuesData: (state, action) => {
      state.issuesStore = action.payload;
    },
  },
});

export const { getIssuesData } = issuesSlice.actions;

export default issuesSlice.reducer;
