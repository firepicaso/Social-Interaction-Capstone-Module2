const getLikes = async () => {
  const response = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/PGGt9gIHEjpHDQFUOxLn/likes',
  );
  return response.json();
};

export default getLikes;