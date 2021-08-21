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
