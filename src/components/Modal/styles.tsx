import React, { useState, useEffect } from 'react';
import { StyledButton } from 'components';
import styled from 'styled-components';

export const Screen = styled.div`
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 10;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const SimpleModal = styled.div`
  margin: auto;
  margin-top: 200px;
  width: 40%;
  height: fit-content;
  background-color: white;
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  margin: 100px auto;
  height: 700px;
  width: 80%;
  border-radius: 20px;
  background-color: white;
  display: grid;
  padding: 10px;
  gap: 20px;
`;

export const Header = styled.div`
  margin: auto;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 32px;
`;

export const Content = styled.div`
  display: flex;
  margin: 20px auto;
  gap: 100px;
`;

// File Upload
const ImageContainer = styled.div`
  width: 500px;
  height: 400px;
`;

const StyledUpload = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  background-color: #cdcdcd;
  border-bottom: 5px solid #ff6200;
`;
const UploadButton = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background: none;
  border: none;
  &:hover {
    background-color: #db9d00;
  }
`;

const ContentFit = styled.img`
  width: 100%;
  height: 100%;
`;

type UploadImageProps = {
  handleFile: (e: File | null) => void;
};

export const UploadImage: React.FC<UploadImageProps> = ({ handleFile }) => {
  const [file, setFile] = useState<File | null>(null);

  const handleEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) setFile(event.target.files[0]);
  };

  useEffect(() => {
    handleFile(file);
  }, [file]);

  return (
    <ImageContainer>
      <StyledUpload>
        <UploadButton>
          <label>
            <ContentFit src="./upload-sign.svg" />
            <input
              type="file"
              style={{ display: 'none' }}
              onChange={handleEvent}
            />
          </label>
        </UploadButton>
        {file && <ContentFit src={URL.createObjectURL(file)} />}
      </StyledUpload>
    </ImageContainer>
  );
};

// Image Property

const GridContainer = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: 120px auto;
  gap: 10px;
  padding: 10px;
`;

const Label = styled.a`
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 24px;
`;

const TextBox = styled.input`
  width: 100%;
  height: 50px;
`;

type StateType = {
  title: string;
  status: string;
  description: string;
  tags: string;
};

type ImagePropertyProps = {
  states: StateType;
  handleChange: (desc: string, e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const ImageProperty: React.FC<ImagePropertyProps> = ({
  states,
  handleChange,
}) => {
  return (
    <GridContainer>
      <Label>Title:</Label>
      <TextBox
        type="text"
        value={states.title}
        onChange={(e) => handleChange('title', e)}
      />
      <Label>Status:</Label>
      <TextBox
        type="text"
        value={states.status}
        onChange={(e) => handleChange('status', e)}
      />
      <Label>Description:</Label>
      <TextBox
        type="text"
        value={states.description}
        onChange={(e) => handleChange('description', e)}
      />
      <Label>Tags:</Label>
      <TextBox
        type="text"
        value={states.tags}
        onChange={(e) => handleChange('tags', e)}
      />
    </GridContainer>
  );
};

const ButtonLayout = styled.div`
  margin-left: auto;
  margin-right: 50px;
  display: flex;
  gap: 20px;
`;

type FooterProps = {
  handleSubmit: () => void;
  handleCancel: () => void;
};

export const Footer: React.FC<FooterProps> = ({
  handleSubmit,
  handleCancel,
}) => {
  return (
    <ButtonLayout>
      <StyledButton buttonstyle="black" onClick={handleSubmit}>
        Save
      </StyledButton>
      <StyledButton buttonstyle="black" onClick={handleCancel}>
        Cancel
      </StyledButton>
    </ButtonLayout>
  );
};
