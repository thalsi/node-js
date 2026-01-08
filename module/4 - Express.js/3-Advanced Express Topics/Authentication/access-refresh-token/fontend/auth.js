const API = 'http://localhost:3000';
let accessToken = localStorage.getItem('accessToken');

// 🔐 Login
async function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const res = await fetch(API + '/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();
  if (!res.ok) {
    document.getElementById('msg').innerText = data.message;
    return;
  }

  localStorage.setItem('accessToken', data.accessToken);
  window.location = 'profile.html';
}

// 👤 Load profile
async function loadProfile() {
  let res = await fetch(API + '/profile', {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('accessToken')
    },
    credentials: 'include'
  });

  if (res.status === 403) {
    await refreshToken();
    return loadProfile();
  }

  const data = await res.json();
  document.getElementById('profile').innerText =
    JSON.stringify(data, null, 2);
}

// 🔄 Refresh token
async function refreshToken() {
  const res = await fetch(API + '/refresh', {
    method: 'POST',
    credentials: 'include'
  });

  const data = await res.json();
  localStorage.setItem('accessToken', data.accessToken);
}

// Auto load profile
if (window.location.pathname.includes('profile')) {
  loadProfile();
}
