const form = document.getElementById('form');

const APIURL = 'https://api.github.com/users/';
const REPOSURL = 'https://api.github.com/users/cyrus303/repos';

async function getUser(username) {
  const resp = await fetch(APIURL + username);
  const respData = await resp.json();

  createUserCard(respData);
  getRepos(username);
}

async function getRepos(username) {
  const RepoResp = await fetch(APIURL + username + '/repos');
  const RepoRespData = await RepoResp.json();

  addReposToCard(RepoRespData);
}

function createUserCard(username) {
  if (username.name) {
    var cardHTML = `
    <div class="container">
    <div class="img-container">
      <img
        src="${username.avatar_url}"
        alt="User Image"
      />
    </div>
    <div class="user-info">
      <h2>${username.name}</h2>
      <small>${username.company}</small>
      <p>
        ${username.bio}
      </p>
      <ul>
        <li>${username.public_repos} <strong>Repos</strong></li>
        <li>${username.followers} <strong>followers</strong></li>
        <li>${username.following} <strong>following</strong></li>
      </ul>
      <div class='repos' id='repos'></div>
    </div>
    </div>`;
  } else {
    cardHTML = `
      <div class="invalid-user">
      <p>Please enter a valid username</p>
    </div>
    `;
  }

  main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
  const reposEl = document.getElementById('repos');
  console.log(repos);
  repos.slice(0, 9).forEach((repo) => {
    const repoEl = document.createElement('a');
    repoEl.classList.add('repo');

    repoEl.href = repo.html_url;
    repoEl.target = '_blank';
    repoEl.innerHTML = repo.name;

    reposEl.appendChild(repoEl);
  });
}

getUser('cyrus303');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = search.value;
  console.log(username);

  if (username) {
    getUser(username);
    search.value = '';
  }
});
