import React from 'react';
import { styled } from 'styled-components';
import { GlobalStyles } from '../../styles/GlobalStyles';

function Layout({ children }) {
  return (
    <Container>
      <GlobalStyles />
      <Header>Facebook / React</Header>
      {children}
    </Container>
  );
}

export default Layout;

const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;
const Header = styled.h1`
  margin-bottom: 40px;
`;
