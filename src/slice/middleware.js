import { createListenerMiddleware } from '@reduxjs/toolkit';

import { callIssueReducer, fetchByIssues } from './issuesSlice';
export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: callIssueReducer,
  effect: async (action, listenerApi) => {
    listenerApi.cancelActiveListeners();
    await listenerApi.delay(500);
    await listenerApi.dispatch(fetchByIssues(action.payload));
  },
});
