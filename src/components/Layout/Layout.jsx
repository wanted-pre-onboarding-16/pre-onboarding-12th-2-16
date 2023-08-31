import React from 'react';
import { GlobalStyles } from './Reset';

function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <h1>Facebook / React</h1>
      {children}
    </>
  );
}

export default Layout;
