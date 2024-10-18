const swiper = new Swiper(".hero .swiper", {
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