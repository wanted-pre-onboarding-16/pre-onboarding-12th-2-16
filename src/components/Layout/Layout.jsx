import React from 'react';

function Layout({ children }) {
  return (
    <div>
      <h1>Facebook / React</h1>
      {children};
    </div>
  );
}

export default Layout;
