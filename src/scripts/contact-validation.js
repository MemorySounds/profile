export function initContactValidation() {
  document
    .querySelectorAll(".contact input, .contact textarea")
    .forEach((field) => {
      field.dataset.blurred = "false";

      field.addEventListener("blur", function () {
        field.dataset.blurred = "true";
        if (!field.checkValidity()) {
          field.classList.add("show-error");
          const error = field.parentElement.querySelector(".error-message");
          if (error) error.style.display = "block";
        }
      });

      field.addEventListener("input", function () {
        // Remove error as user types
        field.classList.remove("show-error");
        const error = field.parentElement.querySelector(".error-message");
        if (error) error.style.display = "none";
      });
    });

  // On form submit, show errors for all invalid fields
  document
    .querySelector(".contact form")
    .addEventListener("submit", function (e) {
      let hasError = false;
      this.querySelectorAll("input, textarea").forEach((field) => {
        field.dataset.blurred = "true";
        if (!field.checkValidity()) {
          field.classList.add("show-error");
          const error = field.parentElement.querySelector(".error-message");
          if (error) error.style.display = "block";
          hasError = true;
        }
      });
      if (hasError) e.preventDefault();
    });

  document
    .getElementById("contact-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      const form = e.target;
      const data = new FormData(form);

      fetch(form.action, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      }).then((response) => {
        if (response.ok) {
          const contactHeader = document.getElementById("contact-header");
          const success = document.getElementById("form-success");
          form.style.display = "none";
          contactHeader.textContent = "Thanks for reaching out!";
          success.style.display = "block";
          setTimeout(() => {
            success.style.display = "none";
            form.reset();
            form.style.display = "flex";
            contactHeader.textContent = "Get in touch";
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth", block: "start" });
          }, 3000);
        } else {
          // Optionally show an error message
        }
      });
    });
}
