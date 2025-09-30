/**
 * Rigon Website - Vanilla JavaScript
 * Sin dependencias de jQuery
 */

(function () {
  "use strict";

  const app = {
    init: function () {
      console.log("App initialized");
      this.mainVisible();
      this.setUpListeners();
      this.appendBtnTop();
      this.btnTopScroll();
    },

    setUpListeners: function () {
      // Mobile menu toggle
      const mobileMenuBtn = document.querySelector(".main-mnu-btn");
      if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener("click", this.mainMenuToggle.bind(this));
      }

      // Mobile menu submenu toggle
      const submenuBtns = document.querySelectorAll(".mmm-btn");
      submenuBtns.forEach((btn) => {
        btn.addEventListener("click", this.mainMenuSubmenuToggle);
      });

      // Close menu when clicking outside
      document.addEventListener("click", this.mainMenuCloseNotEl.bind(this));

      // Header navbar toggle (mobile)
      const navbarBtn = document.querySelector(".header-navbar-btn");
      if (navbarBtn) {
        navbarBtn.addEventListener("click", this.headerNavbarToggle.bind(this));
      }

      // Close navbar when clicking outside
      document.addEventListener("click", this.headerNavbarNotEl.bind(this));

      // Button top (scroll to top)
      const btnTop = document.querySelector(".btn-top");
      if (btnTop) {
        btnTop.addEventListener("click", this.btnTop);
      }

      // Scroll event for button top
      window.addEventListener("scroll", this.btnTopScroll);

      // Form fields
      const formInputs = document.querySelectorAll(".form-field-input");
      formInputs.forEach((input) => {
        input.addEventListener("focus", this.inputFocus);
        input.addEventListener("blur", this.inputBlur);
        input.addEventListener("keyup", this.inputKeyup);
        input.addEventListener("change", this.inputKeyup);
      });

      // Check initial state of form fields
      formInputs.forEach((input) => {
        if (input.value) {
          input.closest(".form-field")?.classList.add("form-field-active");
        }
      });
    },

    mainVisible: function () {
      const main = document.querySelector(".main");
      if (main) {
        main.classList.add("main-visible");
      }
    },

    appendBtnTop: function () {
      const btnTop = document.createElement("div");
      btnTop.className = "btn-top";
      btnTop.innerHTML =
        '<svg class="btn-icon-right" viewBox="0 0 13 9" width="13" height="9"><use xlink:href="/assets/img/sprite.svg#arrow-right"></use></svg>';
      document.body.appendChild(btnTop);
    },

    btnTop: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },

    btnTopScroll: function () {
      const btnTop = document.querySelector(".btn-top");
      if (!btnTop) return;

      if (window.scrollY > 700) {
        btnTop.classList.add("active");
      } else {
        btnTop.classList.remove("active");
      }
    },

    mainMenuToggle: function (e) {
      e.preventDefault();
      e.stopPropagation();

      const menu = document.querySelector(".mmm");
      const btn = document.querySelector(".main-mnu-btn");
      const bg = document.querySelector(".mf-bg");

      menu?.classList.toggle("mmm-active");
      btn?.classList.toggle("main-mnu-btn-active");

      if (menu?.classList.contains("mmm-active")) {
        if (!bg) {
          const mfBg = document.createElement("div");
          mfBg.className = "mf-bg";
          document.body.appendChild(mfBg);
        }
        document.body.classList.add("mmm-body-active");
      } else {
        document.body.classList.remove("mmm-body-active");
        document.querySelector(".mf-bg")?.remove();
      }
    },

    mainMenuSubmenuToggle: function (e) {
      e.preventDefault();
      const parent = this.parentElement;
      parent?.classList.toggle("mmm-item-active");
    },

    mainMenuCloseNotEl: function (e) {
      const menu = document.querySelector(".mmm");
      const btn = document.querySelector(".main-mnu-btn");

      if (
        !e.target.closest(".mmm") &&
        !e.target.closest(".main-mnu-btn") &&
        menu?.classList.contains("mmm-active")
      ) {
        menu.classList.remove("mmm-active");
        btn?.classList.remove("main-mnu-btn-active");
        document.body.classList.remove("mmm-body-active");
        document.querySelector(".mf-bg")?.remove();
      }
    },

    headerNavbarToggle: function (e) {
      e.preventDefault();
      e.stopPropagation();

      const navbar = document.querySelector(".header-navbar-content");
      navbar?.classList.toggle("header-navbar-content-active");
    },

    headerNavbarNotEl: function (e) {
      const navbar = document.querySelector(".header-navbar-content");

      if (
        !e.target.closest(".header-navbar") &&
        navbar?.classList.contains("header-navbar-content-active")
      ) {
        navbar.classList.remove("header-navbar-content-active");
      }
    },

    inputFocus: function () {
      this.closest(".form-field")?.classList.add("form-field-focus");
    },

    inputBlur: function () {
      this.closest(".form-field")?.classList.remove("form-field-focus");
    },

    inputKeyup: function () {
      const field = this.closest(".form-field");
      if (this.value) {
        field?.classList.add("form-field-active");
      } else {
        field?.classList.remove("form-field-active");
      }
    },
  };

  // Inicializar en carga de página
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => app.init());
  } else {
    app.init();
  }

  // Reinicializar después de transiciones de Astro
  document.addEventListener("astro:page-load", () => {
    console.log("Page loaded, reinitializing");
    app.init();
  });

  // Exponer globalmente para debug
  window.app = app;
})();
