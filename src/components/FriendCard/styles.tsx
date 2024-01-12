import styled from 'styled-components';

export const Container = styled.div`
  width: 500px;
  height: 250px;
  background-color: #b9b9b9;
  display: flex;
  margin: 30px auto;
  gap: 60px;
  padding: 30px;
`;

export const Grid = styled.div`
  display: grid;
  gap: 5px;
`;

export const AlignRight = styled.div`
  margin-left: auto;
`;

export const Description = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 10px;
`;
