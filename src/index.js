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

}


  return fetch(`https://api.github.com/search/users?q=${inputVal.value}`)
    .then((response) => response.json())
    .then((profile) => {
      profile.items.forEach((user) => {
        let listItem = document.createElement("li");
        listItem.innerHTML = `<b>${user.login}</b>
         <div style="margin:20px"> <img src="${user.avatar_url}" alt="avatar" height="150px">
</div>
          <div style="margin:20px">
          <a href="${user.html_url}">Profile Link</a>
          </div>
          <div style="margin:20px">
          <button type="button" class="repo-btn">Click Me to show Repos!</button>
          </div>
          `;
        let btn = listItem.querySelector(".repo-btn");
        btn.addEventListener("click", function () {
          searchRepo(user);
        });
        userList.appendChild(listItem);
      });
      inputVal.value = "";
    });
}






document.addEventListener('DOMContentLoaded', (event) => {
  getDog();
});
