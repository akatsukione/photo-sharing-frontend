import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)<{ linkstyle: string }>`
  font-weight: bold;
  text-decoration: none;
  letter-spacing: -1px;

  ${({ linkstyle }) =>
    linkstyle === 'normal' &&
    `
      color: rgba(0, 0, 0, 0.8);
      font-size: 18px;

      &:hover{
        color: rgba(0, 0, 0, 0.9);
      }
      &:active{
        color: rgb(0, 0, 0);
      }
    `}
`;
