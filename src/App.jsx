import './App.css';

import { Outlet } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  return (
    <Layout>
      <GlobalStyles />
      <Outlet />
    </Layout>
  );
}

export default App;
