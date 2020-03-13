// STEP 3: Create Article cards.
// -----------------------
//
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function newCard(obj) {
  // define new elements
  const card = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imgContainer = document.createElement('div');
  const authorsImg = document.createElement('img');
  const authorsName = document.createElement('span');

  // setting up the structure
  // imgContainer.appendChild(authorsImg, authorsName);
  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(authorsImg);
  imgContainer.appendChild(authorsName);

  // add the classes to the elements
  card.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imgContainer.classList.add('img-container');

  // set text content
  headline.textContent = obj.headline;
  authorsImg.src = obj.authorPhoto;
  authorsName.textContent = obj.authorName;

  return card;
}

const containerTwo = document.querySelector('.cards-container');

axios
  .get('https://lambda-times-backend.herokuapp.com/articles')
  .then(function(response) {
    // handle success
    console.log(response);
    const articles = response.data.articles;
    const articleKeys = Object.keys(articles);

    articleKeys.forEach(key => {
      articles[key].forEach(item => {
        containerTwo.appendChild(newCard(item));
      });
    });
  })
  .catch(function(error) {
    // handle error
    console.log(error);
  });
