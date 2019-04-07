import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp,faAngleDown } from '@fortawesome/free-solid-svg-icons'

const TitleBar = styled.div`
  background: #1F2041;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1rem;
  border-radius: 10px;
`;

const ArrowContainer = styled.div`
  justify-self: right;
  align-self: center;
`;

const Title = styled.p`
  color: #bfe3ef;
  font-size: 1.4rem;
  justify-self: left;
  align-self: center;
`;

const DropDownContainer = styled.div`

`;


const OptionBar = styled.div`
  background: #bfe3ef;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1rem;
  border-radius: 10px;
  border-bottom: 1px solid #1F2041;
  color: #1F2041;

  :hover {
    background: #1F2041;
    color: #bfe3ef; 
  }
`;

const Option = styled.p`
  font-size: 1.4rem;
  justify-self: left;
  align-self: center;
`;


export default class Dropdown extends Component {
  
  state = {
    showDropdown: false
  }

  handleDropdown = () => {
    this.setState(state => ({
      showDropdown: !state.showDropdown
    }));
  }
  
  render() {
    const { showDropdown } = this.state;
    const { sampleArr } = this.props;
    return (
      <div>
        <TitleBar>
          <Title>Title</Title>
          <ArrowContainer onClick={this.handleDropdown}>
          { showDropdown ?
            (<FontAwesomeIcon icon={faAngleUp} style={{color:"#bfe3ef"}} />)
            : (<FontAwesomeIcon icon={faAngleDown} style={{color:"#bfe3ef"}} />)
          }
          </ArrowContainer>
        </TitleBar>
        <div>
        { showDropdown &&
          sampleArr.map(option => {
            return (
              <OptionBar>
                <Option>
                  {option}
                </Option>
              </OptionBar>
            )
          })
        }
        </div>
      </div>
    )
  }
}

Dropdown.defaultProps = {
  sampleArr: [
    'option1',
    'option2',
    'option3',
    'option4',
  ]
};