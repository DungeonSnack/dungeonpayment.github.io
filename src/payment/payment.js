

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


// // Fungsi untuk menginisialisasi observer
// function onIntersection(entries, observer) {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('visible'); // Tambahkan kelas visible saat elemen masuk viewport
//             observer.unobserve(entry.target); // Hentikan observasi setelah animasi berjalan
//         }
//     });
// }

// // Inisialisasi Intersection Observer
// const observer = new IntersectionObserver(onIntersection, {
//     threshold: 0.5 // Memastikan 50% dari elemen terlihat sebelum memicu animasi
// });

// // Pilih elemen .hero-image dan observe
// const heroImage = document.querySelector('.hero-image');
// observer.observe(heroImage);


// Fungsi untuk menginisialisasi observer
function onIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Tambahkan kelas visible saat elemen terlihat
            observer.unobserve(entry.target); // Hentikan observasi untuk elemen ini
        }
    });
}

// Inisialisasi Intersection Observer
const observer = new IntersectionObserver(onIntersection, {
    threshold: 0.5 // Memastikan 50% dari elemen terlihat sebelum memicu animasi
});

// Pilih semua elemen dengan class 'transition-element-right' dan 'clients-logos'
const transitionElements = document.querySelectorAll('.transition-element-right, .transition-element-left, .transition-element-down, .transition-element-up');

// Terapkan observer pada setiap elemen
transitionElements.forEach(element => {
    observer.observe(element);
});

document.querySelectorAll('.faq-question').forEach((item) => {
    item.addEventListener('click', () => {
        const parent = item.parentElement;
        const answer = parent.querySelector('.faq-answer');

        if (parent.classList.contains('active')) {
            // Close the FAQ
            answer.style.maxHeight = null;
        } else {
            // Open the FAQ
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }

        parent.classList.toggle('active');

        // Change the icon based on the active state
        const icon = item.querySelector('.icon');
        icon.textContent = parent.classList.contains('active') ? '▲' : '▼';
    });
});


