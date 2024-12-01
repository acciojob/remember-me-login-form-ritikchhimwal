//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const checkbox = document.getElementById('checkbox');
  const submitButton = document.getElementById('submit');
  const existingButton = document.getElementById('existing');

  // Check if credentials are stored in localStorage
  const savedUsername = localStorage.getItem('username');
  const savedPassword = localStorage.getItem('password');

  if (savedUsername && savedPassword) {
    existingButton.style.display = 'block';
    existingButton.addEventListener('click', () => {
      alert(`Logged in as ${savedUsername}.`);
    });
  }

  document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission

    const username = usernameInput.value;
    const password = passwordInput.value;

    if (checkbox.checked) {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
    } else {
      localStorage.removeItem('username');
      localStorage.removeItem('password');
    }

    alert(`Logged in as ${username}.`);

    // Show the "Login as existing user" button if credentials are stored
    if (localStorage.getItem('username') && localStorage.getItem('password')) {
      existingButton.style.display = 'block';
    }
  });
});
