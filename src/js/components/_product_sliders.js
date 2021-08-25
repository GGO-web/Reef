const productsSliders = document.querySelectorAll(".products__slider");

productsSliders.forEach((productsSlider) => {
   new Swiper(productsSlider, {
      // Optional parameters
      loop: false,
      speed: 500,
      spaceBetween: 15,
      slidesPerView: 6,
      // allowTouchMove: false,
      wrapperClass: "products__slider-wrapper",
      slideClass: "products__slide",
      slideActiveClass: "products__slide--active",
      slideNextClass: "products__slide-next",
      slidePrevClass: "products__slide-prev",
      slideVisibleClass: "products__slide--visible",

      breakpoints: {
         1200: {
            slidesPerView: 6,
         },
         1025: {
            slidesPerView: 5,
         },
         800: {
            slidesPerView: 4,
         },
         600: {
            slidesPerView: 3,
         },
         420: {
            slidesPerView: 2,
         },
         0: {
            slidesPerView: 1,
         },
      },

      pagination: {
         el: ".products__slider-pagination",
         type: "bullets",
         bulletClass: "products__slider-bullet",
         bulletActiveClass: "products__slider-bullet--active",
         clickable: true,
         renderBullet: function (index, className) {
            return (
               '<button aria-label="Go to slide ' +
               (index + 1) +
               '" class="' +
               className +
               ' btn-reset"></button>'
            );
         },
      },
      navigation: {
         nextEl: ".products__slider-button-next",
         prevEl: ".products__slider-button-prev",
         disabledClass: "products__slider-button-disabled",
      },
   });
});
