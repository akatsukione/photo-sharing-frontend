import styled from 'styled-components';

export const SearchBar = styled.input`
  float: right;
  padding: 8px;
  border-width: 0px;
  border-radius: 5px;
  margin: 12px 0px;
  width: 50vw;
  background-color: #ebebeb;

  font-size: 12px;
  line-height: 1;
  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1;
  }
  @media (min-width: 1024px) {
    font-size: 18px;
    line-height: 1;
  }
  &:focus {
    outline: none;
    background-color: #cdcdcd;
  }
`;
