import styled from 'styled-components';

export const UserListItemFrame = styled.div`
  display: flex;
  align-items: center;
`;

export const UserListItemButton = styled.button`
  padding: 8px 8px 8px 8px;
  margin: 0 10px;
  border: none;
  border-radius: 5px;
  outline: none;

  flex: 1;

  display: flex;
  align-items: center;
  gap: 10px;

  color: white;
  background-color: transparent;

  transition: all 200ms;

  &:disabled {
    margin: 0;
    padding: 8px 18px 8px 18px;
    border-radius: 0;
    background-color: rgba(0, 0, 0, 0.6);
  }

  &:enabled:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
  &:enabled:active {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

export const UserListItemAvatar = styled.div<{
  src: string;
  width: string;
  height: string;
}>`
  min-width: ${(props) => props.width};
  min-height: ${(props) => props.height};
  max-width: ${(props) => props.width};
  max-height: ${(props) => props.height};
  background-image: ${(props) => 'url(' + props.src + ')'};
  background-size: cover;
  background-position: center;
  border-radius: 50%;
`;
export const UserListItemName = styled.div`
  text-align: left;
  width: 100%;
  font-weight: bold;
`;
