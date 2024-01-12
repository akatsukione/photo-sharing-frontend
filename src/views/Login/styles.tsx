import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100vh - 60px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: url('./photos.png');
  backdrop-filter: lighten(50%);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Frame = styled.div`
  background-color: white;

  width: fit-content;
  padding: 30px;
  border-radius: 10px;

  box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 530px) {
    width: 100%;
    border-radius: 0;
  }
`;

export const Heading = styled.p`
  color: rgba(0, 0, 0, 0.8);

  margin: 0 30px 10px 30px;

  text-align: center;
  font-size: 20px;
  font-weight: bold;

  & > b {
    font-size: 24px;
    letter-spacing: -1px;
  }
`;

export const Group = styled.div`
  margin-top: 3%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

export const LoginButton = styled.button`
  color: white;
  background-color: rgb(211, 18, 110);

  padding: 10px 20px;
  border-radius: 30px;
  border: none;

  font-size: 20px;

  transition: all 200ms;

  &:hover {
    background-color: rgba(211, 18, 110, 0.8);
  }
  &:active {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export const RegisterButton = styled.button`
  color: white;
  background-color: rgb(139, 28, 140);

  padding: 10px 0px;
  border-radius: 30px;
  border: none;

  font-size: 20px;

  transition: all 200ms;

  &:hover {
    background-color: rgb(139, 28, 140, 0.8);
  }
  &:active {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export const Img = styled.img`
  width: 80px;
  height: auto;

  align-self: center;
`;

export const ForgetPassWordLink = styled(Link)`
  color: rgb(211, 18, 110);

  text-align: right;
  text-decoration: none;
  font-size: 20px;

  transition: all 300ms;

  &:hover {
    color: dodgerblue;
  }
  &:active {
    color: rgb(60 60 60);
  }
`;
