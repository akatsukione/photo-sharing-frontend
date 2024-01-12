import React from 'react';
import { Image, GoToTopBtn, SearchBar } from 'components';
import {
  Container,
  Header,
  SubCaption,
  Caption,
  Description,
  Block,
  BlockReverse,
  ContextEnd,
  ContextStart,
  ImageContainer,
} from './styles';

export const HomeView: React.FC = () => {
  return (
    <>
      <GoToTopBtn />
      <Image src="./photos.png" alt="back" />

      <Container>
        <Header>Photo Share</Header>
        <SubCaption>Create and share your images</SubCaption>
        <SearchBar type="text" placeholder="Search image..." />
        <Description>Trending: flower, wallpapaer, beauty, love...</Description>
      </Container>
      <BlockReverse>
        <ImageContainer src="community.png" />
        <ContextEnd>
          <Caption>Welcome to our Community</Caption>
          <Description>
            Share everything with your community and find your value sharing
            with others
          </Description>
        </ContextEnd>
      </BlockReverse>
      <Block>
        <ImageContainer src="chatting.png" />
        <ContextStart>
          <Caption>Welcome to our Chatting</Caption>
          <Description>
            Share everything with your community and find your value sharing
            with others
          </Description>
        </ContextStart>
      </Block>
      <BlockReverse>
        <ImageContainer src="friends.png" />
        <ContextEnd>
          <Caption>Find and make your own friends</Caption>
          <Description>
            Make a friendship with photos and feel happy and sad with your
            friends
          </Description>
        </ContextEnd>
      </BlockReverse>
    </>
  );
};
