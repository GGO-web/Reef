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
