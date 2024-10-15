document.addEventListener('DOMContentLoaded', function() {
    // Menangani klik pada tautan di navbar
    const menuLinks = document.querySelectorAll('.navbar .menu a');

    menuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Menghindari perilaku default

            const targetId = this.getAttribute('href'); // Mendapatkan ID target
            
            // Mengecualikan tombol 'Home'
            if (targetId === 'index.html') {
                window.location.href = targetId; // Pindah langsung tanpa scroll
                return; // Keluar dari fungsi
            }

            const targetElement = document.querySelector(targetId); // Menemukan elemen target

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth' // Efek scroll halus
                });
            }
        });
    });
});