const postComment = async (data) => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/PGGt9gIHEjpHDQFUOxLn/comments';
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return res.ok;
};

export default postComment;