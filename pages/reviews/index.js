const accordions = document.querySelectorAll(".accordion__btn");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    accordion.firstElementChild.classList.toggle("accordion__btn-text_active");
    accordion
      .closest(".accordion__headline")
      .nextElementSibling.classList.toggle("accordion__descr-wrapper_active");
  });
});
