import styled from 'styled-components';

export const Image = styled.img`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 650px;
  object-fit: cover;
  filter: brightness(50%);
  object-position: 50% 20%;
`;
