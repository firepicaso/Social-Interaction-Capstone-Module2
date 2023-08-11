const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.fa-xmark');

const createModal = (data) => {
  modal.classList.add('show');

  modal.innerHTML = `
  <div><i class="fa-solid fa-xmark"></i></div>  
  <img class='.meal-image' src='${data.strMealThumb}'>
  <h2>${data.strMeal}</h2>
  <h2>${data.strCategory}</h2>
  <h2>${data.strCategory}</h2>
  <a class="video-link" href="${data.strYoutube}"></a>
  <div>
      <h3>Add Comment</h3>
      <div class="comment-div">
        <ul class="comment-list"></ul>
      </div>
      <form class="comment-form" action="">
        <input type="text" id="name" required placeholder="Your name">
        <textarea id="comment" required placeholder="Your comment..."></textarea>
        <button class="button" type="submit">Comment</button>
      </form>
  </div>
  `;

  closeModal.addEventListener('click', () => {
    modal.classList.remove('show');
  });
};

const openModal = async (id) => {
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const dataObject = await res.json();
  const data = dataObject.meals[0];
  createModal(data);
};

//involvement app UID: XHPfnw05OEfRfN8iPO6q

export default openModal;
