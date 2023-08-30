import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { closerGetIssue } from '../util/IssueUtil';

const initialState = {
  issuesStore: [],
  lastIssueNumber: 10,
  nextIssuePage: 1,
  error: '',
  isLoading: false,
  isSuccess: false,
  isError: false,
};

export const fetchByIssues = createAsyncThunk(
  'issue/fetchByIssues',
  async (pageInfo, { rejectWithValue }) => {
    const result = await closerGetIssue(pageInfo).promise();

    if (!result) {
      return rejectWithValue('이슈가 없습니다!');
    }
    return result;
  },
);

export const issuesSlice = createSlice({
  name: 'issue',
  initialState,
  reducers: {
    callIssueReducer: (state, action) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    },
  },

  extraReducers: builder => {
    builder.addCase(fetchByIssues.pending, (state, action) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    });
    builder.addCase(fetchByIssues.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.issuesStore = action.payload;
      if (state.lastIssueNumber <= 100) {
        state.lastIssueNumber += 10;
      }
    });
    builder.addCase(fetchByIssues.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const fetchIssues = issuesSlice.extraReducers;
export const { callIssueReducer, successIssueReducer } = issuesSlice.actions;
export default issuesSlice.reducer;
