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




function  fetchDogBreeds(){
  const breedUrl = 'https://dog.ceo/api/breeds/list/all';
return  fetch(breedUrl)
  .then(resp=> resp.json())
  .then(json=>{
    let dogBreedUl = document.querySelector('#dog-breeds');
    let breedDropdown=document.querySelector('#breed-dropdown');
    for (const breed in json['message']){
      let breedLi = document.createElement('li');
      breedLi.innerText = breed;
      dogBreedUl.appendChild(breedLi);

      breedLi.addEventListener('click',()=>{
        breedLi.style.color = 'red';
      })

      breedDropdown.addEventListener('change', (event) =>{
        breedLi.remove();
        if(breedLi.innerText.charAt(0)===event.target.value){

          dogBreedUl.appendChild(breedLi);

        }

      })



    }
  })
}


document.addEventListener('DOMContentLoaded', (e) => {
  getDog();
  //getBreed();
  fetchDogBreeds();
});
