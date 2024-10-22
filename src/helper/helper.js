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
                    // Melakukan smooth scroll yang lebih lambat
                    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY; // Posisi target
                    const startPosition = window.scrollY; // Posisi saat ini
                    const distance = targetPosition - startPosition; // Jarak yang harus digulir
                    const duration = 2000; // Durasi scroll dalam ms (misal 2000 ms = 2 detik)
                    let startTime = null;

                    function animation(currentTime) {
                        if (!startTime) startTime = currentTime;
                        const timeElapsed = currentTime - startTime;
                        const progress = Math.min(timeElapsed / duration, 1); // Progres antara 0 dan 1
                        const ease = easeInOutCubic(progress); // Fungsi easing untuk smooth
                        window.scrollTo(0, startPosition + distance * ease); // Melakukan scroll

                        if (timeElapsed < duration) {
                            requestAnimationFrame(animation); // Lanjutkan animasi
                        }
                    }

                    // Fungsi easing
                    function easeInOutCubic(t) {
                        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
                    }

                    requestAnimationFrame(animation); // Memulai animasi
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

