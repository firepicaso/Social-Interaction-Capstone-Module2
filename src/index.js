import './styles.css';
import mealsArray from './modules/displayMeals.js';
import getMeals from './modules/getMeals.js';

window.addEventListener('load', async () => {
  mealsArray(await getMeals());
});

const modal = document.querySelector('.modal');
const openModal = document.querySelector('.comment-button-test');
const closeModal = document.querySelector('.fa-xmark');

openModal.addEventListener('click', () => {
  // openModal.preventDefault();
  modal.classList.add('show');
});

closeModal.addEventListener('click', () => {
  modal.classList.remove('show');
});
