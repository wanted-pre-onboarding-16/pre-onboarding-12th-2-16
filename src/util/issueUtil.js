import { customAxios } from './api';

export function closerGetIssue(per_page) {
  return {
    async promise() {
      const result = await customAxios({
        method: 'get',
        params: { per_page },
      });

      return result.data;
    },
  };
}
