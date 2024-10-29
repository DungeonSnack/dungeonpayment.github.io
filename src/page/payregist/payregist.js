// Fungsi untuk menghasilkan QR Code dengan timestamp
function generateQRCode() {
    // Gunakan timestamp sebagai konten dinamis QR Code
    const qrContent = `QR-${Date.now()}`;  // `Date.now()` menghasilkan timestamp saat ini
    const qrCodeContainer = document.getElementById("qrcode");
    qrCodeContainer.innerHTML = "";  // Hapus QR Code lama

    // Generate QR Code dengan ukuran yang sesuai dengan container
    new QRCode(qrCodeContainer, {
        text: qrContent,
        width: qrCodeContainer.offsetWidth,  // Atur lebar sesuai container
        height: qrCodeContainer.offsetHeight  // Atur tinggi sesuai container
    });
}

// Panggil pertama kali untuk generate QR Code
generateQRCode();

// Set interval untuk memperbarui QR Code setiap 1 menit (60000 ms)
setInterval(generateQRCode, 60000);  // 60000 ms = 1 menit

// Opsi: Update QR Code jika ukuran jendela berubah
window.addEventListener("resize", generateQRCode);
