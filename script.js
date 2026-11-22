// Sayfa açıldığında kaydedilmiş temayı uygula; kayıt yoksa koyu temayı kullan.
const themeButton = document.querySelector("[data-theme-toggle]");
const themeLabel = themeButton
  ? themeButton.querySelector(".theme-toggle-label")
  : null;
const themeStorageKey = "portfolio-theme";

function readSavedTheme() {
  try {
    const savedTheme = localStorage.getItem(themeStorageKey);
    return savedTheme === "light" ? "light" : "dark";
  } catch (error) {
    console.warn("Tema tercihi bu tarayıcıda okunamadı.", error);
    return "dark";
  }
}

function setTheme(theme, savePreference) {
  document.documentElement.dataset.theme = theme;

  if (themeButton) {
    const buttonText = theme === "dark" ? "Açık tema" : "Koyu tema";

    themeButton.setAttribute(
      "aria-label",
      theme === "dark" ? "Açık temaya geç" : "Koyu temaya geç"
    );

    if (themeLabel) {
      themeLabel.textContent = buttonText;
    }

  }

  const themeColor = document.querySelector('meta[name="theme-color"]');
  if (themeColor) {
    themeColor.content = theme === "light" ? "#abdbd8" : "#080a12";
  }

  if (savePreference) {
    try {
      localStorage.setItem(themeStorageKey, theme);
    } catch (error) {
      console.warn("Tema tercihi bu tarayıcıya kaydedilemedi.", error);
    }
  }
}

setTheme(readSavedTheme(), false);

if (themeButton) {
  themeButton.addEventListener("click", function () {
    const nextTheme = document.documentElement.dataset.theme === "light"
      ? "dark"
      : "light";
    setTheme(nextTheme, true);
  });
}

// Dar ekranda menüyü açıp kapat; Escape tuşu menüyü kapatıp odağı geri getirir.
const menuButton = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelector(".nav-links");

if (menuButton && siteNav && navLinks) {
  function setMenuOpen(isOpen) {
    menuButton.setAttribute("aria-expanded", String(isOpen));
    siteNav.classList.toggle("menu-open", isOpen);
  }

  menuButton.addEventListener("click", function () {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    setMenuOpen(!isOpen);
  });

  navLinks.addEventListener("click", function (event) {
    if (event.target.closest("a")) {
      setMenuOpen(false);
    }
  });

  document.addEventListener("keydown", function (event) {
    if (
      event.key === "Escape" &&
      menuButton.getAttribute("aria-expanded") === "true"
    ) {
      setMenuOpen(false);
      menuButton.focus();
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 600) {
      setMenuOpen(false);
    }
  });
}

// Proje sayfasında seçilen kategori dışındaki kartları gizle.
const filterButtons = document.querySelectorAll("[data-project-filter]");
const projectCards = document.querySelectorAll(".project-card[data-category]");
const filterStatus = document.querySelector(".filter-status");

if (filterButtons.length > 0 && projectCards.length > 0) {
  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const selectedFilter = button.dataset.projectFilter;
      let visibleCount = 0;

      filterButtons.forEach(function (filterButton) {
        filterButton.setAttribute(
          "aria-pressed",
          String(filterButton === button)
        );
      });

      projectCards.forEach(function (card) {
        const shouldShow =
          selectedFilter === "all" ||
          card.dataset.category === selectedFilter;

        card.hidden = !shouldShow;
        if (shouldShow) {
          visibleCount += 1;
        }
      });

      if (filterStatus) {
        filterStatus.textContent = visibleCount + " proje gösteriliyor.";
      }
    });
  });
}

// Formu yalnızca doğrula; hiçbir alana göndermeden veya kaydetmeden sayfada kal.
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  const formStatus = contactForm.querySelector(".form-status");
  const fields = [
    {
      input: contactForm.querySelector("#ad"),
      error: contactForm.querySelector("#ad-error"),
      label: "Ad",
      maxLength: 80,
    },
    {
      input: contactForm.querySelector("#eposta"),
      error: contactForm.querySelector("#eposta-error"),
      label: "E-posta",
      maxLength: 254,
    },
    {
      input: contactForm.querySelector("#mesaj"),
      error: contactForm.querySelector("#mesaj-error"),
      label: "Mesaj",
      maxLength: 2000,
    },
  ].filter(function (field) {
    return field.input && field.error;
  });

  fields.forEach(function (field) {
    field.input.addEventListener("input", function () {
      field.input.setAttribute("aria-invalid", "false");
      field.error.textContent = "";

      if (formStatus) {
        formStatus.textContent = "";
      }
    });
  });

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (formStatus) {
      formStatus.textContent = "";
    }

    let firstInvalidField = null;

    fields.forEach(function (field) {
      const value = field.input.value;
      const trimmedValue = value.trim();
      let errorMessage = "";

      if (!trimmedValue) {
        errorMessage = field.label + " alanı boş bırakılamaz.";
      } else if (value.length > field.maxLength) {
        errorMessage =
          field.label +
          " alanı en fazla " +
          field.maxLength +
          " karakter olabilir.";
      } else if (
        field.input.type === "email" &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue)
      ) {
        errorMessage = "Geçerli bir e-posta adresi girin.";
      }

      field.input.setAttribute(
        "aria-invalid",
        String(errorMessage !== "")
      );
      field.error.textContent = errorMessage;

      if (errorMessage && !firstInvalidField) {
        firstInvalidField = field.input;
      }
    });

    if (firstInvalidField) {
      firstInvalidField.focus();
      return;
    }

    if (formStatus) {
      formStatus.textContent = "Form doğrulandı; mesaj gönderilmedi.";
    }
  });
}
