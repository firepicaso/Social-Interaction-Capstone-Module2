import ModalData from './modal.js';

const menuContainer = document.querySelector('.menu-container');

const mealsArray = async (data) => {
  const mealCounter = data.length;
  document.querySelector('nav').insertAdjacentHTML('beforeend', mealCounter);

  for (let i = 0; i <= data.length - 1; i += 1) {
    const menucard = document.createElement('div');

    menucard.classList.add('menu-card');
    const mealItem = `  <img src="${data[i].strMealThumb}"/>
      <div class="menu-title">
          <h2>${data[i].strMeal}</h2>
          <i class="fa-regular fa-heart" style="color: #feae01;"></i>
      </div>
      <h3 class="like-counter"> 10 Likes</h3>
      <button class="comment-btn">Comment</button>`;
    menucard.insertAdjacentHTML('beforeend', mealItem);
    menuContainer.appendChild(menucard);

    const commentBtn = menucard.querySelector('.comment-btn');
    commentBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      const mealId = data[i].idMeal;
      await ModalData(mealId);
    });
  }
};

export default mealsArray;