const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/i;
const phonePattern = /^(\+?\d{1,4}[\s-]?)?(\(?\d{1,4}\)?[\s-]?)?\d{3,4}[\s-]?\d{3,4}$|^0\d{10}$|^\d{10,11}$/;
const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
const otpPattern = /^\d+$/;

/* Helper - finds the .error-text span for a given input */
function getErrorSpan(input) {
  var group = input.closest ? input.closest('.form-group') : null;
  return group ? group.querySelector('.error-text') : null;
}

function showError(input, msg) {
  input.classList.add('input-error');
  var span = getErrorSpan(input);
  if (span) { span.textContent = msg; span.hidden = false; }
}

function clearError(input) {
  input.classList.remove('input-error');
  var span = getErrorSpan(input);
  if (span) { span.textContent = ''; span.hidden = true; }
}

function validateForm() {
  var fullName = document.getElementById('fullName');
  if (fullName) {
    if (fullName.value.trim() === '') {
      showError(fullName, 'Full name is required.');
      fullName.focus();
      return false;
    } else { clearError(fullName); }
  }

  var email = document.getElementById('emailAddress');
  if (email) {
    var emailVal = email.value.trim();
    if (emailVal === '') {
      showError(email, 'Email address is required.');
      email.focus();
      return false;
    } else if (!gmailPattern.test(emailVal)) {
      showError(email, 'Please enter a valid @gmail.com address.');
      email.focus();
      return false;
    } else { clearError(email); }
  }

  var phone = document.getElementById('phoneNumber');
  if (phone) {
    var phoneVal = phone.value.trim();
    if (phoneVal === '') {
      showError(phone, 'Phone number is required.');
      phone.focus();
      return false;
    } else if (!phonePattern.test(phoneVal)) {
      showError(phone, 'Please enter a valid phone number.');
      phone.focus();
      return false;
    } else { clearError(phone); }
  }

  var otp = document.getElementById('otp') || document.getElementById('otpCode');
  if (otp) {
    var otpVal = otp.value.trim();
    if (otpVal === '') {
      showError(otp, 'OTP code is required.');
      otp.focus();
      return false;
    } else if (!otpPattern.test(otpVal)) {
      showError(otp, 'OTP must contain only numbers.');
      otp.focus();
      return false;
    } else { clearError(otp); }
  }

  var password = document.getElementById('password') || document.getElementById('newPassword');
  if (password) {
    var passVal = password.value;
    var emptyMsg = password.id === 'newPassword' ? 'New password is required.' : 'Password is required.';
    if (passVal === '') {
      showError(password, emptyMsg);
      password.focus();
      return false;
    } else if (!passwordPattern.test(passVal)) {
      showError(password, 'Min. 8 characters, at least 1 letter and 1 number.');
      password.focus();
      return false;
    } else { clearError(password); }
  }

  var confirmPass = document.getElementById('confirmedPassword');
  if (confirmPass) {
    var pass = document.getElementById('newPassword') || document.getElementById('password');
    var confirmVal = confirmPass.value;
    var passValC = pass ? pass.value : '';
    if (confirmVal === '') {
      showError(confirmPass, 'Please confirm your password.');
      confirmPass.focus();
      return false;
    } else if (confirmVal !== passValC) {
      showError(confirmPass, 'Passwords do not match.');
      confirmPass.focus();
      return false;
    } else { clearError(confirmPass); }
  }

  return true;
}

window.validateForm = validateForm;

function setupLiveListeners() {
  var fullNameInput = document.getElementById('fullName');
  if (fullNameInput) {
    fullNameInput.addEventListener('input', function() {
      if (fullNameInput.value.trim() !== '') { clearError(fullNameInput); }
      else { showError(fullNameInput, 'Full name is required.'); }
    });
  }

  var emailInput = document.getElementById('emailAddress');
  if (emailInput) {
    emailInput.addEventListener('input', function() {
      var val = emailInput.value.trim();
      if (val === '') { clearError(emailInput); }
      else if (!gmailPattern.test(val)) { showError(emailInput, 'Please enter a valid @gmail.com address.'); }
      else { clearError(emailInput); }
    });
  }

  var phoneInput = document.getElementById('phoneNumber');
  if (phoneInput) {
    phoneInput.addEventListener('input', function() {
      var val = phoneInput.value.trim();
      if (val === '') { clearError(phoneInput); }
      else if (!phonePattern.test(val)) { showError(phoneInput, 'Please enter a valid phone number.'); }
      else { clearError(phoneInput); }
    });
  }

  var otpInput = document.getElementById('otp') || document.getElementById('otpCode');
  if (otpInput) {
    otpInput.addEventListener('input', function() {
      var val = otpInput.value.trim();
      if (val === '') { clearError(otpInput); }
      else if (!otpPattern.test(val)) { showError(otpInput, 'OTP must contain only numbers.'); }
      else { clearError(otpInput); }
    });
  }

  /* Password live listener
     On the LOGIN page (signInBtnId present) we only flag empty - do NOT enforce
     the strength pattern because login accepts any existing password.
     On signup / reset-password pages we enforce the full pattern. */
  var passInput = document.getElementById('password') || document.getElementById('newPassword');
  if (passInput) {
    var isLoginPage = !!document.getElementById('signInBtnId');

    passInput.addEventListener('input', function() {
      var val = passInput.value;
      if (val === '') {
        clearError(passInput);
      } else if (isLoginPage && val.length < 8) {
        showError(passInput, 'Password must be at least 8 characters.');
      } else if (!isLoginPage && !passwordPattern.test(val)) {
        showError(passInput, 'Min. 8 characters, at least 1 letter and 1 number.');
      } else {
        clearError(passInput);
      }

      /* Re-check confirm password live too */
      var confInput = document.getElementById('confirmedPassword');
      if (confInput && confInput.value !== '') {
        if (confInput.value !== val) { showError(confInput, 'Passwords do not match.'); }
        else { clearError(confInput); }
      }
    });
  }

  var confInput = document.getElementById('confirmedPassword');
  if (confInput) {
    confInput.addEventListener('input', function() {
      var pass = document.getElementById('newPassword') || document.getElementById('password');
      var passVal = pass ? pass.value : '';
      if (confInput.value === '') { clearError(confInput); }
      else if (confInput.value !== passVal) { showError(confInput, 'Passwords do not match.'); }
      else { clearError(confInput); }
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupLiveListeners);
} else {
  setupLiveListeners();
}
