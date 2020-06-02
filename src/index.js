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
            image.width= 200;
            imgContainer.appendChild(image);
      })
    })
}




function getBreed() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
   fetch(breedUrl)
   .then(response => response.json())
   .then(dogs => {
     let breedList = document.querySelector('#dog-breeds');
     let breedDropdown = document.querySelector('#breed-dropdown');
     for (const dogBreed in dogs.message){
       let breed = document.createElement('li');
       breed.classList.add('breed')
       breed.innerText = dogBreed;
       breedList.appendChild(breed);
       breed.addEventListener('click', () => breed.style.color = 'red')

       breedDropdown.addEventListener('change', (event) => {
         breed.remove();
         if (breed.innerText.charAt(0) == event.target.value){
           breedList.appendChild(breed);
         }
       })
     }
   })
}

document.addEventListener('DOMContentLoaded', (e) => {
  getDog();
  getBreed();
});
