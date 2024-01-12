import React from 'react';

import { MenuView, DashboardView } from 'views';
import { Container, Content } from './styles';

export const DashboardPage: React.FC = () => {
  return (
    <Container>
      <MenuView />
      <Content>
        <DashboardView />
      </Content>
    </Container>
  );
};
