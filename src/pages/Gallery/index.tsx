import React from 'react';

import { MenuView, Tab, PhotoShop } from 'views';
import { Container, Content } from './styles';
import { SearchBar } from 'components';

export const GalleryPage: React.FC = () => {
  return (
    <Container>
      <MenuView />
      <Content>
        <Tab />
        <SearchBar
          type="text"
          placeholder="Search image..."
          style={{ marginLeft: 'auto', width: '30%' }}
        />
        <PhotoShop />
      </Content>
    </Container>
  );
};
