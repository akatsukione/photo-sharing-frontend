import styled from 'styled-components';

export const Container = styled.div`
  width: fit-content;
  margin: auto;
  display: flex;
  color: white;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 150px;
  margin-top: 300px;
`;

export const Block = styled.div`
  margin: 30px auto;
  display: flex;
  align-items: center;
  gap: 40px;
  width: 70%;
  height: 500px;
  @media (max-width: 768px) {
    display: grid;
    width: 100%;
    justify-content: center;
  }
`;

export const BlockReverse = styled.div`
  margin: 30px auto;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 40px;
  width: 70%;
  height: 500px;
  @media (max-width: 768px) {
    display: grid;
    width: 100%;
    justify-content: center;
    gap: 10px;
  }
`;

export const ImageContainer = styled.img`
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  @media screen {
    width: 100%;
  }
`;

export const ContextEnd = styled.div`
  text-align: end;
  @media (max-width: 768px) {
    text-align: start;
  }
`;

export const ContextStart = styled.div`
  text-align: start;
`;

export const Header = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 1;

  margin: 30px 0px;
  @media (min-width: 768px) {
    font-size: 28px;
    line-height: 1;
  }
  @media (min-width: 1024px) {
    font-size: 32px;
    line-height: 1;
  }
  @media (min-width: 1280px) {
    font-size: 48px;
    line-height: 1;
  }
`;

export const Caption = styled.div`
  color: #000000;
  font-size: 14px;
  line-height: 1;
  margin: 12px 0px;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1;
  }
  @media (min-width: 1024px) {
    font-size: 24px;
    line-height: 1;
  }
`;

export const SubCaption = styled.div`
  color: #ffffff;
  font-size: 14px;
  line-height: 1;
  margin: 12px 0px;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1;
  }
  @media (min-width: 1024px) {
    font-size: 24px;
    line-height: 1;
  }
`;

export const Description = styled.a`
  font-size: 14px;
`;
