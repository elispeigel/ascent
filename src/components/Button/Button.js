import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: #1F2041;
  color: white;
  width: 100%;
  height: auto;
  font-size: 1.2rem;

  :hover {
    background: #7fc9e2;
    color: black;
  }
`;

const Button = ({title}) => {
  return <StyledButton>{title}</StyledButton>;
}

export default Button;