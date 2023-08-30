import React from 'react';
import { useSelector } from 'react-redux';
import Issue from '../Issue/Issue';

function Issues() {
  const selector = useSelector(state => state.issue);

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
