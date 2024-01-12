import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin: 10px;
`;

export const FlexItem = styled.div`
  display: flex;
  gap: 10px;
  margin: 0px 10px;
`;

export const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: auto;
`;

export const Typography = styled.a`
  font-family: fantasy;
  font-size: 22px;
`;

export const Search = styled.input`
  background-color: #d2d2d2;
  width: 200px;
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 18px;
`;
