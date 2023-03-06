function checkPasswordMatch(password2) {
  const password1 = document.querySelector('#password').value;
  const warningText = document.querySelector('.password-warning');

  // Only check passwords when both meet requirements
  if ((password1.length && password2.length) < 8) return;

  if (password1 !== password2) {
    warningText.textContent = 'Passwords do not match.';
  } else {
    warningText.textContent = '';
  }
}

const password1Field = document.querySelector('#password');
password1Field.addEventListener('keyup', () => {
  checkPasswordMatch(password2Field.value);
});

const password2Field = document.querySelector('#confirm-password');
password2Field.addEventListener('keyup', () => {
  checkPasswordMatch(password2Field.value);
});
