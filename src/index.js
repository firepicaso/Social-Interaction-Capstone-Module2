import './styles.css';
import mealsArray from './modules/displayMeals.js';
import getMeals from './modules/getMeals.js';

window.addEventListener('load', async () => {
  mealsArray(await getMeals());
});

const openModal = document.querySelector('.comment-button');
const closeModal = document.querySelector('.fa-xmark');
const modal = document.querySelector('.modal');

openModal.addEventListener('click', () => {
  openModal.preventDefault();
  modal.classList.add('show');
});

closeModal.addEventListener('click', () => {
  modal.classList.remove('show');
});
