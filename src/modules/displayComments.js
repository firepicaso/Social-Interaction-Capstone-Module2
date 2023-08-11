import countComments from "./countComments";

const displayComments = async (item) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/PGGt9gIHEjpHDQFUOxLn/comments?item_id=${item.idMeal}`;
  let myComment = await fetch(url).then((response) => response.json());

  const commentsContainer = document.querySelector('.comment-list');
  commentsContainer.innerHTML = '';
  const commentCount = document.querySelector('.count-comment')
  commentCount.innerHTML = `Comments (${countComments(myComment)})`;
  if (!myComment.length) myComment = [];
  myComment.forEach((comment) => {
    const newComment = document.createElement('li');
    newComment.innerHTML = `${comment.creation_date} ${comment.username}: ${comment.comment}`;
    commentsContainer.appendChild(newComment);
  });
};

export default displayComments;