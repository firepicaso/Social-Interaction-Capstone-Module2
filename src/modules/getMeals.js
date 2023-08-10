const getMeals = async () => {
  const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=chinese');
  const data = await res.json();
  return data.meals;
};

export default getMeals;
