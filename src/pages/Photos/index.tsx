import React from 'react';

import { MyPhotosView } from 'views';
import { Container } from './styles';

export const PhotosPage: React.FC = () => {
  return (
    <Container>
      <MyPhotosView />
    </Container>
  );
};
