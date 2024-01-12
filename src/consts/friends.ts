export const getFriends = () => {
  const temp = [];
  for (let i = 0; i < 56; i++) {
    temp.push({
      path: './avatars/' + 1 + '.jfif',
      name: 'Lily',
      gender: 'Female',
      birthday: '2001/01/01',
      address: 'New York, USA',
    });
  }
  return temp;
};

export const getNewFriends = () => {
  const temp = [];
  for (let i = 0; i < 200; i++) {
    temp.push({
      path: './avatars/' + Math.floor(Math.random() * 3 + 1) + '.jpg',
      name: 'Lily',
      gender: 'Female',
      birthday: '2001/01/01',
      address: 'New York, USA',
    });
  }
  return temp;
};

export const PageFriendsSize = 10;
