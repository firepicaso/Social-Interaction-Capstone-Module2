import countComments from '../modules/countComments.js';

describe('test comment count function', () => {
  test('test number of comments from the API', () => {
    const comment = [
      {
        comment: 'Yummy',
        creation_date: '2023-1-08',
        username: 'Fatma',
      },
      {
        comment: 'Favourite',
        creation_date: '2023-12-09',
        username: 'Newton',
      },
      {
        comment: 'Lovely',
        creation_date: '2023-1-13',
        username: 'Mustakim',
      },
    ];
    expect(countComments(comment)).toBe(3);
  });
});
