import React from 'react';
import styled from 'styled-components';
import { Spring } from 'react-spring/renderprops';


const ToggleSwitch = styled.div`
  grid-column-start:${props => props.toggled ? '2' : '1'};
  grid-column-end:${props => props.toggled ? '3' : '2'};
  background: ${props => props.toggled ? '#7fc9e2' : 'white'} ;
  height: 90%;   
  width: 98%;
  z-index: 2;
  border-radius: 5px;
  align-self: center;
  justify-self: center;
`;

const Toggle = ({toggled, onToggle}) => {
  return (
    <ToggleSwitch onClick={onToggle} toggled={toggled}/>
    );
}

export default Toggle