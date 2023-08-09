import './styles.css';

fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=chinese')
  .then((res) => res.json())
  .then((data) => {
    const mealsArray = data.meals;
    const mealCounter = data.meals.length;
    document.querySelector('nav').insertAdjacentHTML('beforeend', mealCounter);

    mealsArray.forEach((meal) => {
      const menuContainer = document.querySelector('.menu-container');
      const menucard = document.createElement('div');
      menucard.classList.add('menu-card');
      const mealItem = `  <img src="${meal.strMealThumb}"/>
      <div class="menu-title">
          <h2>${meal.strMeal}</h2>
          <i class="fa-regular fa-heart" style="color: #feae01;"></i>
      </div>
      <h3 class="like-counter"> 10 Likes</h3>
      <button>Comment</button>`;
      menucard.insertAdjacentHTML('beforeend', mealItem);
      menuContainer.appendChild(menucard);
    });
  }).catch(
    (error) => console.log(error),
  );