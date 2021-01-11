var orderLink = document.querySelector(".features__button");
var cartPopup = document.querySelector(".modal-cart");

orderLink.addEventListener("click", function () {
    cartPopup.classList.add("modal-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (cartPopup.classList.contains("modal-show")) {
        cartPopup.classList.remove("modal-show");
      }
    }
  });
