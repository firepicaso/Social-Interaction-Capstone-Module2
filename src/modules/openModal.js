const modal = document.querySelector('.modal');
const modalContainer = document.querySelector('.modal-container');
const closeModal = document.querySelector('.fa-xmark');

const createModal = (data) => {
  modalContainer.classList.add('show');
  modal.innerHTML = '';

  const modalDetails = `
  <img class="meal-image" src="${data.strMealThumb}">
  <h2>${data.strMeal}</h2>
  <h3>Main ingredient: ${data.strCategory}</h3>
  <h3>Cousine: ${data.strArea}</h3>
  <div class="comment-div">
      <h2>Comments</h2>
      <ul class="comment-list"></ul>
  </div>
  <div class="add-comment-div">
      <h2>Add Comment</h2>
      <form class="comment-form" action="">
        <input type="text" id="name" required placeholder="Your name">
        <textarea id="comment" required placeholder="Your comment..."></textarea>
        <button class="button" type="submit">Comment</button>
      </form>
  </div>
  `;
  modal.insertAdjacentHTML('beforeend', modalDetails);
};

const openModal = async (id) => {
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const dataObject = await res.json();
  const data = dataObject.meals;
  createModal(data[0]);
};

//involvement app UID: XHPfnw05OEfRfN8iPO6q

export default openModal;
