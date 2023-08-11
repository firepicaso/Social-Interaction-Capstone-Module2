const body = document.querySelector('body');
const ModalData = async (data) => {
  const popDiv = document.createElement('div');
  const popup = document.createElement('div');
  popDiv.className = 'main-pop';
  popup.className = 'modal';
  popup.innerHTML = `  <i class="fa-solid fa-xmark popup-close"></i>
      <img src="${data.strMealThumb}" alt="">
      <div class="details">
      <h2 class="meal-name"><span>Meal Name:</span>  ${data.strMeal}</h2>
      <h2 class="category"><span>Category:</span> ${data.strCategory}</h2>
      </div>
      <h2 class="cook">How to cook: <a class="ytlink" href = "${data.strYoutube}">Instruction Video Link</a></h2>
      
      <div>
          <h3>Comments</h3>
          <div class="comment-div">
              <ul class="comment-list">
                  <li>comment 1</li>
                  <li>comment 2</li>
                  <li>comment 3</li>
              </ul>
          </div>
      </div>
      <form class="comment-form" action="">
          <input type="text" id="name" required placeholder="Your name">
          <textarea id="comment" required placeholder="Your comment..."></textarea>
          <button class="button" type="submit">Comment</button>
      </form>`;
  body.appendChild(popDiv);
  popDiv.appendChild(popup);

  const closeButton = popup.querySelector('.popup-close');
  closeButton.addEventListener('click', () => {
    popDiv.removeChild(popup);
    body.removeChild(popDiv);
  });
};
const openModal = async (id) => {
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const dataObject = await res.json();
  const data = dataObject.meals;
  ModalData(data[0]);
};
export default openModal;
