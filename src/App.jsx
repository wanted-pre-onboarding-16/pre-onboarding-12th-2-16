import './App.css';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { LOAD_ISSUES_REDUCER } from './slice/issuesSlice';

function App() {
  const dispatch = useDispatch();
  const { nextIssuePage } = useSelector(state => state.issue);
  useEffect(() => {
    const lastViewedCount = sessionStorage.getItem('lastViewedCount') | 10;
    dispatch(
      LOAD_ISSUES_REDUCER({
        lastIssueNumber: lastViewedCount,
        nextIssuePage: nextIssuePage,
      }),
    );
  }, []);
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default App;
