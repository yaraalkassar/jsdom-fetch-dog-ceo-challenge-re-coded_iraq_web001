//new code
function getDog(){
const imgUrl = 'https://dog.ceo/api/breeds/image/random/4';
let imgContainer = document.getElementById('dog-image-container');
 return fetch(imgUrl)
.then(response => response.json())
.then((dogs) => {
      dogs.forEach((dog) => {
        image = document.createElement('img');
            image.src = dog;
            imageContainer.appendChild(image);
      })
    })
}
function getBreed() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  return fetch(breedUrl)
  .then(response => response.json())
  .then((breed) => {
       breed.forEach((dogBreed) => {

       })
     })
}







document.addEventListener('DOMContentLoaded', (event) => {
  getDog();
});
