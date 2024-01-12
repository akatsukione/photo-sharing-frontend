import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Container,
  Logo,
  ShortMenu,
  LogoIcon,
  LogoTitle,
  LinkGroup,
} from './styles';

import { StyledLink, StyledButton, StyledAvatar } from 'components';
import { PATH } from 'consts';
import { useOutsideAlerter } from 'hooks';
interface HeaderComponentProps {
  isAuthenticated: boolean;
  setAuthentication: (e: boolean) => void;
}

export const HeaderComponent: React.FC<HeaderComponentProps> = (props) => {
  const [isMenuShowed, showMenu] = useState(false);

  const navigate = useNavigate();

  const menuRef = useRef(null);
  useOutsideAlerter(menuRef, showMenu);

  const onClickMyProfileAlerter = () => {
    navigate(PATH.PROFILE);
    showMenu(false);
  };
  const onClickMyPhotosAlerter = () => {
    navigate(PATH.PHOTOS);
    showMenu(false);
  };
  const onClickMyFriendsAlerter = () => {
    navigate(PATH.FRIENDS);
    showMenu(false);
  };
  const onClickLogOutAlerter = () => {
    navigate(PATH.HOME);
    showMenu(false);
    props.setAuthentication(false);
  };
  return (
    <>
      <Container>
        <Logo to={PATH.HOME}>
          <LogoIcon src="./logo.svg" />
          <LogoTitle>
            PH<b>O</b>T<b>O</b>SHARE
          </LogoTitle>
        </Logo>
        <LinkGroup>
          {!props.isAuthenticated ? (
            <>
              <StyledLink linkstyle="normal" to={PATH.LOGIN}>
                Sign In
              </StyledLink>
              <StyledLink linkstyle="normal" to={PATH.REGISTER}>
                Sign Up
              </StyledLink>
            </>
          ) : (
            <>
              <StyledLink linkstyle="normal" to={PATH.COMMUNITY}>
                Community
              </StyledLink>
              <StyledLink linkstyle="normal" to={PATH.CHATROOM}>
                Chatting Room
              </StyledLink>
              <StyledAvatar
                avatarstyle="small"
                onClick={() => {
                  showMenu(true);
                }}
                src="./snoopy-3.jpg"
              />
              <StyledButton
                buttonstyle="transparent"
                onClick={() => {
                  showMenu(true);
                }}
              >
                Steven
              </StyledButton>
            </>
          )}
        </LinkGroup>
      </Container>
      {isMenuShowed && (
        <>
          <ShortMenu ref={menuRef}>
            <StyledButton
              buttonstyle="transparent"
              onClick={onClickMyProfileAlerter}
            >
              My Profile
            </StyledButton>
            <StyledButton
              buttonstyle="transparent"
              onClick={onClickMyPhotosAlerter}
            >
              My Photos
            </StyledButton>
            <StyledButton
              buttonstyle="transparent"
              onClick={onClickMyFriendsAlerter}
            >
              My Friends
            </StyledButton>
            <StyledButton
              buttonstyle="transparent"
              onClick={onClickLogOutAlerter}
            >
              Log Out
            </StyledButton>
          </ShortMenu>
        </>
      )}
    </>
  );
};
