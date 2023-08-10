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
