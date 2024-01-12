import React from 'react';
import { Container } from './styles';

interface StyledButtonProps {
  children: React.ReactNode;
  buttonstyle: string;
  onClick: () => void;
}

export const StyledButton: React.FC<StyledButtonProps> = (props) => {
  return (
    <Container buttonstyle={props.buttonstyle} onClick={props.onClick}>
      {props.children}
    </Container>
  );
};
