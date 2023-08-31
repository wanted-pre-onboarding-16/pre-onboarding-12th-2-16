import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import Issues from './components/Issues/Issues.jsx';
import './index.css';
// import Description from './pages/Description/Description.jsx';
import { store } from './store.js';
import IssueDetail from './components/IssueDetail/IssueDetail.jsx';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Issues />,
      },
      {
        path: '/:id',
        element: <IssueDetail />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
