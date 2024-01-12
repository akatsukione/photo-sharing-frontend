import React from 'react';

import { PATH } from 'consts';
import { Routes, Route } from 'react-router-dom';

import {
  LoginPage,
  HomePage,
  RegisterPage,
  DashboardPage,
  // GalleryPage,
  ChatRoomPage,
  ProfilePage,
  PhotosPage,
  FriendsPage,
  CommunityPage,
} from 'pages';
``;

interface RouteComponentProps {
  isAuthenticated: boolean;
  setAuthentication: (e: boolean) => void;
}

export const RouteComponent: React.FC<RouteComponentProps> = (props) => {
  return (
    <>
      {props.isAuthenticated ? (
        <Routes>
          <Route path={PATH.HOME} element={<HomePage />} />
          <Route
            path={PATH.LOGIN}
            element={<LoginPage setAuthentication={props.setAuthentication} />}
          />
          <Route path={PATH.REGISTER} element={<RegisterPage />} />
          <Route path={PATH.DASHBOARD} element={<DashboardPage />} />
          <Route path={PATH.COMMUNITY} element={<CommunityPage />} />
          <Route path={PATH.CHATROOM} element={<ChatRoomPage />} />
          <Route path={PATH.PROFILE} element={<ProfilePage />} />
          <Route path={PATH.PHOTOS} element={<PhotosPage />} />
          <Route path={PATH.FRIENDS} element={<FriendsPage />} />
        </Routes>
      ) : (
        <Routes>
          <Route path={PATH.HOME} element={<HomePage />} />
          <Route
            path={PATH.LOGIN}
            element={<LoginPage setAuthentication={props.setAuthentication} />}
          />
          <Route path={PATH.REGISTER} element={<RegisterPage />} />
        </Routes>
      )}
    </>
  );
};
