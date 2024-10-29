function downloadReceipt() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
  
    // Data yang akan ditampilkan di bukti pembelian
    const productName = "Payung Tenda 180 CM - Merah - UV";
    const quantity = localStorage.getItem("quantity") || 1;
    const totalProductPrice = localStorage.getItem("totalProductPrice") || 80000;
    const shippingCost = localStorage.getItem("shippingCost") || 10500;
    const totalPrice = localStorage.getItem("totalPrice") || 93100;
  
    // Judul Bukti Pembelian
    doc.setFontSize(16);
    doc.text("Bukti Pembelian", 20, 20);
    
    // Detail Produk
    doc.setFontSize(12);
    doc.text(`Nama Produk: ${productName}`, 20, 40);
    doc.text(`Jumlah Barang: ${quantity}`, 20, 50);
    doc.text(`Total Harga Produk: Rp${parseInt(totalProductPrice).toLocaleString("id-ID")}`, 20, 60);
    doc.text(`Total Ongkos Kirim: Rp${parseInt(shippingCost).toLocaleString("id-ID")}`, 20, 70);
    
    // Total Harga Akhir
    doc.setFontSize(14);
    doc.text(`Total Tagihan: Rp${parseInt(totalPrice).toLocaleString("id-ID")}`, 20, 90);
  
    // Menyimpan dokumen dengan nama file Bukti_Pembelian.pdf
    doc.save("Bukti_Pembelian.pdf");
  }
  