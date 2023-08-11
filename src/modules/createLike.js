const createLike = async (mealId) => {
    const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/PGGt9gIHEjpHDQFUOxLn/likes', {
      method: 'POST',
      body: JSON.stringify({
        item_id: mealId,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    return response.text();
  };
  
  export default createLike;