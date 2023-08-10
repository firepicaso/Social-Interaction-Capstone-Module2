const mealsArray = async (data) => {
  const mealCounter = data.length;
  document.querySelector('nav').insertAdjacentHTML('beforeend', mealCounter);

  data.forEach((meal) => {
    const menuContainer = document.querySelector('.menu-container');
    const menucard = document.createElement('div');
    menucard.classList.add('menu-card');
    const mealItem = `  <img src="${meal.strMealThumb}"/>
      <div class="menu-title">
          <h2>${meal.strMeal}</h2>
          <i class="fa-regular fa-heart" style="color: #feae01;"></i>
      </div>
      <h3 class="like-counter"> 10 Likes</h3>
      <button class="comment-button">Comment</button>`;
    menucard.insertAdjacentHTML('beforeend', mealItem);
    menuContainer.appendChild(menucard);
  });
};

export default mealsArray;
