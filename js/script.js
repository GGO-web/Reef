const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const menuItemArrows = document.querySelectorAll(".menu__item-arrow");

function openBurgerMenu() {
   burger.classList.add("active");
   menu.classList.add("is-active");
   document.body.classList.add("hide-scroll");
}

function closeBurgerMenu() {
   burger.classList.remove("active");
   menu.classList.remove("is-active");
   document.body.classList.remove("hide-scroll");
}

burger.addEventListener("click", function () {
   if (menu.classList.contains("is-active")) {
      closeBurgerMenu();
   } else {
      openBurgerMenu();
   }
});

window.addEventListener("orientationchange", () => {
   closeBurgerMenu();
});

window.addEventListener("click", (event) => {
   const clickedElement = event.target;

   if (clickedElement && clickedElement.classList.contains("menu__item-arrow")) {
      const sublistElement = clickedElement.nextElementSibling;
      const links = sublistElement.querySelectorAll(".menu-sublist__link");
      sublistElement.classList.toggle("is-active");

      if (sublistElement.classList.contains("is-active")) {
         clickedElement.setAttribute("aria-expanded", "true");
         sublistElement.style.maxHeight = sublistElement.scrollHeight + "px";

         links.forEach(link => link.removeAttribute("tabindex"));
      } else {
         clickedElement.setAttribute("aria-expanded", "false");
         sublistElement.style.maxHeight = null;

         links.forEach(link => link.setAttribute("tabindex", "-1"));
      }
   } else {
      menuItemArrows.forEach(itemArrow => {
         const sublistElement = itemArrow.nextElementSibling;
         const links = sublistElement.querySelectorAll(".menu-sublist__link");
         sublistElement.classList.remove("is-active");

         if (sublistElement.classList.contains("is-active")) {
            itemArrow.setAttribute("aria-expanded", "true");
            sublistElement.style.maxHeight = sublistElement.scrollHeight + "px";

            links.forEach(link => link.removeAttribute("tabindex"));
         } else {
            itemArrow.setAttribute("aria-expanded", "false");
            sublistElement.style.maxHeight = null;

            links.forEach(link => link.setAttribute("tabindex", "-1"));
         }
      });
   }
});

const catalogFilterButtons = document.querySelectorAll(".catalog__filter-button");

catalogFilterButtons.forEach(catalogFilter => {
   const filterList = catalogFilter.parentElement.querySelector(".catalog__filter-list");

   catalogFilter.addEventListener("click", () => {
      if (catalogFilter.getAttribute("aria-expanded") == "true") {
         catalogFilter.setAttribute("aria-expanded", "false");
         filterList.style.maxHeight = filterList.scrollHeight + "px";
      } else {
         filterList.style.transition = "max-height 0.3s ease-in-out";
         catalogFilter.setAttribute("aria-expanded", "true");
         filterList.style.maxHeight = null;
      }
   });
});

const favoriteButtons = document.querySelectorAll(".card__favorite");

favoriteButtons.forEach((favoriteButton) => {
   favoriteButton.addEventListener("click", () => {
      favoriteButton.classList.toggle("is-active");
   })
})

const parseVal = (value) => {
   if (value) {
      return parseInt(value);
   }

   return 0;
}

const calcHeaderHeight = () => {
   const header = document.querySelector(".header");
   const headerHeight = header.offsetHeight + parseVal(header.style.paddingTop) + parseVal(header.style.paddingBottom);
   document.documentElement.style.setProperty("--header-height", `${headerHeight}px`);
}

calcHeaderHeight();

const vhCalculate = () => {
   const vh = window.innerHeight * 0.01;
   document.documentElement.style.setProperty('--vh', `${vh}px`);
}

vhCalculate();

window.addEventListener("resize", () => {
   vhCalculate();
   calcHeaderHeight();
});

const heroSlider = new Swiper(".hero__slider", {
   // Optional parameters
   loop: false,
   speed: 500,
   slidesPerView: 1,
   // disableOnInteraction: true,
   loop: true,
   // allowTouchMove: false,
   // noSwiping: true,
   wrapperClass: "hero__slider-wrapper",
   slideClass: "hero__slide",
   slideActiveClass: "hero__slide--active",
   slideNextClass: "hero__slide-next",
   slidePrevClass: "hero__slide-prev",
   slideVisibleClass: "hero__slide--visible",

   pagination: {
      el: ".hero__slider-pagination",
      type: "bullets",
      bulletClass: "hero__slider-bullet",
      bulletActiveClass: "hero__slider-bullet--active",
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
});

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

const steppers = document.querySelectorAll(".stepper");
if (steppers) {
   steppers.forEach((stepper) => {
      const minusButton = stepper.querySelector(".stepper__down");
      const plusButton = stepper.querySelector(".stepper__up");
      const stepperInput = stepper.querySelector(".stepper__counter");

      minusButton.addEventListener("click", () => {
         const currStepper = parseInt(stepperInput.value);
         if (currStepper > +stepperInput.min)
            stepperInput.value = String(currStepper - 1);
      });

      plusButton.addEventListener("click", () => {
         const currStepper = parseInt(stepperInput.value);
         if (currStepper < +stepperInput.max)
            stepperInput.value = String(currStepper + 1);
      });

      stepperInput.addEventListener("change", function () {
         const stepperInputValue = parseInt(stepperInput.value);
         const minValue = stepperInput.min;
         const maxValue = stepperInput.max;

         if (!stepperInputValue) {
            stepperInput.value = minValue;
         } else if (stepperInputValue < minValue) {
            stepperInput.value = minValue;
         } else if (stepperInputValue > maxValue) {
            stepperInput.value = maxValue;
         }
      });
   });
}

"use strict";
