import { createListenerMiddleware } from '@reduxjs/toolkit';

import { closerGetIssue } from '../util/IssueUtil';
import {
  FAIL_ISSUES_REDUCER,
  FAIL_UPDATE_ISSUES_REDUCER,
  LOAD_ISSUES_REDUCER,
  LOAD_UPDATE_ISSUES_REDUCER,
  SUCCESS_ISSUES_REDUCER,
  SUCCESS_UPDATE_ISSUES_REDUCER,
} from './issuesSlice';
export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: LOAD_ISSUES_REDUCER,
  effect: async (action, listenerApi) => {
    listenerApi.cancelActiveListeners();
    await listenerApi.delay(500);
    const task = listenerApi.fork(async () => {
      const result = await closerGetIssue(action.payload).promise();
      return result;
    });
    const result = await task.result;
    if (result.status === 'ok') {
      listenerApi.dispatch(SUCCESS_ISSUES_REDUCER(result));
    } else {
      listenerApi.dispatch(FAIL_ISSUES_REDUCER(result));
    }
  },
});

listenerMiddleware.startListening({
  actionCreator: LOAD_UPDATE_ISSUES_REDUCER,
  effect: async (action, listenerApi) => {
    listenerApi.cancelActiveListeners();
    await listenerApi.delay(500);
    const task = listenerApi.fork(async () => {
      const result = await closerGetIssue(action.payload).promise();
      return result;
    });
    const result = await task.result;
    if (result.status === 'ok') {
      listenerApi.dispatch(SUCCESS_UPDATE_ISSUES_REDUCER(result));
    } else {
      listenerApi.dispatch(FAIL_UPDATE_ISSUES_REDUCER(result));
    }
  },
});
