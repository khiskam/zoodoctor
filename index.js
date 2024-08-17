import "@splidejs/splide/css";
import Splide from "@splidejs/splide";

const splideOptions = {
  type: "loop",
  perPage: 3,
  perMove: 1,
  arrows: false,
  breakpoints: {
    992: {
      perPage: 2,
    },
    576: {
      perPage: 1,
    },
  },
  gap: "8px",
  autoplay: true,
  drag: true,
  paginationDirection: "ttb",
};

new Splide(".splide", splideOptions).mount();

const form = document.querySelector(".subscription__info");

const dangerAlert = document.querySelector(".alert_danger");
const successAlert = document.querySelector(".alert_success");

const showAlert = (openAlert, closeAlert) => {
  closeAlert.classList.remove("alert_active");
  openAlert.classList.add("alert_active");
  setTimeout(() => openAlert.classList.remove("alert_active"), 3000);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form).entries();

  for (const input of formData) {
    if (input[1] === "") {
      showAlert(dangerAlert, successAlert);

      return;
    }
  }

  form.reset();
  showAlert(successAlert, dangerAlert);
});
