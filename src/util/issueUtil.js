import { customAxios } from './api';

export function closerGetIssue({ lastIssueNumber, nextIssuePage }) {
  return {
    async promise() {
      const result = await customAxios({
        method: 'get',
        params: { per_page: lastIssueNumber, page: nextIssuePage },
      });

      return result.data;
    },
  };
}
