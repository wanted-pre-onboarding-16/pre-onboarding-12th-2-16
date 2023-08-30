import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';

import Issues from './components/Issues/Issues';
import Layout from './components/Layout/Layout';
import { fetchByIssues } from './slice/issuesSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getIssues = () => {
      dispatch(fetchByIssues());
    };
    getIssues();
  }, [dispatch]);

  return (
    <>
      <Layout />
      <Issues />
    </>
  );
}

export default App;
