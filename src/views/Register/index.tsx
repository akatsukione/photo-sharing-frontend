import React, { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH } from 'consts';
import {
  Container,
  Frame,
  Heading,
  Img,
  LoginButton,
  RegisterButton,
  Group,
} from '../Login/styles';
import { EmailInput, PasswordInput } from 'components';
import {
  registerReducer,
  InitialStateType,
  RegisterReducerActionTypes,
} from './reducer';

const InitialState: InitialStateType = {
  email: '',
  password: '',
  confirmPassword: '',
};

export const RegisterView: React.FC = () => {
  const [state, dispatch] = useReducer(registerReducer, InitialState);

  const navigate = useNavigate();

  const onClickJoinAlerter = () => {
    if (
      state.email.length &&
      state.password.length &&
      state.confirmPassword.length &&
      state.password == state.confirmPassword
    ) {
      navigate(PATH.LOGIN);
    }
    console.log(state);
  };

  const onRegisterUserInfoChange = (field: string, newValue: string) => {
    dispatch({
      type: field,
      payload: {
        [field]: newValue,
      },
    });
  };

  const onClickLoginAlerter = () => {
    navigate(PATH.LOGIN);
  };

  return (
    <Container>
      <Frame>
        <Img src="./logo.svg" />
        <Heading>Sign up for PhotoShare</Heading>
        <EmailInput
          value={state.email}
          onChange={(newValue) =>
            onRegisterUserInfoChange(
              RegisterReducerActionTypes.CHANGE_EMAIL,
              newValue
            )
          }
        />
        <PasswordInput
          value={state.password}
          label="Password"
          isValidatable={true}
          onChange={(newValue) =>
            onRegisterUserInfoChange(
              RegisterReducerActionTypes.CHANGE_PASSWORD,
              newValue
            )
          }
        />
        <PasswordInput
          value={state.confirmPassword}
          label="Confirm"
          isValidatable={false}
          onChange={(newValue) =>
            onRegisterUserInfoChange(
              RegisterReducerActionTypes.CHANGE_CONFIRM_PASSWORD,
              newValue
            )
          }
        />
        <Group>
          <RegisterButton onClick={onClickJoinAlerter}>Join</RegisterButton>
          <LoginButton onClick={onClickLoginAlerter}>
            Back to Log in
          </LoginButton>
        </Group>
      </Frame>
    </Container>
  );
};
