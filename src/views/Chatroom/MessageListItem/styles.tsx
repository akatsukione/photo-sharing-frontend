import styled from 'styled-components';

export const MessageListItemFrame = styled.div`
  margin-right: 20px;
`;

export const MessageListItemUser = styled.div`
  margin: 10px;
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const MessageListItemText = styled.pre`
  background-color: rgba(0, 0, 0, 0.2);

  width: fit-content;
  white-space: pre-line;

  margin: 10px 0 20px 0;
  padding: 10px;
  border-radius: 10px;

  line-height: 1.2;
`;

export const MessageSendImg = styled.img`
  width: auto;
  height: 40px;
`;
