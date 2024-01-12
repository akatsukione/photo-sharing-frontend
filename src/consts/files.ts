export const getData = () => {
  const temp = [];
  for (let i = 0; i < 23; i++) {
    temp.push({
      photo: {
        path: './photos/' + i + '.jpg',
        uploader: 'Bruce',
        title: 'Cute Cat',
        status: 'public',
        description: 'Hello',
        tags: 'AI',
      },
      like: Math.ceil(Math.random() * 20),
    });
  }
  return temp;
};

export const PageSize = 9;
