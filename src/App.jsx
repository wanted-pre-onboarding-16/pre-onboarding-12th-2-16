import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

import Issues from './components/Issues/Issues';
import Layout from './components/Layout/Layout';
import { callIssueReducer } from './slice/issuesSlice';

function App() {
  const dispatch = useDispatch();
  const selector = useSelector(state => state.issue);

  useEffect(() => {
    dispatch(
      callIssueReducer({
        lastIssueNumber: selector.lastIssueNumber,
        nextIssuePage: selector.nextIssuePage,
      }),
    );
  }, [dispatch]);

  useEffect(() => {
    const onScroll = () => {
      let currentHeight = window.scrollY + document.documentElement.clientHeight;
      let restScrollHeigth = document.documentElement.scrollHeight - 600;

      if (currentHeight > restScrollHeigth && !selector.isLoading) {
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
    <>
      <Layout />
      <Issues />
    </>
  );
}

export default App;
