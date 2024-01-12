import styled from 'styled-components';

export const Container = styled.footer`
  color: white;
  background-color: rgba(0, 0, 0, 0.8);

  padding: 10px;

  box-shadow: 0 0 5px 0px black;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  text-align: center;
`;

export const FooterTitle = styled.h1`
  margin: 0;
  margin-bottom: 10px;

  font-size: 40px;
`;

export const FooterIcon = styled.img`
  width: auto;
  height: 50px;
  margin-bottom: -10px;
  filter: brightness(600%);
`;

export const FooterText = styled.p`
  margin: 0;
  margin-bottom: 20px;

  font-size: 20px;
`;
