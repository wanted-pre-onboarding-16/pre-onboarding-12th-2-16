import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotate360} 1.5s linear infinite;
  transform: translateZ(0);
  border-top: 2px solid #eee;
  border-right: 2px solid #eee;
  border-bottom: 2px solid #eee;
  border-left: 4px solid black;
  background: transparent;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin: 0 auto;
`;

export default Spinner;
