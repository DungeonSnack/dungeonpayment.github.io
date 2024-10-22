// document.addEventListener('DOMContentLoaded', function() {
//     // Menangani klik pada tautan di navbar
//     const menuLinks = document.querySelectorAll('.navbar .menu a');

//     menuLinks.forEach(link => {
//         link.addEventListener('click', function(event) {
//             event.preventDefault(); // Menghindari perilaku default

//             const targetId = this.getAttribute('href'); // Mendapatkan ID target
            
//             // Mengecualikan tombol 'Home'
//             if (targetId === 'index.html') {
//                 window.location.href = targetId; // Pindah langsung tanpa scroll
//                 return; // Keluar dari fungsi
//             }

//             const targetElement = document.querySelector(targetId); // Menemukan elemen target

//             if (targetElement) {
//                 targetElement.scrollIntoView({
//                     behavior: 'smooth' // Efek scroll halus
//                 });
//             }
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    // Menangani klik pada tautan di navbar
    const menuLinks = document.querySelectorAll('.navbar .menu a');

    menuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const targetId = this.getAttribute('href'); // Mendapatkan atribut href

            // Jika href mengandung tanda '#' berarti ini adalah anchor link
            if (targetId.startsWith('#')) {
                event.preventDefault(); // Mencegah perilaku default untuk anchor links
                
                const targetElement = document.querySelector(targetId); // Menemukan elemen target

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth' // Efek scroll halus
                    });
                }
            } else {
                // Tautan yang mengarah ke halaman lain
                event.preventDefault(); // Mencegah perilaku default untuk memuat halaman
                document.getElementById('loading').style.display = 'flex'; // Tampilkan loading

                // Pindah ke halaman setelah delay
                setTimeout(() => {
                    window.location.href = targetId; // Pindah ke halaman baru
                }, 500); // 500ms delay sebelum pindah
            }
        });
    });
});

