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

document.addEventListener("DOMContentLoaded", () => {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  const popups = document.querySelectorAll(".order-popup");
  const closePopupButtons = document.querySelectorAll(".close-popup");

  // Loop untuk setiap tombol "Add to Cart"
  addToCartButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      // Menampilkan popup sesuai dengan indeks tombol yang diklik
      popups[index].style.display = "flex";
    });
  });

  // Loop untuk setiap tombol "Batal"
  closePopupButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      // Menyembunyikan popup sesuai dengan indeks tombol yang diklik
      popups[index].style.display = "none";
    });
  });

  // Menutup popup jika area luar popup diklik
  window.addEventListener("click", (event) => {
    popups.forEach((popup) => {
      if (event.target === popup) {
        popup.style.display = "none";
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Scroll ke posisi yang diinginkan (misalnya 100px dari atas)
  window.scrollTo(0, 50); // Ubah angka sesuai kebutuhan
});sssss

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


