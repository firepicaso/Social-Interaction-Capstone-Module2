import postComment from './postComment.js';
import displayComments from './displayComments.js';

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
      <h2 class="cook">How to cook: <a class="ytlink" href = "${data.strYoutube}" target="_blank">Instruction Video Link</a></h2>      
      <div>      
          <h3>Comments</h3>
          <div class="comment-div">
              <ul class="comment-list">
                 </ul>
          </div>
      </div>  
      <h3>Add a comment</h3>
      <form id="form" class="comment-form" action="">
          <input type="text" id="name" name="name" required placeholder="Your name">
          <textarea id="comment"  name="comment" required placeholder="Your comment..."></textarea>
          <button  class="addComment" type="submit">Comment</button>
      </form>`;
  body.appendChild(popDiv);
  popDiv.appendChild(popup);

  const closeButton = popup.querySelector('.popup-close');
  closeButton.addEventListener('click', () => {
    popDiv.removeChild(popup);
    body.removeChild(popDiv);
  });

  const addComment = document.querySelector('.addComment');
  addComment.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.querySelector('#name').value;
    const comment = document.querySelector('#comment').value;
    const itemId = data.idMeal;
    const newData = {
      item_id: itemId,
      username,
      comment,
    };
    postComment(newData);
    document.querySelector('#name').value = '';
    document.querySelector('#comment').value = '';
  });
  displayComments(data);
};

const openModal = async (id) => {
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const dataObject = await res.json();
  const data = dataObject.meals;
  ModalData(data[0]);
};
export default openModal;
