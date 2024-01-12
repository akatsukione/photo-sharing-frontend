import React, { useState } from 'react';
import {
  AllUsers,
  Container,
  MessageBox,
  MessageBoxFrame,
  MessageListFrame,
  SendButton,
  UserListFrame,
  FriendModal,
  Div,
  P,
} from './styles';
import { Screen } from 'components/Modal/styles';
import { UserListItem } from './UserListItem';
import { UserListItemAvatar } from './UserListItem/styles';
import { MessageListItem } from './MessageListItem/indext';

const friends = [
  {
    name: 'Iolanthe Claude',
    avatar: './snoopy-1.jpg',
    friend: true,
  },
  {
    name: 'Vijaya Katarina',
    avatar: './snoopy-2.jpg',
    friend: true,
  },
];
const users = [
  {
    name: 'Bruce Wang',
    avatar: './snoopy-3.jpg',
    friend: false,
  },
  {
    name: 'Nakio Akira',
    avatar: './snoopy-4.jpg',
    friend: false,
  },
  {
    name: 'Lily Potter',
    avatar: './snoopy-5.jpg',
    friend: false,
  },
];
const messages = [
  {
    from: {
      name: 'Iolanthe Claude',
      avatar: './snoopy-1.jpg',
    },
    to: {
      name: 'Everyone',
      avatar: '',
    },
    text: 'Hi @Phoenix @Fatto I think both of you are really fan of "Despicable Me"\nAny fan of minions?',
  },
  {
    from: {
      name: 'Iolanthe Claude',
      avatar: './snoopy-2.jpg',
    },
    to: {
      name: 'Me',
      avatar: './snoopy-6.jpg',
    },
    text: 'i am\nspecially kevin\ndid you forget',
  },
  {
    from: {
      name: 'Me',
      avatar: './snoopy-6.jpg',
    },
    to: {
      name: 'Iolanthe Claude',
      avatar: './snoopy-3.jpg',
    },
    text: 'Hey, we are looking for experienced moderators for an project on Ethereum, the salaries are very high https://discord.gg/gm9r4dyJa',
  },
  {
    from: {
      name: 'Me',
      avatar: './snoopy-6.jpg',
    },
    to: {
      name: 'Everyone',
      avatar: '',
    },
    text: 'Hey, we are looking for experienced web3 moderators (honest salary) https://discord.gg/wgp8J3bz',
  },
];

export const ChatRoomView: React.FC = () => {
  const [userData, setUserData] = useState(['User', 'All', 'All', 'All']);
  const [msgBoxRow, setMsgBoxRow] = useState(1);
  const [isFriendModalShow, showFriendModal] = useState(false);

  const onClickUserHandler = (data: [string, string, string, string]) => {
    if (data[0] == 'Friend') {
      showFriendModal(true);
      setUserData([userData[0], userData[1], data[2], data[3]]);
    } else setUserData(data);
  };

  return (
    <Container>
      {isFriendModalShow && (
        <Screen>
          <FriendModal>
            <P>
              Do you really want to send Friend Request to <b>{userData[2]}</b>?
            </P>
            <Div>
              <UserListItemAvatar
                src={userData[3]}
                width="128px"
                height="128px"
              />
              <SendButton onClick={() => showFriendModal(false)}>OK</SendButton>
            </Div>
          </FriendModal>
        </Screen>
      )}
      <UserListFrame>
        <AllUsers
          disabled={userData[1] == 'All'}
          onClick={() => {
            onClickUserHandler(['User', 'All', 'All', 'All']);
          }}
        >
          To Everyone
        </AllUsers>
        {friends.map((value) => {
          return (
            <UserListItem
              name={value.name}
              avatar={value.avatar}
              disabled={value.name == userData[1]}
              friend={value.friend}
              onClick={onClickUserHandler}
            />
          );
        })}
        {users.map((value) => {
          return (
            <UserListItem
              name={value.name}
              avatar={value.avatar}
              disabled={value.name == userData[1]}
              friend={value.friend}
              onClick={onClickUserHandler}
            />
          );
        })}
      </UserListFrame>
      <MessageListFrame>
        {messages.map((value) => {
          return (
            <MessageListItem
              from={value.from}
              to={value.to}
              text={value.text}
            />
          );
        })}
      </MessageListFrame>
      <MessageBoxFrame>
        <MessageBox
          rows={msgBoxRow}
          onChange={(e) => {
            setMsgBoxRow(e.target.value.split('\n').length);
          }}
        ></MessageBox>
        <SendButton>Send</SendButton>
      </MessageBoxFrame>
    </Container>
  );
};
