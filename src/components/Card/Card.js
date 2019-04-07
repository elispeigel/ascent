import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  background: #1F2041;
  border-radius: 10px;
`;
const Title = styled.p`
  margin-top: 1.2rem;
  color: #bfe3ef;
  font-family: sans-serif;
`;
const TitleWrapper = styled.div`
  padding-top: 1rem;
  width: 95%;
  margin: 0 auto;
  font-size: 1.4rem;
`;
const Body = styled.p`
  color: #bfe3ef;
  font-family: sans-serif;
`;
const BodyWrapper = styled.div`
  border-top: 1px solid #bfe3ef;
  width: 95%;
  margin: 0 auto;
  padding-bottom: 1rem;
`;


const Card = ({title, body}) => {
  return(
    <Container>
      <TitleWrapper>
        <Title>{title}</Title>
      </TitleWrapper>
      <BodyWrapper>
        <Body>{body}</Body>
      </BodyWrapper>
    </Container>
  )
}

export default Card;