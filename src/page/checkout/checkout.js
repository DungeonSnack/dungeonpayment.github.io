// Harga satuan produk
const productPrice = 80000;
const insuranceCost = 600;
const serviceFee = 1000;
const appFee = 1000;

// Mendapatkan elemen-elemen yang diperlukan
const quantityEl = document.getElementById('quantity');
const totalProductPriceEl = document.getElementById('total-product-price');
const shippingCostEl = document.getElementById('shipping-cost');
const totalPriceEl = document.getElementById('total-price');
const deliveryTimeEl = document.getElementById('delivery-time');

// Mengubah jumlah barang
function updateQuantity(amount) {
    let quantity = parseInt(quantityEl.innerText);
    quantity = Math.max(1, quantity + amount);
    quantityEl.innerText = quantity;
    updateTotalPrice();
}

// Validasi catatan agar tidak lebih dari 100 karakter
function validateNote() {
    const noteText = document.getElementById('note-text').value;
    if (noteText.length > 100) {
        alert("Catatan tidak boleh lebih dari 100 karakter.");
    }
}

// Memperbarui ongkos kirim berdasarkan pilihan pengguna
function updateShipping() {
    const shippingCost = parseInt(document.getElementById('shipping-option').value);
    shippingCostEl.innerText = `Rp${shippingCost.toLocaleString('id-ID')}`;
    updateTotalPrice();
}

// Memperbarui kurir dan estimasi waktu tiba
function updateCourier() {
    const courierOption = document.getElementById('courier-option').value;
    let estimateTime = "1 - 3 Nov";
    if (courierOption === "JNE") estimateTime = "2 - 4 Nov";
    else if (courierOption === "SiCepat") estimateTime = "1 - 2 Nov";
    deliveryTimeEl.innerText = `Estimasi tiba ${estimateTime}`;
}

// Menghitung dan memperbarui total harga
function updateTotalPrice() {
    const quantity = parseInt(quantityEl.innerText);
    const shippingCost = parseInt(document.getElementById('shipping-option').value);
    const totalProductPrice = productPrice * quantity;
    const total = totalProductPrice + shippingCost + insuranceCost + serviceFee + appFee;

    totalProductPriceEl.innerText = `Rp${totalProductPrice.toLocaleString('id-ID')}`;
    totalPriceEl.innerText = `Rp${total.toLocaleString('id-ID')}`;
}

// Konfirmasi pembayaran
function confirmPayment() {
    const confirmation = confirm("Apakah Anda yakin ingin melanjutkan ke pembayaran?");
    if (confirmation) {
        alert("Pembayaran berhasil diproses!");
        // Tambahkan logika untuk proses pembayaran di sini
    }
}

// Memperbarui total harga awal saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    updateTotalPrice();
});
