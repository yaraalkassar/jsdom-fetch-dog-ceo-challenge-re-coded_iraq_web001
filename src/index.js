//new code
function getDog(){
const imgUrl = 'https://dog.ceo/api/breeds/image/random/4';
let imgContainer = document.getElementById('dog-image-container');
 return fetch(imgUrl)
.then(response => response.json())
.then(dogs => {
      dogs.message.forEach((dog) => {
        image = document.createElement('img');
            image.src = dog;
            imgContainer.appendChild(image);
      })
    })
}
function getBreed() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all';
  return fetch(breedUrl)
  .then(response => response.json())
  .then(dog => { 
      dog.message.forEach((dogBreed) => {
         console.log(dogBreed);
         let breedContainer = document.querySelector('#dog-breeds');
           let breedList = document.querySelector('#breed-dropdown');
let breedListItem = document.createElement('li');
breedListItem.innerHTML = dogBreed;
breedList.appendChild(breedListItem);
breedList.addEventListener('click',()=>{
        breedList.style.color = 'red';
      })
       })
     })
}

document.addEventListener('DOMContentLoaded', (event) => {
  getDog();
  getBreed();
});
