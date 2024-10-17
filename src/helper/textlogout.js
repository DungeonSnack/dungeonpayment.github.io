document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('loginButton');
  
    // Check if the user is logged in
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
  
    // Update the button text based on the login state
    updateLoginButton(isLoggedIn);
  
    // Event listener for login/logout
    loginButton.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent the default link action
  
      if (isLoggedIn) {
        // Log out the user
        localStorage.setItem('loggedIn', 'false');
        updateLoginButton(false);
        alert('Logged out successfully!');
      } else {
        // Simulate login (you can add your login logic here)
        localStorage.setItem('loggedIn', 'true');
        updateLoginButton(true);
        alert('Logged in successfully!');
      }
    });
  
    function updateLoginButton(loggedIn) {
      if (loggedIn) {
        loginButton.textContent = 'Logout';
        loginButton.setAttribute('href', '#'); // Prevent navigation
      } else {
        loginButton.textContent = 'Sign In';
        loginButton.setAttribute('href', './src/page/login/login.html'); // Set back to login page
      }
    }
  });
  