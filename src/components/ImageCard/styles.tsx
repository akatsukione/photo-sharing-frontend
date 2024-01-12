import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  margin: 50px auto;
`;

export const Image = styled.img`
  cursor: pointer;
  width: 512px;
  height: 512px;
  object-fit: cover;
  overflow: hidden;
`;

export const Footer = styled.div`
  display: flex;
  height: 40px;
  background-color: grey;
  padding: 10px;
  justify-content: space-between;
`;

export const Caption = styled.a`
  font-size: 18px;
  font-family: fantasy;
`;

export const FeatureBar = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const SVG = styled.img`
  height: 100%;
  cursor: pointer;
`;
