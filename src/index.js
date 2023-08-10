import './styles.css';
import './Asset/restaurantLogoB.png';
import mealsArray from './modules/displayMeals.js';
import getMeals from './modules/getMeals.js';

window.addEventListener('load', async () => {
  mealsArray(await getMeals());
});

const modal = document.querySelector('.modal');
const openModal = document.querySelector('.comment-button');
const closeModal = document.querySelector('.fa-xmark');

document.addEventListener('click', (event) => {
  const openModal = event.target.closest('.comment-button');
  
  if (openModal) {
    modal.classList.add('show');
  }
});

closeModal.addEventListener('click', () => {
  modal.classList.remove('show');
});

//involvement app UID: XHPfnw05OEfRfN8iPO6q

document.addEventListener('click', async (event) => {
  const openModal = event.target.closest('.comment-button');
  
  if (openModal) {
    modal.classList.add('show');
    
    const itemId = event.target.id;
    console.log(itemId);
    
    // Assuming you have a function to get menu details by itemId
    
    const menuDetails = async () => {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${itemId}`);
      const data = await res.json();
      return data.meals;
    };

    // Populate modal content with menu data
    const mealImage = modal.querySelector('.meal-image');
    const mealName = modal.querySelector('.meal-name');
    const category = modal.querySelector('.category');
    const videoLink = modal.querySelector('.video-link');

    mealImage.src = menuDetails.strMealThumb;
    mealName.textContent = menuDetails.strMeal;
    category.textContent = menuDetails.strCategory;
    videoLink.textContent = menuDetails.strYoutube;
  }
});
