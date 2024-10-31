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



var defaultLayers = platform.createDefaultLayers();
var map = new H.Map(
  document.getElementById("mapContainer"),
  defaultLayers.vector.normal.map,
  {
    center: { lat: 49.2827, lng: -123.1207 }, // Vancouver, BC example
    zoom: 10,
  }
);

var marker = new H.map.Marker({ lat: 49.2827, lng: -123.1207 });
map.addObject(marker);

// Fungsi untuk mengecek login
function checkLogin() {
  var isLoggedIn = false; // Set ini dengan logika yang sebenarnya, misalnya dari sesi atau cookie

  if (!isLoggedIn) {
    // Tampilkan modal jika belum login
    tampilkanModal();
  } else {
    // Jika sudah login, arahkan ke halaman pemesanan atau lakukan pemesanan
    window.location.href = "/pesan";
  }
}

// Fungsi untuk menampilkan modal dengan transisi smooth
function tampilkanModal() {
  var modal = document.getElementById("modalAlert");
  var tutupModalBtn = document.getElementById("tutupModal");

  // Tampilkan modal dan atur display terlebih dahulu
  modal.style.display = "flex";

  // Tambahkan kelas 'modal-show' untuk menampilkan modal dengan transisi
  setTimeout(function () {
    modal.classList.add("modal-show");
  }, 10); // Sedikit penundaan untuk memastikan transisi terjadi

  // Ketika tombol 'x' diklik, modal akan ditutup
  tutupModalBtn.onclick = function () {
    modal.classList.remove("modal-show");
    setTimeout(function () {
      modal.style.display = "none"; // Sembunyikan modal setelah transisi selesai
    }, 500); // Sesuaikan durasi animasi (0.5 detik)
  };

  // Menutup modal ketika mengklik area luar modal
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.classList.remove("modal-show");
      setTimeout(function () {
        modal.style.display = "none";
      }, 500);
    }
  };
}
