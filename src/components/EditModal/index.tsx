import React, { useRef, useState } from 'react';
import {
  Screen,
  Container,
  Header,
  Content,
  StaticImage,
  ImageProperty,
  Footer,
} from './styles';
import { useOutsideAlerter, useEscapeKey } from 'hooks';

type PhotoType = {
  path: string;
  uploader: string;
  title: string;
  status: string;
  description: string;
  tags: string;
};

type PhotoInfoType = {
  photo: PhotoType;
  like: number;
};

type ModalProps = {
  photoInfo: PhotoInfoType;
  handleCancel: () => void;
};

export const EditModal: React.FC<ModalProps> = ({
  photoInfo,
  handleCancel,
}) => {
  const ref = useRef(null);
  useOutsideAlerter(ref, handleCancel);
  useEscapeKey(handleCancel);

  const [state, setState] = useState({
    title: photoInfo.photo.title,
    status: photoInfo.photo.status,
    description: photoInfo.photo.description,
    tags: photoInfo.photo.tags,
  });
  const [allow, setAllow] = useState(false);
  const handleSubmit = () => {
    console.log(state);
    handleCancel();
  };
  const handleEdit = () => {
    setAllow(true);
  };
  const handleChange = (
    props: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setState({ ...state, [props]: e.target.value });
  };
  return (
    <Screen>
      <Container ref={ref}>
        <Header>Explore Photo</Header>
        <Content>
          <StaticImage path={photoInfo.photo.path} />
          <ImageProperty
            allow={allow}
            handleChange={handleChange}
            states={state}
          />
        </Content>
        <Footer
          allow={allow}
          handleCancel={handleCancel}
          handleEdit={handleEdit}
          handleSubmit={handleSubmit}
        />
      </Container>
    </Screen>
  );
};
