import { StyledAvatar, PasswordInput, BasicInput } from 'components';
import { Container, Frame, Group, LoginButton } from '../Login/styles';
import { HGroup, VGroup } from './styles';
import React, { useReducer } from 'react';

import {
  InitialStateType,
  profileReducer,
  ProfileReducerActionTypes,
} from './reducer';

const InitialState: InitialStateType = {
  username: '',
  password: '',
  confirmPassword: '',
  address: '',
  birthday: '',
  gender: '',
  city: '',
  country: '',
  county: '',
};

export const ProfileView: React.FC = () => {
  const [state, dispatch] = useReducer(profileReducer, InitialState);

  const handleChange = (newValue: string, field: string) => {
    dispatch({
      type: field,
      payload: {
        [field]: newValue,
      },
    });
  };

  return (
    <>
      <Container>
        <Frame>
          <HGroup>
            <StyledAvatar
              src="./snoopy-3.jpg"
              avatarstyle="large"
              onClick={() => {
                console.log(1);
              }}
            />
            <VGroup>
              <BasicInput
                label="Username"
                value={state.username}
                onChange={(e) =>
                  handleChange(e, ProfileReducerActionTypes.CHANGE_USERNAME)
                }
              />
              <PasswordInput
                value={state.password}
                label="Password"
                isValidatable={true}
                onChange={(e) =>
                  handleChange(e, ProfileReducerActionTypes.CHANGE_PASSWORD)
                }
              />
              <PasswordInput
                value={state.confirmPassword}
                label="Confirm Password"
                isValidatable={true}
                onChange={(e) =>
                  handleChange(
                    e,
                    ProfileReducerActionTypes.CHANGE_CONFIRM_PASSWORD
                  )
                }
              />
            </VGroup>
          </HGroup>
          <BasicInput
            label="Birthday"
            type="date"
            value={state.birthday}
            onChange={(e) =>
              handleChange(e, ProfileReducerActionTypes.CHANGE_BIRTHDAY)
            }
          />
          <BasicInput
            label="Gender"
            value={state.gender}
            onChange={(e) =>
              handleChange(e, ProfileReducerActionTypes.CHANGE_GENDER)
            }
          />
          <BasicInput
            label="Address"
            value={state.address}
            onChange={(e) =>
              handleChange(e, ProfileReducerActionTypes.CHANGE_ADDRESS)
            }
          />
          <BasicInput
            label="City"
            value={state.city}
            onChange={(e) =>
              handleChange(e, ProfileReducerActionTypes.CHANGE_CITY)
            }
          />
          <BasicInput
            label="County"
            value={state.county}
            onChange={(e) =>
              handleChange(e, ProfileReducerActionTypes.CHANGE_COUNTY)
            }
          />
          <BasicInput
            label="Country"
            value={state.country}
            onChange={(e) =>
              handleChange(e, ProfileReducerActionTypes.CHANGE_COUNTRY)
            }
          />
          <Group>
            <VGroup></VGroup>
            <LoginButton
              onClick={() => {
                console.log(state);
              }}
            >
              Save
            </LoginButton>
          </Group>
        </Frame>
      </Container>
    </>
  );
};
