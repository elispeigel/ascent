import React, {Component} from 'react';
import styled from 'styled-components';

const OptionContainer = styled.div`
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

const OptionTitle = styled.p`
  font-size: 1.4rem;
  justify-self: left;
  align-self: center;
`;

const OptionBodyContainer = styled.div``


const Option = ({title, body, accordion}) => {
  return (
    <OptionContainer>
      <OptionTitle>
        {title}
      </OptionTitle>
      {
        accordion && 
          <OptionBodyContainer>
            <OptionBody>
              {body}
            </OptionBody>
          </OptionBodyContainer>
      }
      
    </OptionContainer>
  );
}

export default Option;