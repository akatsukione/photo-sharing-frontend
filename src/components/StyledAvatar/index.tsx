import React from 'react';
import { Container } from './styles';

interface StyledAvatarProps {
  src: string;
  avatarstyle: string;
  onClick: () => void;
}

export const StyledAvatar: React.FC<StyledAvatarProps> = (props) => {
  return (
    <Container
      avatarstyle={props.avatarstyle}
      onClick={props.onClick}
      src={props.src}
    />
  );
};
