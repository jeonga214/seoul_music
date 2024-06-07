var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 2800,
        disableOnInteraction: false
      },
    loop: true,
    effect: "coverflow",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 0,
      modifier: 10,
      slideShadows: true,
    },

    breakpoints: {
      821: {
        slidesPerView: 3,  //브라우저가 820보다 클 때
        spaceBetween: 30,
      },
      481: {
        slidesPerView: 2,  //브라우저가 480보다 클 때
        spaceBetween: 30,
      },
      0: {
        slidesPerView: 1,  //브라우저가 0보다 클 때
        spaceBetween: 30,
      },
    },
  });

  var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 1,  //브라우저가 768보다 클 때
        spaceBetween: 30,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      820: {
        slidesPerView: 3,  //브라우저가 768보다 클 때
        spaceBetween: 30,
      },
    },
  });