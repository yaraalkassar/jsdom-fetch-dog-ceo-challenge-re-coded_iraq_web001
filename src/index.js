//new code
function getDog(){
const imgUrl = 'https://dog.ceo/api/breeds/image/random/4';
let imgContainer = document.getElementById('dog-image-container');
 return fetch(imgUrl)
.then(response => response.json())
.then((dogs) => {
      dogs.message.forEach((dog) => {
        image = document.createElement('img');
            image.src = dog;
            imgContainer.appendChild(image);
      })
    })
}
function getBreed() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  return fetch(breedUrl)
  .then(response => response.json())
  .then((breed) => {
       breed.message.forEach((dogBreed) => {
         let breedContainer = document.querySelector('#dog-breeds');
           let breedList = document.querySelector('#breed-dropdown');
let breedListItem = document.createElement('li');
breedListItem.innerHTML = `${dogBreed}`;
breedList.appendChild(breedListItem);






)


       })
     })
}






document.addEventListener('DOMContentLoaded', (event) => {
  getDog();
});
