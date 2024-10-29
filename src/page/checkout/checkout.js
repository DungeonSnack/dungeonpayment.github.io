// Fungsi untuk memilih metode pembayaran
function selectPayment(element) {
    // Menghapus kelas 'active' dari semua tombol
    const buttons = document.querySelectorAll('.payment-options button');
    buttons.forEach(button => button.classList.remove('active'));

    // Menambahkan kelas 'active' ke tombol yang dipilih
    element.classList.add('active');
}

// Fungsi untuk melakukan proses pemesanan
function placeOrder() {
    alert("Pesanan Anda telah dibuat!");
}
