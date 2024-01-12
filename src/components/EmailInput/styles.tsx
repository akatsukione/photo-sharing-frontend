import styled from 'styled-components';

export const Label = styled.label<{ state: string }>`
  position: absolute;
  margin-left: 20px;
  transition: all 200ms;

  ${({ state }) =>
    state === 'STATE_NORMAL' &&
    `
      color: rgb(137, 137, 137);
      margin-top: 17px;
      font-size: 20px;
    `};
  ${({ state }) =>
    state === 'STATE_EDITED' &&
    `
      color: dodgerblue;
      margin-top: 8px;
      font-size: 15px;
    `};
  ${({ state }) =>
    state === 'STATE_INVALID' &&
    `
      color: red;
      margin-top: 8px;
      font-size: 15px;
    `};
`;

export const Input = styled.input<{ state: string }>`
  color: rgb(60, 60, 60);
  background-color: transparent;

  padding: 27px 16px 7px 16px;
  border-radius: 10px;
  border: 2px solid rgb(137, 137, 137);
  outline: none;

  font-size: 20px;
  font-weight: normal;

  ${({ state }) =>
    state === 'STATE_NORMAL' &&
    `
      border-color: rgb(137, 137, 137);
    `};
  ${({ state }) =>
    state === 'STATE_EDITED' &&
    `
      border-color: dodgerblue;
    `};
  ${({ state }) =>
    state === 'STATE_INVALID' &&
    `
      border-color: red;
    `};

  z-index: 1;
`;

export const Containter = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InvalidLabel = styled.div<{ state: string }>`
  color: red;
  display: none;
  margin-right: 5px;

  ${({ state }) =>
    state === 'STATE_INVALID' &&
    `
      display: inline-block;
    `};
`;
