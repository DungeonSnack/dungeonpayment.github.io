function checkLoginStatus() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const loginButton = document.getElementById("loginButton");

  if (isLoggedIn) {
    // Jika sudah login, ubah tombol menjadi Log Out
    loginButton.textContent = "Log Out";
    loginButton.href = "#"; // Mengosongkan href agar tidak redirect

    loginButton.addEventListener("click", function () {
      // Logika log out
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("token"); // Hapus token dari localStorage
      alert("Logout berhasil");
      window.location.replace("/index.html");
    });
  } else {
    // Jika belum login, tetap Sign In
    loginButton.textContent = "Sign In";
    loginButton.href = "./src/page/login/login.html";
  }
}

// Menjalankan pengecekan login status saat halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
  checkLoginStatus();
});
