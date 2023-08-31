import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { LOAD_UPDATE_ISSUES_REDUCER } from '../../slice/issuesSlice';
import Issue from '../Issue/Issue';
import Spinner from '../Loading/Loading';

function Issues() {
  const dispatch = useDispatch();
  const selector = useSelector(state => state.issue);

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
          LOAD_UPDATE_ISSUES_REDUCER({
            lastIssueNumber: selector.lastIssueNumber,
            nextIssuePage: selector.nextIssuePage,
          }),
        );
        selector.isSuccess && sessionStorage.setItem('lastViewedCount', selector.lastIssueNumber);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [selector.isLoading]);
  return (
    <ul>
      {selector.error}
      {selector.issuesStore?.map((issues, idx) => {
        return <Issue key={issues.id} data={issues} issueCount={idx} />;
      })}
      {selector.isLoading && <Spinner />}
    </ul>
  );
}

export default Issues;
