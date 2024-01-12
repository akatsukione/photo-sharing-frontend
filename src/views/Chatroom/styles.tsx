import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 60px);

  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-rows: 1fr max-content;

  gap: 20px 0;
`;

export const UserListFrame = styled.div`
  background-color: rgba(0, 0, 0, 0.7);

  height: 100%;
  width: 220px;

  padding: 20px 0;

  grid-row-start: 1;
  grid-row-end: 3;

  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const AllUsers = styled.button`
  height: 42px;
  margin: 10px 10px;
  border: 2px solid white;
  border-radius: 5px;
  outline: none;

  color: white;
  background-color: rgb(143, 35, 144);

  font-weight: bold;

  transition: all 200ms;

  &:disabled {
    margin: 10px 0px;
    border-radius: 0;
    border-width: 2px 0;
    background-color: rgb(212, 23, 113);
  }
  &:enabled:hover {
    background-color: rgba(212, 23, 113, 0.6);
  }
  &:enabled:active {
    background-color: rgb(212, 23, 113);
  }
`;

export const MessageListFrame = styled.div`
  height: 100%;
  margin: 20px;

  overflow-y: scroll;
`;

export const MessageBoxFrame = styled.div`
  margin: 10px;
  padding: 10px;

  grid-column: 2;

  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const MessageBox = styled.textarea`
  color: white;
  background-color: rgb(0, 0, 0, 0.7);
  width: 100%;
  padding: 10px 15px;
  border-radius: 10px;
  border: none;
  outline: none;
  overflow: hidden;
  resize: none;
`;

export const SendButton = styled.button`
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  outline: none;
  height: fit-content;

  transition: background-color 300ms;

  color: white;
  background-color: rgb(143, 35, 144);

  &:enabled:hover {
    background-color: rgba(212, 23, 113, 0.8);
  }
  &:enabled:active {
    background-color: rgb(212, 23, 113);
  }
`;

export const FriendModal = styled.div`
  background-color: white;
  position: absolute;
  width: 320px;
  height: 220px;
  padding: 20px;
  left: calc(50vw - 160px);
  top: calc(50vh - 120px);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  text-align: center;
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

export const P = styled.p`
  margin: 0;
`;
