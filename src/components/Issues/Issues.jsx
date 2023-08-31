
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { callIssueReducer } from '../../slice/issuesSlice';
import Issue from '../Issue/Issue';

function Issues() {
  const dispatch = useDispatch();
  const selector = useSelector(state => state.issue);

  useEffect(() => {
    dispatch(
      callIssueReducer({
        lastIssueNumber: selector.lastIssueNumber,
        nextIssuePage: selector.nextIssuePage,
      }),
    );
  }, []);

  useEffect(() => {
    const onScroll = () => {
      let currentHeight = window.scrollY + document.documentElement.clientHeight;
      let restScrollHeigth = document.documentElement.scrollHeight - 600;

      if (
        currentHeight > restScrollHeigth &&
        !selector.isLoading &&
        selector.lastIssueNumber < 100
      ) {
        dispatch(
          callIssueReducer({
            lastIssueNumber: selector.lastIssueNumber,
            nextIssuePage: selector.nextIssuePage,
          }),
        );
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [dispatch, selector.isLoading]);
  return (
    <ul>
      {selector.error}
      {selector.issuesStore?.map((issues, idx) => {
        return <Issue key={issues.id} data={issues} issueCount={idx} />;
      })}
    </ul>
  );

}

export default Issues;
