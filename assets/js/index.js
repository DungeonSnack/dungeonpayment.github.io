const swiper = new Swiper(".swiper", {
  // Optional parameters=
  loop: true,
  autoplay: {
    delay: 3000,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


document.addEventListener("DOMContentLoaded", function () {
  // Scroll ke posisi yang diinginkan (misalnya 100px dari atas)
  window.scrollTo(0, 50); // Ubah angka sesuai kebutuhan
});

function toggleDescription(id) {
  var desc = document.getElementById("desc" + id);
  var toggleBtn = document.getElementById("toggle-btn" + id);

  if (desc.style.webkitLineClamp === "3") {
      desc.style.webkitLineClamp = "unset"; // Menampilkan seluruh teks
      toggleBtn.innerText = "Lihat lebih sedikit";
  } else {
      desc.style.webkitLineClamp = "3"; // Membatasi kembali ke 3 baris
      toggleBtn.innerText = "Lihat lebih banyak";
  }
}

// Simulasi status login, ubah menjadi true jika pengguna sudah login
var isLoggedIn = false;

function checkLogin() {
    if (!isLoggedIn) {
        console.log("Anda harus login terlebih dahulu untuk memesan.");
        alert("Silakan login terlebih dahulu untuk memesan.");
    } else {
        // Jika sudah login, proses pemesanan bisa dilanjutkan
        console.log("Proses pemesanan...");
        alert("Pemesanan berhasil!");
        // Tambahkan kode pemesanan di sini
    }
}


