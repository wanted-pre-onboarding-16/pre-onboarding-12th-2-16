import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { styled } from 'styled-components';
import { LOAD_UPDATE_ISSUES_REDUCER } from '../../slice/issuesSlice';
import Issue from '../Issue/Issue';
import Spinner from '../Loading/Loading';

function Issues() {
  const dispatch = useDispatch();
  const { isLoading, lastIssueNumber, nextIssuePage, isSuccess, error, issuesStore } = useSelector(
    state => state.issue,
  );

  useEffect(() => {
    const onScroll = () => {
      let currentHeight = window.scrollY + document.documentElement.clientHeight;
      let restScrollHeigth = document.documentElement.scrollHeight - 600;

      if (currentHeight > restScrollHeigth && !isLoading && lastIssueNumber < 100) {
        dispatch(
          LOAD_UPDATE_ISSUES_REDUCER({
            lastIssueNumber: lastIssueNumber,
            nextIssuePage: nextIssuePage,
          }),
        );
        isSuccess && sessionStorage.setItem('lastViewedCount', lastIssueNumber);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [isLoading]);
  return (
    <UlContainer>
      {error}
      {issuesStore?.map((issues, idx) => {
        return <Issue key={issues.id} data={issues} issueCount={idx} />;
      })}
      {isLoading && <Spinner />}
    </UlContainer>
  );
}

export default Issues;

const UlContainer = styled.ul`
  padding: 20px;
  border-radius: 8px;
  background-color: #f4f4f4;
  font-family: 'Arial', sans-serif;
  color: black;
`;
