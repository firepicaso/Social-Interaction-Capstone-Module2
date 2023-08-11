import './styles.css';
import './Asset/restaurantLogoB.png';
import mealsArray from './modules/displayMeals.js';
import getMeals from './modules/getMeals.js';

window.addEventListener('load', async () => {
  mealsArray(await getMeals());
});
