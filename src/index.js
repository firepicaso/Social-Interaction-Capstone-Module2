import './styles.css';
import './Asset/restaurantLogoB.png';
import mealsArray from './modules/displayMeals.js';
import getMeals from './modules/getMeals.js';
import openModal from './modules/openModal.js';

const modalContainer = document.querySelector('.modal-container');
const closeModal = document.querySelector('.fa-xmark');

window.addEventListener('load', async () => {
  mealsArray(await getMeals());
});

document.addEventListener('click', async (event) => {
  const commentButton = event.target.closest('.comment-button');
  
  if (commentButton) {
    const itemId = event.target.id;
    openModal(itemId);
  }
});

closeModal.addEventListener('click', () => {
  modalContainer.classList.remove('show');
});
