import React, { useState, useMemo } from 'react';
import { Wrap, RightGrid } from './styles';
import { FriendCard, PaginationBar, Selector } from 'components';
import { getFriends, PageFriendsSize } from 'consts';
import { Flex, FlexItem, Typography, Search } from './styles';

const temp = getFriends();

export const MyFriendsView: React.FC = () => {
  const [friends] = useState(temp);
  const [currentPage, setCurrentPage] = useState(1);

  const currentData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageFriendsSize;
    const lastPageIndex = firstPageIndex + PageFriendsSize;
    return friends.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, friends]);

  const onClick = () => {
    return null;
  };
  return (
    <>
      <Flex>
        <FlexItem>
          <Selector label="Sort by:" options={['Date', 'Uploader']} />
        </FlexItem>
        <FlexItem>
          <Typography>Search:</Typography>
          <Search placeholder="Search..." />
        </FlexItem>
        <RightGrid>
          <PaginationBar
            totalCount={friends.length}
            currentPage={currentPage}
            pageSize={PageFriendsSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </RightGrid>
      </Flex>
      <Wrap>
        {currentData &&
          currentData.map((friend, index) => {
            return (
              <FriendCard
                key={index}
                friend={friend}
                onClick={onClick}
                type={'Remove'}
              />
            );
          })}
      </Wrap>
    </>
  );
};
