(function () {
  var header = document.querySelector("[data-header]");
  var nav = document.querySelector("[data-nav]");
  var navToggle = document.querySelector("[data-nav-toggle]");
  var navLinks = Array.prototype.slice.call(document.querySelectorAll("[data-nav-link]"));
  var quoteForm = document.getElementById("quote-form");
  var formStatus = document.getElementById("form-status");
  var copyButton = document.querySelector("[data-copy-phone]");
  var copyStatus = document.getElementById("copy-status");
  var phoneNumber = "(678) 663-5140";

  function setHeaderState() {
    if (!header) {
      return;
    }

    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }

  function closeMenu() {
    if (!nav || !navToggle) {
      return;
    }

    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation menu");
    document.body.classList.remove("nav-open");
  }

  function toggleMenu() {
    if (!nav || !navToggle) {
      return;
    }

    var isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    document.body.classList.toggle("nav-open", isOpen);
  }

  function currentPageName() {
    return window.location.pathname.split("/").pop() || "index.html";
  }

  function isHomeHref(href) {
    return href === "index.html" || href === "./" || href === "/" || href === "";
  }

  function getScrollActiveHash() {
    if (currentPageName() === "quote.html") {
      return "";
    }

    var sectionIds = ["services", "about", "reviews"];
    var headerOffset = header ? header.offsetHeight + 48 : 120;
    var activeHash = "";

    sectionIds.forEach(function (id) {
      var section = document.getElementById(id);
      if (section && section.getBoundingClientRect().top <= headerOffset) {
        activeHash = "#" + id;
      }
    });

    return activeHash;
  }

  function handleSamePageScroll(event) {
    var link = event.currentTarget;
    var href = link.getAttribute("href") || "";
    var page = currentPageName();
    var targetHash = "";

    if (page !== "quote.html" && isHomeHref(href)) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      history.pushState(null, "", window.location.pathname);
      setActiveNavLink("index.html");
      closeMenu();
      return;
    }

    if (href.charAt(0) === "#") {
      targetHash = href;
    } else if (page !== "quote.html" && href.indexOf("index.html#") === 0) {
      targetHash = href.slice("index.html".length);
    }

    if (!targetHash) {
      closeMenu();
      return;
    }

    var target = document.querySelector(targetHash);
    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    history.pushState(null, "", targetHash);
    setActiveNavLink(targetHash);
    closeMenu();
  }

  function setActiveNavLink(activeHref) {
    var currentPage = currentPageName();
    var activeHash = activeHref && activeHref.charAt(0) === "#" ? activeHref : window.location.hash || getScrollActiveHash();

    if (activeHref && activeHref.indexOf("index.html#") === 0) {
      activeHash = activeHref.slice("index.html".length);
    }

    if (activeHref && isHomeHref(activeHref)) {
      activeHash = "";
    }

    navLinks.forEach(function (link) {
      var href = link.getAttribute("href") || "";
      var isActive = false;

      if (currentPage === "quote.html") {
        isActive = href === "quote.html";
      } else if (activeHash) {
        isActive = href === activeHash || href === "index.html" + activeHash;
      } else {
        isActive = isHomeHref(href);
      }

      link.classList.toggle("is-active", isActive);
    });
  }

  function getErrorElement(fieldId) {
    return document.querySelector('[data-error-for="' + fieldId + '"]');
  }

  function setFieldError(field, message) {
    var row = field.closest(".form-row");
    var errorTarget = getErrorElement(field.id || field.name);

    if (row) {
      row.classList.toggle("has-error", Boolean(message));
    }

    if (errorTarget) {
      errorTarget.textContent = message;
    }

    if (message) {
      field.setAttribute("aria-invalid", "true");
    } else {
      field.removeAttribute("aria-invalid");
    }
  }

  function validateEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function validateQuoteForm() {
    var isValid = true;
    var fields = Array.prototype.slice.call(quoteForm.querySelectorAll("input[required], select[required], textarea[required]"));

    fields.forEach(function (field) {
      if (field.type === "radio") {
        return;
      }

      var value = field.value.trim();
      var label = quoteForm.querySelector('label[for="' + field.id + '"]');
      var labelText = label ? label.textContent : "This field";
      var message = "";

      if (!value) {
        message = labelText + " is required.";
      } else if (field.type === "email" && !validateEmail(value)) {
        message = "Enter a valid email address.";
      } else if (field.id === "phone" && value.replace(/\D/g, "").length < 10) {
        message = "Enter a valid phone number.";
      }

      setFieldError(field, message);

      if (message) {
        isValid = false;
      }
    });

    var checkedContact = quoteForm.querySelector('input[name="contactMethod"]:checked');
    var contactRadios = Array.prototype.slice.call(quoteForm.querySelectorAll('input[name="contactMethod"]'));
    var contactGroup = contactRadios.length ? contactRadios[0].closest(".radio-group") : null;
    var contactError = getErrorElement("contactMethod");

    if (!checkedContact) {
      if (contactGroup) {
        contactGroup.classList.add("has-error");
      }
      if (contactError) {
        contactError.textContent = "Choose a preferred contact method.";
      }
      contactRadios.forEach(function (radio) {
        radio.setAttribute("aria-invalid", "true");
      });
      isValid = false;
    } else {
      if (contactGroup) {
        contactGroup.classList.remove("has-error");
      }
      if (contactError) {
        contactError.textContent = "";
      }
      contactRadios.forEach(function (radio) {
        radio.removeAttribute("aria-invalid");
      });
    }

    return isValid;
  }

  function clearFieldError(field) {
    if (field.type === "radio") {
      var contactGroup = field.closest(".radio-group");
      var contactError = getErrorElement("contactMethod");
      var contactRadios = Array.prototype.slice.call(quoteForm.querySelectorAll('input[name="contactMethod"]'));

      if (quoteForm.querySelector('input[name="contactMethod"]:checked')) {
        if (contactGroup) {
          contactGroup.classList.remove("has-error");
        }
        if (contactError) {
          contactError.textContent = "";
        }
        contactRadios.forEach(function (radio) {
          radio.removeAttribute("aria-invalid");
        });
      }
      return;
    }

    if (!field.value.trim()) {
      return;
    }

    if (field.type === "email" && !validateEmail(field.value.trim())) {
      return;
    }

    if (field.id === "phone" && field.value.replace(/\D/g, "").length < 10) {
      return;
    }

    setFieldError(field, "");
  }

  function showFormStatus(message, type) {
    if (!formStatus) {
      return;
    }

    formStatus.textContent = message;
    formStatus.className = "form-status is-visible is-" + type;
  }

  function handleQuoteSubmit(event) {
    event.preventDefault();

    if (!validateQuoteForm()) {
      showFormStatus("Please review the highlighted fields.", "error");
      return;
    }

    quoteForm.reset();
    Array.prototype.slice.call(quoteForm.querySelectorAll(".has-error")).forEach(function (row) {
      row.classList.remove("has-error");
    });
    Array.prototype.slice.call(quoteForm.querySelectorAll("[aria-invalid]")).forEach(function (field) {
      field.removeAttribute("aria-invalid");
    });
    Array.prototype.slice.call(quoteForm.querySelectorAll(".field-error")).forEach(function (error) {
      error.textContent = "";
    });
    showFormStatus("Thanks. This demo quote form is ready to connect to email or a form service.", "success");
  }

  function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }

    var textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.top = "-999px";
    document.body.appendChild(textarea);
    textarea.select();

    try {
      document.execCommand("copy");
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    } finally {
      document.body.removeChild(textarea);
    }
  }

  function handleCopyPhone() {
    copyToClipboard(phoneNumber)
      .then(function () {
        if (copyStatus) {
          copyStatus.textContent = "Phone number copied.";
        }

        window.setTimeout(function () {
          if (copyStatus) {
            copyStatus.textContent = "";
          }
        }, 2600);
      })
      .catch(function () {
        if (copyStatus) {
          copyStatus.textContent = "Copy did not work. You can select the phone number manually.";
        }
      });
  }

  if (navToggle) {
    navToggle.addEventListener("click", toggleMenu);
  }

  navLinks.forEach(function (link) {
    link.addEventListener("click", handleSamePageScroll);
  });

  window.addEventListener("scroll", function () {
    setHeaderState();
    setActiveNavLink();
  }, { passive: true });
  window.addEventListener("hashchange", setActiveNavLink);

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  if (quoteForm) {
    quoteForm.addEventListener("submit", handleQuoteSubmit);
    quoteForm.addEventListener("input", function (event) {
      var target = event.target;
      if (target.matches("input, select, textarea")) {
        clearFieldError(target);
      }
    });
    quoteForm.addEventListener("change", function (event) {
      var target = event.target;
      if (target.matches("input, select, textarea")) {
        clearFieldError(target);
      }
    });
  }

  if (copyButton) {
    copyButton.addEventListener("click", handleCopyPhone);
  }

  setHeaderState();
  setActiveNavLink();
})();
