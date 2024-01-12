import React from 'react';

import { Container } from './styles';
import { StyledLink } from 'components';

export const MenuView: React.FC = () => {
  return (
    <Container>
      <StyledLink to="/community" linkstyle="normal">
        Community
      </StyledLink>
      <StyledLink to="/chatroom" linkstyle="normal">
        Chatting Room
      </StyledLink>
    </Container>
  );
};
