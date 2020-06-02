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
  const breedUrl = 'https://dog.ceo/api/breeds/list/all';
  return fetch(breedUrl)
  .then(response => response.json())
  then(dogs => {
    let breedList = document.querySelector('#dog-breeds');
    let breedDropdownList=document.querySelector('#breed-dropdown');
        dogs.message.forEach((dogBreed) => {
         console.log(dogBreed);

let breedListItem = document.createElement('li');
breedListItem.innerText  = dogBreed;
breedList.appendChild(breedListItem);
breedList.addEventListener('click',()=>{
        breedListItem.style.color = 'red';
      })

      breedDropdownList.addEventListener('change', (event) => {
          dogBreed.remove();
          if (dogBreed.innerText.charAt(0) == event.target.value){
            breedList.appendChild(dogBreed);
          }
        })

            })


       })
}

document.addEventListener('DOMContentLoaded', (e) => {
  getDog();
  getBreed();
});
