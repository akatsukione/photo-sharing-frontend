import styled from 'styled-components';

export const StyledTextArea = styled.textarea`
  background-color: #dedede;
  color: black;
  margin-top: 20px;
  padding: 5px;
  border: none;
  border-radius: 5px;
  inline-size: 1;
  font-size: 18px;
  &:focus {
    outline: none;
  }
`;
