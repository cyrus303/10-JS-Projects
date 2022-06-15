const form = document.getElementById('form');

const APIURL = 'https://api.github.com/users/';
const REPOSURL = 'https://api.github.com/users/cyrus303/repos';

async function getUser(username) {
  const resp = await fetch(APIURL + username);
  const respData = await resp.json();

  // console.log(respData);

  const RepoResp = await fetch(APIURL + `${username}/repos`);
  const RepoRespData = await RepoResp.json();
  console.log(RepoRespData);
  createUserCard(respData, RepoRespData);
}

function createUserCard(username, RepoRespData) {
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
    </div>
    </div>


`;
    {
      /* <div class='repo-container'>
    
<ul class="repos" id="repos">
<li>${RepoRespData.name}</li>
<li>python</li>
<li>mongoDB</li>
<li>sql</li>

</ul>
</div> */
    }
  } else {
    cardHTML = `
      <div class="invalid-user">
      <p>Please enter a valid username</p>
    </div>
    `;
  }

  main.innerHTML = cardHTML;
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

// function createRepos(RepoRespData) {
//   RepoRespData.forEach((repo) => {
//     const repoDetails = document.createElement('div');
//     repoDetails.classList.add('repo-container');

//     repoDetails.innerHTML = `

//     <ul class="repos" id="repos">
//     <li>javascript</li>
//     <li>python</li>
//     <li>mongoDB</li>
//     <li>sql</li>

//   </ul>
//   `;
//     main.appendChild(repoDetails);
//   });
// }
