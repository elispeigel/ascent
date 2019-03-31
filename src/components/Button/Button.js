import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: #1F2041;
  color: white;
  width: 100%;
  height: auto;
  font-size: 1.2rem;
`;

const Button = ({title}) => {
  return <StyledButton>{title}</StyledButton>;
}

export default Button;