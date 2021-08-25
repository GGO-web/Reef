const favoriteButtons = document.querySelectorAll(".card__favorite");

favoriteButtons.forEach((favoriteButton) => {
   favoriteButton.addEventListener("click", () => {
      favoriteButton.classList.toggle("is-active");
   })
})
