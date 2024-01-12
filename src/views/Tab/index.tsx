import React, { useState, useRef } from 'react';
import { Container, TabItem } from './styles';
import {
  StyledButton,
  Radio,
  LabeledInput,
  StyledTextAreaComponent,
} from 'components';
import { SimpleModal, Screen } from 'components/Modal/styles';
import {
  Grid,
  Flex,
  Img,
  RadioGroup,
  RightGrid,
  TitleInputContainer,
} from './styles';
import { useOutsideAlerter } from 'hooks';

export const Tab: React.FC = () => {
  const showRef = useRef(null);

  const [showUploadModal, setShow] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useOutsideAlerter(showRef, setShow);

  const onClick = () => {
    setShow(true);
  };

  const changePhoto = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('changePhoto:', event.target.value);
  };

  const uploadFile = () => {
    console.log('upload file');
  };

  const changeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(title);
    setTitle(event.target.value);
  };

  const changeDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
    console.log('changeDescription:', description);
  };

  return (
    <>
      {showUploadModal && (
        <Screen>
          <SimpleModal ref={showRef} style={{ width: '25%' }}>
            <Grid>
              <TitleInputContainer>
                <LabeledInput
                  value={title}
                  placeholder="Title"
                  onChange={changeTitle}
                />
              </TitleInputContainer>
              <Flex>
                <Img
                  src="./avatar.jpg"
                  alt="uploaded image"
                  className="col-12"
                />
                <RadioGroup>
                  <Radio
                    name="photo"
                    options={[
                      { label: 'public', value: 0 },
                      { label: 'private', value: 1 },
                      { label: 'private', value: 2 },
                    ]}
                    onChange={changePhoto}
                  />
                </RadioGroup>
              </Flex>
              <StyledTextAreaComponent onChange={changeDescription} />
              <div>
                <div style={{ width: 'fit-content', margin: 'auto' }}>
                  <StyledButton buttonstyle="blue" onClick={uploadFile}>
                    Upload
                  </StyledButton>
                </div>
              </div>
            </Grid>
          </SimpleModal>
        </Screen>
      )}
      <Container>
        <TabItem>Explore</TabItem>
        <TabItem>My Photos</TabItem>
        <TabItem>Friends</TabItem>
        <RightGrid>
          <StyledButton buttonstyle="transparent" onClick={onClick}>
            Upload
          </StyledButton>
        </RightGrid>
      </Container>
    </>
  );
};
