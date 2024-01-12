import React, { useRef, useState } from 'react';
import {
  Screen,
  Container,
  Header,
  Content,
  ImageProperty,
  ProfileProperty,
  Footer,
  ProfileImageContainer,
  ImageContainer,
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

type ProfileInfoType = {
  path: string;
  name: string;
  birthday: string;
  gender: string;
  address: string;
};

type PhotoInfoType = {
  photo: PhotoType;
  like: number;
};

type ModalProps = {
  photoInfo: PhotoInfoType;
  profileInfo: ProfileInfoType;
  handleCancel: () => void;
};

export const PhotoModal: React.FC<ModalProps> = ({
  photoInfo,
  profileInfo,
  handleCancel,
}) => {
  const ref = useRef(null);
  useOutsideAlerter(ref, handleCancel);
  useEscapeKey(handleCancel);

  const [photo] = useState({
    title: photoInfo.photo.title,
    status: photoInfo.photo.status,
    description: photoInfo.photo.description,
    tags: photoInfo.photo.tags,
  });
  const [profile] = useState({
    username: profileInfo.name,
    birthday: profileInfo.birthday,
    gender: profileInfo.gender,
    location: profileInfo.address,
  });
  const handleFriendRequest = () => {
    console.log(profile);
    handleCancel();
  };
  return (
    <Screen>
      <Container ref={ref}>
        <Header>Explore Photo</Header>
        <Content>
          <ImageContainer src={photoInfo.photo.path} />
          <ImageProperty allow={false} photo={photo} />
        </Content>
        <Content>
          <ProfileImageContainer src={profileInfo.path} />
          <ProfileProperty allow={false} profile={profile} />
        </Content>
        <Footer
          handleCancel={handleCancel}
          handleFriendRequest={handleFriendRequest}
        />
      </Container>
    </Screen>
  );
};
