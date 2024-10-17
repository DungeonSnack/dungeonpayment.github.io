function changeToLogout() {
    const loginButton = document.getElementById("loginButton");
    
    // Ubah tulisan tombol menjadi Log Out dan ubah href agar log out saat diklik
    loginButton.textContent = "Log Out";
    loginButton.href = "#";  // Hilangkan link saat Log Out
    
    // Tambahkan event listener untuk logout
    loginButton.addEventListener("click", function(event) {
        event.preventDefault();
        logout();
    });
}

function logout() {
    // Proses log out
    alert("Anda telah berhasil log out");

    // Ubah kembali tombol menjadi Sign In dan kembalikan href
    const loginButton = document.getElementById("loginButton");
    loginButton.textContent = "Sign In";
    loginButton.href = "./src/page/login/login.html";  // Kembalikan ke halaman login

    // Hapus status login dari localStorage
    localStorage.removeItem("isLoggedIn");

    // Redirect ke halaman lain setelah log out (optional)
    window.location.replace("/index.html");
}

// Cek apakah pengguna sudah login sebelumnya
window.onload = function() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
        // Jika sudah login, ubah tombol menjadi Log Out
        changeToLogout();
    }
};