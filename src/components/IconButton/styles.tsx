import styled from 'styled-components';

export const Button = styled.div<{
  marginleft: string;
  marginright: string;
}>`
  background-color: transparent;
  padding: 0;
  border: none;
  outline: none;
  margin-top: 10px;
  margin-left: ${(props) => props.marginleft};
  margin-right: ${(props) => props.marginright};
  filter: opacity(0.4);

  &:hover {
    filter: opacity(0.8);
  }
  &:active {
    filter: opacity(1);
  }
  z-index: 1;
`;

export const Icon = styled.img<{ width: string; height: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
