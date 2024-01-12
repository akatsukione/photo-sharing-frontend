import React from 'react';
import {
  UserListItemFrame,
  UserListItemButton,
  UserListItemAvatar,
  UserListItemName,
} from './styles';
import { IconButton } from 'components';

interface UserListIemProps {
  name: string;
  avatar: string;
  disabled: boolean;
  onClick: (e: [string, string, string, string]) => void;
  friend: boolean;
}

export const UserListItem: React.FC<UserListIemProps> = (props) => {
  return (
    <UserListItemFrame>
      <UserListItemButton
        disabled={props.disabled}
        onClick={() => {
          props.onClick(['User', props.name, props.name, props.avatar]);
        }}
      >
        <UserListItemAvatar src={props.avatar} width="32px" height="32px" />
        <UserListItemName>{props.name}</UserListItemName>
      </UserListItemButton>
      {!props.friend && (
        <IconButton
          iconPath="./add-friend.svg"
          width="24px"
          height="24px"
          marginleft="-39px"
          marginright="15px"
          onClick={() => {
            props.onClick(['Friend', props.name, props.name, props.avatar]);
          }}
        />
      )}
    </UserListItemFrame>
  );
};
