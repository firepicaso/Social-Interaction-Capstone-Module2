import ModalData from './modal.js';
import createLike from './createLike.js';
import getLikes from './getLikes.js';
import countComments from './countComments.js';


const menuContainer = document.querySelector('.menu-container');

const likesCount = (target, likesArray, numOfLikes) => {
  likesArray.forEach((obj) => {
    if (obj.item_id === target.id) {
      numOfLikes.innerHTML = `${obj.likes} likes`;
    }
  });
};

const mealsArray = async (data) => {
  const mealCounter = data.length;
  document.querySelector('nav').insertAdjacentHTML('beforeend', `(${mealCounter})`);

  for (let i = 0; i <= data.length - 1; i += 1) {
    const menucard = document.createElement('div');

    menucard.classList.add('menu-card');
    const mealItem = `  <img src="${data[i].strMealThumb}"/>
      <div class="menu-title">
          <h2>${data[i].strMeal}</h2>
          <i class="fa-regular fa-heart" id="${data[i].idMeal}"></i>
      </div>
      <h3 class="like-counter"> 0 Likes</h3>
      <button class="comment-btn">Comment</button>`;
    menucard.insertAdjacentHTML('beforeend', mealItem);
    menuContainer.appendChild(menucard);

    const likeButton = menucard.querySelector('.fa-heart');
    const numOfLikes = menucard.querySelector('.like-counter');
    const likesArray = await getLikes();

    likesCount(likeButton, likesArray, numOfLikes);

    likeButton.addEventListener('click', async (event) => {
      await createLike(likeButton.id);
      const newLikes = await getLikes();
      likesCount(event.target, newLikes, numOfLikes);
    });

    const commentBtn = menucard.querySelector('.comment-btn');
    commentBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      const mealId = data[i].idMeal;
      await ModalData(mealId);
    });
  }
};

export default mealsArray;