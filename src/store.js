import { configureStore } from '@reduxjs/toolkit';
import issuesReducer from './slice/issuesSlice';
import { listenerMiddleware } from './slice/middleware';

export const store = configureStore({
  reducer: {
    issue: issuesReducer,
  },
  middleware: defaultMiddleware => defaultMiddleware().prepend(listenerMiddleware.middleware),
});
