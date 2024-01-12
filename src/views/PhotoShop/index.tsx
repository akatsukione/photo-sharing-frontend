import React, { useState } from 'react';
import { Container, Card } from './styles';

const photosList = [
  {
    src: './background.jpg',
    uploader: 'Bruce Wang',
    time: '10/13/2023',
    description: 'photographer work environment',
  },
  {
    src: './hitch-hiker.jpg',
    uploader: 'Nakio Akira',
    time: '10/16/2023',

    description: 'hitch-hiker in orange jacket',
  },
  {
    src: './mountain.jpg',
    uploader: 'Lily Porter',
    time: '10/11/2023',

    description: 'north-eastern Everest Mountain',
  },
  {
    src: './jungle.jpg',
    uploader: 'Lily Porter',
    time: '10/11/2023',

    description: 'bridge in jungle valley',
  },
];

export const PhotoShop: React.FC = () => {
  const [open, setOpen] = useState(Array(photosList.length));

  const handleOpen = (index: number) => {
    open[index] = true;
    setOpen(open);
  };

  return (
    <Container>
      {photosList.map((value, index) => (
        <div
          key={index}
          onClick={() => handleOpen(index)}
          style={{ cursor: 'pointer' }}
        >
          <Card
            src={value.src}
            uploader={value.uploader}
            time={value.time}
            width={
              Math.floor(Math.random() * (600 - 200 + 1) + 200).toString() +
              'px'
            }
          />
        </div>
      ))}
    </Container>
  );
};
