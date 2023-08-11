import './styles.css';
import './Asset/restaurantLogoB.png';
import mealsArray from './modules/displayMeals.js';
import getMeals from './modules/getMeals.js';
import openModal from './modules/openModal.js';

window.addEventListener('load', async () => {
  mealsArray(await getMeals());
});

document.addEventListener('click', async (event) => {
  const commentButton = event.target.closest('.comment-button');
  const itemId = event.target.id;
  openModal(itemId);
});
