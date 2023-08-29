import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

import Layout from './components/Layout/Layout';
import { getIssuesData } from './slice/issuesSlice';
import { customAxios } from './util/api';

function App() {
  const issuessList = useSelector(state => state.issues.issuesStore);

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
  }, []);
  return (
    <>
      <Layout />
      {issuessList?.map(el => (
        <p key={el.id}>{el.title}</p>
      ))}
    </>
  );
}

export default App;
