import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

import Issues from './components/Issues/Issues';
import Layout from './components/Layout/Layout';
import { fetchByIssues } from './slice/issuesSlice';

function App() {
  const dispatch = useDispatch();
  const selector = useSelector(state => state.issue);

  console.info(selector);
  useEffect(() => {
    dispatch(
      fetchByIssues({
        lastIssueNumber: selector.lastIssueNumber,
        nextIssuePage: selector.nextIssuePage,
      }),
    );
  }, [dispatch]);

  return (
    <>
      <Layout />
      <Issues />
    </>
  );
}

export default App;
