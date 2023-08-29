import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';

import Issues from './components/Issues/Issues';
import Layout from './components/Layout/Layout';
import { getIssuesData } from './slice/issuesSlice';
import { customAxios } from './util/api';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getIssues = async () => {
      try {
        const result = await customAxios.get();
        if (result.status === 200) {
          dispatch(getIssuesData(result.data));
        }
      } catch (err) {
        console.error(err);
      }
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
