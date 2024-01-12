import styled from 'styled-components';

export const Container = styled.button<{
  avatarstyle: string;
  src: string;
}>`
  cursor: pointer;
  border-radius: 50%;
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border: none;
  ${({ avatarstyle }) =>
    avatarstyle === 'large' &&
    `
      min-width: 200px;
      min-height: 200px;
    `};
  ${({ avatarstyle }) =>
    avatarstyle === 'normal' &&
    `
      min-width: 70px;
      min-height: 70px;
    `};
  ${({ avatarstyle }) =>
    avatarstyle === 'small' &&
    `
      min-width: 40px;
      min-height: 40px;
    `};
`;
