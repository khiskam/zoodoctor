const services = document.querySelectorAll(".card__text");

const modals = document.querySelectorAll(".modal-wrapper");

modals.forEach((modal) => {
  modal.addEventListener("click", (e) => {
    e.stopPropagation();

    e.target.classList.remove("modal-wrapper_active");
  });
});

services.forEach((service) => {
  service.addEventListener("click", (e) => {
    const modal = e.target.closest(".card").querySelector(".modal-wrapper");

    modal.classList.add("modal-wrapper_active");
  });
});
