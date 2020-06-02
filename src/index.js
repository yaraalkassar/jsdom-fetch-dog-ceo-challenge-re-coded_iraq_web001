console.log('%c HI', 'color: firebrick');

//new code
document.addEventListener('DOMContentLoaded', (event) => {
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
let imgContainer = document.getElementById('dog-image-container');
fetch(imgUrl)
.then(response => response.json())
.then((dogs) => {
        dogs.forEach((dog) => {
          image = document.createElement('img');
              image.src = dog;
              imageContainer.appendChild(image);
        })
}};
