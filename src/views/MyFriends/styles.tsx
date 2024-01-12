import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #a7a7a7;
  width: fit-content;
  display: flex;
  padding: 5px;
  margin: 0px 30px;
  border-radius: 5px;
`;

export const TabItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: fit-content;
  border: none;
  height: 50px;
  color: #000000;
  font-size: 18px;
  padding: 0px 10px;
  border-radius: 5px;
  &:hover {
    background-color: #00ff00;
  }
`;

export const TabBtn = styled.button`
  height: 30px;
  margin-left: auto;
`;

export const RightGrid = styled.div`
  margin-left: auto;
`;

export const Flex = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin: 20px 10px;
`;

export const FlexItem = styled.div`
  display: flex;
  gap: 10px;
  margin: 0px 10px;
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

export const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
