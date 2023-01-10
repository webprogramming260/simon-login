(async () => {
  const userName = localStorage.getItem('userName');
  if (userName) {
    const nameEl = document.querySelector('#userName');
    nameEl.value = userName;
    const user = await getUser(nameEl.value);
    if (user?.authenticated) {
      setDisplay('loginControls', 'none');
      setDisplay('playControls', 'block');
    } else {
      setDisplay('loginControls', 'block');
      setDisplay('playControls', 'none');
    }
  }
})();

async function login() {
  const userNameEl = document.querySelector('#userName');
  const user = await getUser(userNameEl.value);
  if (user) {
    console.log('login user');

    localStorage.setItem('userName', userNameEl.value);
    window.location.href = 'play.html';
  } else {
    console.log('create user');
  }
}

function play() {
  window.location.href = 'play.html';
}

function logout() {
  fetch(`/api/auth/logout`, {
    method: 'delete',
  }).then(() => (window.location.href = '/'));
}

async function getUser(email) {
  let scores = [];
  // See if we have a user with the given email.
  const response = await fetch(`/api/user/${email}`);
  if (response.status === 200) {
    return response.json();
  }

  return null;
}

function setDisplay(controlId, display) {
  const playControlEl = document.querySelector(`#${controlId}`);
  if (playControlEl) {
    playControlEl.style.display = display;
  }
}
