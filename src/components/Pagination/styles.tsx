import styled from 'styled-components';

export const PaginationContainer = styled.ul`
  display: flex;
  list-style-type: none;
`;

export const PaginationItem = styled.li`
  padding: 0 12px;
  height: 32px;
  text-align: center;
  margin: auto 4px;
  color: rgba(0, 0, 0, 0.87);
  display: flex;
  box-sizing: border-box;
  align-items: center;
  letter-spacing: 0.01071em;
  border-radius: 16px;
  line-height: 1.43;
  font-size: 16px;

  &.dots:hover {
    background-color: transparent;
    cursor: default;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
    cursor: pointer;
  }

  &.selected {
    background-color: rgba(0, 0, 0, 0.08);
  }

  .arrow {
    &::before {
      position: relative;
      content: '';
      display: inline-block;
      width: 0.4em;
      height: 0.4em;
      border-right: 0.12em solid rgba(0, 0, 0, 0.87);
      border-top: 0.12em solid rgba(0, 0, 0, 0.87);
    }

    &.left {
      transform: rotate(-135deg) translate(-30%);
    }

    &.right {
      transform: rotate(45deg);
    }
  }

  &.disabled {
    pointer-events: none;

    .arrow::before {
      border-right: 0.12em solid rgba(0, 0, 0, 0.43);
      border-top: 0.12em solid rgba(0, 0, 0, 0.43);
    }

    &:hover {
      background-color: transparent;
      cursor: default;
    }
  }
`;
