const meals = document.getElementById('meals');
const favouriteContainer = document.getElementById('fav-meals');

getRandomMeal();
fetchFavMeals();

async function getRandomMeal() {
  const response = await fetch(
    'https://www.themealdb.com/api/json/v1/1/random.php'
  );
  const responseData = await response.json();
  const randomMeal = responseData.meals[0];
  //   console.log(randomMeal);

  addMeal(randomMeal, true);
}

async function getMealById(mealId) {
  const resp = await fetch(
    'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + mealId
  );
  const respData = await resp.json();
  // console.log(respData);
  const meal = respData.meals[0];
  return meal;
}

async function getMealsBySearch(item) {
  const meals = await fetch(
    'https://www.themealdb.com/api/json/v1/1/search.php?s=' + item
  );
}

function addMeal(mealData, random = false) {
  // console.log(mealData);
  const meal = document.createElement('div');
  meal.classList.add('meal');
  meal.innerHTML = `<div class="meal-header">
     ${random ? `<span class="random">Random Recipe</span> ` : ''}
      <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}">
    </div>
    <div class="meal-body">
      <h4>${mealData.strMeal}</h4>
      <button class="fav-btn">
        <i class="fas fa-heart"></i>
      </button>
    </div>`;

  meal.querySelector('.meal-body .fav-btn').addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) {
      removeMealLS(mealData.idMeal);
      e.target.classList.remove('active');
    } else {
      addMealsLS(mealData.idMeal);
      e.target.classList.add('active');
    }

    favouriteContainer.innerHTML = '';
    fetchFavMeals();
  });
  meals.appendChild(meal);
}

function removeMealLS(mealId) {
  const mealIds = getMealsLS();
  localStorage.setItem(
    'mealIds',
    JSON.stringify([mealIds.filter((id) => id !== mealId)])
  );
}

function addMealsLS(mealId) {
  const mealIds = getMealsLS();
  let totalMeals = [...mealIds, mealId];
  localStorage.setItem('mealIds', JSON.stringify(totalMeals));
}

// function getMealsLS() {
//   const mealIds = JSON.parse(localStorage.getItem('mealIds'));
//   console.log(mealIds);
//   // return mealIds;
//   return mealIds === null ? 0 : mealIds;
// }

function getMealsLS() {
  const mealIds = JSON.parse(localStorage.getItem('mealIds'));
  console.log(mealIds);
  return mealIds === null ? [] : mealIds;
  // todo: bug in returing value, if its null, the local storage breaks after few itteration
}

async function fetchFavMeals() {
  const mealIds = getMealsLS();
  // console.log(mealIds);
  const meals = [];
  for (let i = 0; i < mealIds.length; i++) {
    const mealId = mealIds[i];
    meal = await getMealById(mealId);
    addMealToFav(meal);
  }
  // add them to the screen
}

function addMealToFav(mealData) {
  // console.log(mealData);
  const favMeal = document.createElement('li');

  favMeal.innerHTML = `<li><img src="${mealData.strMealThumb}" alt="${mealData.strMeal}"><span>${mealData.strMeal}</span></li>`;

  favouriteContainer.appendChild(favMeal);
}

// !stopped at 2:27:33 of the video
// !https://www.youtube.com/watch?v=dtKciwk_si4
