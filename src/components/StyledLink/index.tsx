import React from 'react';
import { Container } from './styles';
interface StyledLinkProps {
  children: React.ReactNode;
  linkstyle: string;
  to: string;
}

export const StyledLink: React.FC<StyledLinkProps> = (props) => {
  return (
    <Container linkstyle={props.linkstyle} to={props.to}>
      {props.children}
    </Container>
  );
};
