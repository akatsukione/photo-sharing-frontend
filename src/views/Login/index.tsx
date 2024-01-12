import { PATH } from 'consts';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Frame,
  Heading,
  ForgetPassWordLink,
  Group,
  Img,
  RegisterButton,
  LoginButton,
} from './styles';
import { EmailInput, PasswordInput } from 'components';
interface LoginViewProps {
  setAuthentication: (e: boolean) => void;
}

export const LoginView: React.FC<LoginViewProps> = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const onClickLogInHandler = () => {
    if (email.length && password.length) {
      navigate(PATH.HOME);
      props.setAuthentication(true);
    }
  };

  const onClickRegisterHandler = () => {
    navigate(PATH.REGISTER);
  };

  return (
    <Container>
      <Frame>
        <Img src="./logo.svg" />
        <Heading>
          Log in to <b>PHOTOSHARE</b> community
        </Heading>
        <EmailInput onChange={setEmail} value={email} />
        <PasswordInput
          value={password}
          isValidatable={false}
          label="Password"
          onChange={setPassword}
        />
        <ForgetPassWordLink to={PATH.FORGOT_PASSWORD}>
          Forget password...
        </ForgetPassWordLink>
        <Group>
          <LoginButton onClick={onClickLogInHandler}>Log in</LoginButton>
          <RegisterButton onClick={onClickRegisterHandler}>
            Register
          </RegisterButton>
        </Group>
      </Frame>
    </Container>
  );
};
