import "./assets/css/header.css";
import "./assets/css/footer.css";
import "./assets/css/logo.css";
import "./assets/css/general.css";

const header = document.querySelector("header");
const footer = document.querySelector("footer");

header.innerHTML = `<a href="/" class="logo">
          <img src="/img/logo.svg" alt="logo" class="logo__icon" />
          <span class="logo__text">ZooDoctor</span>
        </a>
        <nav class="header__menu menu">
          <a href="/pages/reviews/" class="menu__link">Отзывы</a>
          <a href="/pages/services/" class="menu__link">Услуги</a>
        </nav>`;

footer.innerHTML = `<a href="/" class="logo">
          <img src="/img/logo.svg" alt="logo" class="logo__icon" />
          <span class="logo__text">ZooDoctor</span>
        </a>
        <span class="footer__info">© ZooDoctor</span>`;
