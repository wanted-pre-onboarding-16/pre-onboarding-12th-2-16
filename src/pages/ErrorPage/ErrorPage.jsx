import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function ErrorPage({ message = 'Oops! Something went wrong.' }) {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };
  return (
    <ErrorContainer>
      <ErrorBox>
        <ErrorTitle>
          <h1>Oops!</h1>
          <h2>404 - The Page can't be fouund</h2>
        </ErrorTitle>
        <ErrorMessage onclick={handleGoHome}>Go To Homepage</ErrorMessage>
      </ErrorBox>
    </ErrorContainer>
  );
}

export default ErrorPage;

const ErrorContainer = styled.div`
  position: relative;
  margin-top: 100px;
`;
const ErrorBox = styled.div`
  max-width: 520px;
  width: 100%;
  line-height: 1.4rem;
  text-align: center;
  h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 236px;
    font-weight: 200;
    margin: 0px;
    color: red;
    text-transform: uppercase;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  h2 {
    display: inline-block;
    font-family: 'Montserrat', sans-serif;
    font-size: 28px;
    font-weight: 400;
    text-transform: uppercase;
    color: #fff;
    background: #211b19;
    padding: 10px 10px;
    margin: auto;
    display: inline-block;
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
  }
`;

const ErrorTitle = styled.div`
  position: relative;
  height: 200px;
  margin: 0px auto 20px;
  z-index: -1;
`;

const ErrorMessage = styled.button`
  font-family: 'Montserrat', sans-serif;
  display: inline-block;
  font-weight: 700;
  text-decoration: none;
  color: #fff;
  text-transform: uppercase;
  padding: 13px 23px;
  background: #ff6300;
  font-size: 18px;
  -webkit-transition: 0.2s all;
  transition: 0.2s all;
  :hover {
    color: #ff6300;
    background: #211b19;
  }
`;
