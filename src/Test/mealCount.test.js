import mealCounter from '../modules/mealcounter.js';

describe('Returns number of items on the homepage', () => {
  it('returns 0 if the meals array is empty', () => {
    const mealsArray = [];
    expect(mealCounter(mealsArray)).toBe(0);
  });

  it('returns the number of meals in the mealsArray ', () => {
    const mealsArray = [
      {
        strMeal: 'Soup',
        strMealThumb: 'https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg',
        idMeal: '52309',
      },
    ];
    expect(mealCounter(mealsArray)).toBe(1);
  });
});