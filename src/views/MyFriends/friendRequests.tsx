import React, { useState, useMemo } from 'react';
import { Wrap, RightGrid } from './styles';
import { FriendCard, PaginationBar } from 'components';
import { getNewFriends, PageFriendsSize } from 'consts';
import { Flex } from './styles';

const temp = getNewFriends();

export const FriendRequestsView: React.FC = () => {
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
                type={'Accept'}
              />
            );
          })}
      </Wrap>
    </>
  );
};
