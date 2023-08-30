import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { closerGetIssue } from '../util/IssueUtil';

const initialState = {
  issuesStore: [],
  lastPageCount: 10,
  error: '',
};

export const fetchByIssues = createAsyncThunk(
  'issue/fetchByIssues',
  async (_, { rejectWithValue }) => {
    const result = await closerGetIssue(initialState.lastPageCount).promise();
    console.info(result, 'result');
    if (!result) {
      return rejectWithValue('이슈가 없습니다!');
    }
    return result;
  },
);

export const issuesSlice = createSlice({
  name: 'issue',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchByIssues.pending, (state, action) => {
      console.info(action.payload, 'pending');
    });
    builder.addCase(fetchByIssues.fulfilled, (state, action) => {
      state.issuesStore = state.issuesStore.concat(action.payload);
      state.lastPageCount += 10;
    });
    builder.addCase(fetchByIssues.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const { getIssuesData } = issuesSlice.actions;

export default issuesSlice.reducer;
