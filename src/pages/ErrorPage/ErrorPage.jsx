import React from 'react';
import styled from 'styled-components';

function ErrorPage({ message = 'Oops! Something went wrong.' }) {
  return (
    <ErrorContainer>
      <ErrorTitle>Error</ErrorTitle>
      <ErrorMessage>{message}</ErrorMessage>
    </ErrorContainer>
  );
}

export default ErrorPage;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f9f9f9;
`;

const ErrorTitle = styled.h1`
  font-size: 3rem;
  color: #e74c3c;
  margin-bottom: 1rem;
`;

const ErrorMessage = styled.p`
  font-size: 1.5rem;
  color: #555;
  text-align: center;
`;
