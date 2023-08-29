import React from 'react';
import { useSelector } from 'react-redux';
import Issue from '../Issue/Issue';

function Issues() {
  const selector = useSelector(state => state.issues.issuesStore);

  return (
    <ul>
      {selector?.map((issues, idx) => {
        return <Issue key={issues.id} data={issues} issueCount={idx} />;
      })}
    </ul>
  );
}

export default Issues;
