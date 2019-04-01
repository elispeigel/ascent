import React, {Component} from 'react';
import styled from 'styled-components';
import Toggle from './Toggle';

const ToggleHouse = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  background: #1F2041;
  width: 100%;
  height: 100px;
  border: white;
  border-radius: 5px;
  z-index: 1;
`;

class ToggleWrapper extends Component {
  state = {
    toggled: false
  }

  handleToggle = () => {
    this.setState(state => ({
      toggled: !state.toggled
    }));
  }

  render() {
    return (
    <ToggleHouse>
      <Toggle onToggle={this.handleToggle} toggled={this.state.toggled}/>
    </ToggleHouse>
    );
  }
}

export default ToggleWrapper;