// Fungsi untuk memeriksa apakah user telah login atau belum
function checkLoginStatus() {
    // Misalnya, kita menggunakan localStorage untuk menyimpan status login
    // Anda bisa menggantinya dengan mekanisme autentikasi Anda (contohnya session atau cookie)
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    // Jika user telah login (contohnya localStorage isLoggedIn di-set "true")
    if (isLoggedIn === "true") {
        // Sembunyikan tombol Sign In
        document.getElementById("sign-in-btn").style.display = "none";

        // Tampilkan foto profil
        document.getElementById("profile-section").style.display = "block";
    } else {
        // Jika belum login, tampilkan tombol Sign In dan sembunyikan foto profil
        document.getElementById("sign-in-btn").style.display = "block";
        document.getElementById("profile-section").style.display = "none";
    }
}

// Fungsi untuk simulasi login
function login() {
    // Saat user login, set localStorage atau mekanisme autentikasi Anda
    localStorage.setItem("isLoggedIn", "true");

    // Bisa juga menyimpan nama pengguna atau foto profil
    localStorage.setItem("profilePicture", "user-profile.jpg");  // Path gambar profil

    // Panggil ulang fungsi untuk memperbarui UI
    checkLoginStatus();
}

// Fungsi untuk simulasi logout
function logout() {
    // Saat user logout, hapus status login dari localStorage
    localStorage.removeItem("isLoggedIn");

    // Panggil ulang fungsi untuk memperbarui UI
    checkLoginStatus();
}

// Memastikan ketika halaman dimuat, status login diperiksa
window.onload = checkLoginStatus;
