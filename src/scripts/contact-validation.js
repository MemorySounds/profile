document.querySelectorAll('.contact input, .contact textarea').forEach(field => {
  field.dataset.blurred = 'false';

  field.addEventListener('blur', function() {
    field.dataset.blurred = 'true';
    if (!field.checkValidity()) {
      field.classList.add('show-error');
      const error = field.parentElement.querySelector('.error-message');
      if (error) error.style.display = 'block';
    }
  });

  field.addEventListener('input', function() {
    // Remove error as user types
    field.classList.remove('show-error');
    const error = field.parentElement.querySelector('.error-message');
    if (error) error.style.display = 'none';
  });
});

// On form submit, show errors for all invalid fields
document.querySelector('.contact form').addEventListener('submit', function(e) {
  let hasError = false;
  this.querySelectorAll('input, textarea').forEach(field => {
    field.dataset.blurred = 'true';
    if (!field.checkValidity()) {
      field.classList.add('show-error');
      const error = field.parentElement.querySelector('.error-message');
      if (error) error.style.display = 'block';
      hasError = true;
    }
  });
  if (hasError) e.preventDefault();
});