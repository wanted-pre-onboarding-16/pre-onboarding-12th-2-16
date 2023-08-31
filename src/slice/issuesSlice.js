import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  issuesStore: [],
  lastIssueNumber: 10,
  nextIssuePage: 1,
  error: '',
  isLoading: false,
  isSuccess: false,
  isError: false,
};

export const issuesSlice = createSlice({
  name: 'issue',
  initialState,
  reducers: {
    LOAD_ISSUES_REDUCER: state => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    },
    SUCCESS_ISSUES_REDUCER: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.issuesStore = action.payload.value;
    },
    FAIL_ISSUES_REDUCER: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    },
    LOAD_UPDATE_ISSUES_REDUCER: state => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    },
    SUCCESS_UPDATE_ISSUES_REDUCER: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.issuesStore = action.payload.value;
      if (state.lastIssueNumber <= 100) {
        state.lastIssueNumber += 10;
      }
    },
    FAIL_UPDATE_ISSUES_REDUCER: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    },
  },
});

export const fetchIssues = issuesSlice.extraReducers;
export const {
  LOAD_ISSUES_REDUCER,
  SUCCESS_ISSUES_REDUCER,
  FAIL_ISSUES_REDUCER,
  LOAD_UPDATE_ISSUES_REDUCER,
  SUCCESS_UPDATE_ISSUES_REDUCER,
  FAIL_UPDATE_ISSUES_REDUCER,
} = issuesSlice.actions;
export default issuesSlice.reducer;
