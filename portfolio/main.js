const socialMedia = {
    github: 'wnicolass',
    twitter: 'wNicholasss'
}

function getGitHubUserInfos() {
    const url = `https://api.github.com/users/${socialMedia.github}`;

    fetch(url).then(response => response.json()).then(data => {
        profilePic.src = data.avatar_url;
        userName.textContent = data.name;
        userBio.textContent = data.bio;
        userLink.href = data.html_url;
        userLogin.textContent = data.login;
        userTwitter.textContent = data.twitter_username;
        userLocation.textContent = data.location;
        postsPic.src = data.avatar_url;
    })
}

function getFirstRepositoryInfos() {
    const url = `https://api.github.com/repos/${socialMedia.github}/rocket.q`

    fetch(url).then(response => response.json()).then(data => {
        repositoryLink.href = data.html_url;
        repositoryName.textContent = data.name;
        repositoryDescription.textContent = data.description;
        stargazersCount.textContent = data.stargazers_count;
        forks.textContent = data.forks_count;
        repositoryLanguage.textContent = data.language;
    })
}

function getSecondRepositoryInfos() {
    const url = `https://api.github.com/repos/${socialMedia.github}/doctor-care`;

    fetch(url).then(response => response.json()).then(data => {
        secondRepositoryLink.href = data.html_url;
        secondRepositoryName.textContent = data.name;
        secondRepositoryDescription.textContent = data.description;
        secondStargazersCount.textContent = data.stargazers_count;
        secondForks.textContent = data.forks_count;
        secondRepositoryLanguage.textContent = data.language;
    })
}

getGitHubUserInfos();
getFirstRepositoryInfos();
getSecondRepositoryInfos();