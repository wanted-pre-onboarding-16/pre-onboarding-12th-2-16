import { useEffect, useState } from 'react';
import './App.css';
import Issues from './components/Issues/Issues';
import Layout from './components/Layout/Layout';
import { customAxios } from './util/api';

function App() {
  const [isuessArr, setIsuessArr] = useState([]);
  useEffect(() => {
    const getIssues = async () => {
      try {
        const result = await customAxios.get();
        if (result.status === 200) {
          setIsuessArr(result.data);
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
      {isuessArr?.map(el => (
        <p key={el.id}>{el.title}</p>
      ))}
    </>
  );
}

export default App;
