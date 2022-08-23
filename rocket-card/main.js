const card = document.querySelector(".card");
const button = document.querySelector("#changeBackgroundButton");

function changeBackgroundColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  card.style.borderColor = `rgb(${red}, ${green}, ${blue})`;
}

function gitHubApi() {
  const url = `http://api.github.com/users/wnicolass`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      userLogin.textContent = data.login;
      userAvatar.src = data.avatar_url;
      followers.textContent = data.followers;
      following.textContent = data.following;
      repositories.textContent = data.public_repos;
      userLocation.textContent = data.location;
    });
}

gitHubApi();
