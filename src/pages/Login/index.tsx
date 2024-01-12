import { LoginView } from 'views';
import React from 'react';

interface LoginPageProps {
  setAuthentication: (e: boolean) => void;
}

export const LoginPage: React.FC<LoginPageProps> = (props) => {
  return <LoginView setAuthentication={props.setAuthentication} />;
};
