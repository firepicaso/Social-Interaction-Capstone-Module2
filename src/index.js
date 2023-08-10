import './styles.css';
import './Asset/restaurantLogoB.png';
import mealsArray from './modules/displayMeals.js';
import getMeals from './modules/getMeals.js';

window.addEventListener('load', async () => {
  mealsArray(await getMeals());
});

const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.fa-xmark');

closeModal.addEventListener('click', () => {
  modal.classList.remove('show');
});

const menuDetails = async (id) => {
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const data = await res.json();
  console.log(data.meals[0]);
  return data.meals[0];
};

document.addEventListener('click', async (event) => {
  const openModal = event.target.closest('.comment-button');
  
  if (openModal) {
    modal.classList.add('show');

    const itemId = event.target.id;
    console.log(itemId);

    menuDetails(itemId);
    
    // Populate modal content with menu data
    // const mealImage = modal.querySelector('.meal-image');
    const mealName = modal.querySelector('.meal-name');
    const category = modal.querySelector('.category');
    const videoLink = modal.querySelector('.video-link');

    // mealImage.src = menuDetails.strMealThumb;
    mealName.textContent = menuDetails.strMeal;
    category.textContent = menuDetails.strCategory;
    videoLink.textContent = menuDetails.strYoutube;
  }
});

//involvement app UID: XHPfnw05OEfRfN8iPO6q
