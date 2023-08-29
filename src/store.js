import { configureStore } from '@reduxjs/toolkit';
import issuesReducer from './slice/issuesSlice';

export const store = configureStore({
  reducer: {
    issues: issuesReducer,
  },
});
