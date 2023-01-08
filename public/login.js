(async () => {
  const userName = localStorage.getItem('userName');
  if (userName) {
    // const nameEl = document.querySelector("#name");
    // nameEl.value = userName;
    // const user = await getUser(nameEl.value);
    // if (user?.authenticated) {
    //      window.location.href = "play.html";
    // }
  }
})();

async function login() {
  const nameEl = document.querySelector('#name');

  const user = await getUser(nameEl.value);
  if (user) {
    console.log('login');
    localStorage.setItem('userName', nameEl.value);
    window.location.href = 'play.html';
  } else {
    console.log('create user');
  }
}

async function getUser(email) {
  let scores = [];
  try {
    // See if we have a user with the given email.
    const response = await fetch(`/api/user/${email}`);
    if (response.status === 200) {
      return response.json();
    }
  } catch {}

  return null;
}
