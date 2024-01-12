import React from 'react';
import {
  MessageListItemFrame,
  MessageListItemUser,
  MessageListItemText,
  MessageSendImg,
} from './styles';

import { UserListItemAvatar, UserListItemName } from '../UserListItem/styles';

interface MessageListItemProps {
  from: {
    name: string;
    avatar: string;
  };
  to: {
    name: string;
    avatar: string;
  };
  text: string;
}

export const MessageListItem: React.FC<MessageListItemProps> = (props) => {
  return (
    <MessageListItemFrame>
      <MessageListItemUser>
        {props.from.avatar && (
          <UserListItemAvatar
            src={props.from.avatar}
            width="40px"
            height="40px"
          />
        )}
        {props.from.name != 'Me' && (
          <UserListItemName
            style={{ width: 'max-content', color: 'rgb(212, 23, 113)' }}
          >
            {props.from.name}
          </UserListItemName>
        )}
        <MessageSendImg src="./send.svg" />
        {props.to.avatar && (
          <UserListItemAvatar
            src={props.to.avatar}
            width="40px"
            height="40px"
          />
        )}
        {props.to.name != 'Me' && (
          <UserListItemName
            style={{ width: 'max-content', color: 'rgb(212, 23, 113)' }}
          >
            {props.to.name}
          </UserListItemName>
        )}
      </MessageListItemUser>
      <MessageListItemText>{props.text}</MessageListItemText>
    </MessageListItemFrame>
  );
};
