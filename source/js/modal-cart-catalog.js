var orderIcon = document.querySelectorAll(".catalog__icon-cart");
var cartCatalogPopup = document.querySelector(".modal-cart");

orderIcon.forEach(function(button) {
  button.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartCatalogPopup.classList.add("modal-show");
  });
});

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (cartCatalogPopup.classList.contains("modal-show")) {
        cartCatalogPopup.classList.remove("modal-show");
      }
    }
  });
