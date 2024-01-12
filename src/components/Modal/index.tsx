import React, { useRef, useState } from 'react';
import {
  Screen,
  Container,
  Header,
  Content,
  UploadImage,
  ImageProperty,
  Footer,
} from './styles';
import { useOutsideAlerter, useEscapeKey } from 'hooks';

type ModalProps = {
  handleCancel: () => void;
};

export const Modal: React.FC<ModalProps> = ({ handleCancel }) => {
  const ref = useRef(null);
  useOutsideAlerter(ref, handleCancel);
  useEscapeKey(handleCancel);

  const [state, setState] = useState<{
    file: File | null;
    title: string;
    status: string;
    description: string;
    tags: string;
  }>({
    file: null,
    title: '',
    status: '',
    description: '',
    tags: '',
  });

  const handleSubmit = () => {
    console.log(state);
    handleCancel();
  };

  const handleFile = (e: File | null) => {
    setState({ ...state, file: e });
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
        <Header>Upload New Photo</Header>
        <Content>
          <UploadImage handleFile={handleFile} />
          <ImageProperty handleChange={handleChange} states={state} />
        </Content>
        <Footer handleCancel={handleCancel} handleSubmit={handleSubmit} />
      </Container>
    </Screen>
  );
};
