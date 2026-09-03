const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/i;
const phonePattern = /^(\+?\d{1,4}[\s-]?)?\(?\d{1,4}\)?[\s-]?\d{3,4}[\s-]?\d{3,4}$|^0\d{10}$|^\d{10,11}$/;
const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
const otpPattern = /^\d+$/;

function validateForm() {
  const fullName = document.getElementById('fullName');
  if (fullName) {
    const errorSpan = fullName.parentElement ? fullName.parentElement.querySelector('.error-text') : null;
    if (fullName.value.trim() === '') {
      fullName.classList.add('input-error');
      if (errorSpan) {
        errorSpan.textContent = 'FULL NAME REQUIRED';
        errorSpan.hidden = false;
      }
      alert('FULL NAME REQUIRED');
      fullName.focus();
      return false;
    } else {
      fullName.classList.remove('input-error');
      if (errorSpan) {
        errorSpan.textContent = '';
        errorSpan.hidden = true;
      }
    }
  }

  const email = document.getElementById('emailAddress');
  if (email) {
    const errorSpan = email.parentElement ? email.parentElement.querySelector('.error-text') : null;
    const value = email.value.trim();
    if (value === '') {
      email.classList.add('input-error');
      if (errorSpan) {
        errorSpan.textContent = 'EMAIL ADDRESS REQUIRED';
        errorSpan.hidden = false;
      }
      alert('EMAIL ADDRESS REQUIRED');
      email.focus();
      return false;
    } else if (!gmailPattern.test(value)) {
      email.classList.add('input-error');
      if (errorSpan) {
        errorSpan.textContent = 'Please enter a valid @gmail.com address.';
        errorSpan.hidden = false;
      }
      alert('Please enter a valid @gmail.com address.');
      email.focus();
      return false;
    } else {
      email.classList.remove('input-error');
      if (errorSpan) {
        errorSpan.textContent = '';
        errorSpan.hidden = true;
      }
    }
  }

  const phone = document.getElementById('phoneNumber');
  if (phone) {
    const errorSpan = phone.parentElement ? phone.parentElement.querySelector('.error-text') : null;
    const value = phone.value.trim();
    if (value === '') {
      phone.classList.add('input-error');
      if (errorSpan) {
        errorSpan.textContent = 'PHONE NUMBER REQUIRED';
        errorSpan.hidden = false;
      }
      alert('PHONE NUMBER REQUIRED');
      phone.focus();
      return false;
    } else if (!phonePattern.test(value)) {
      phone.classList.add('input-error');
      if (errorSpan) {
        errorSpan.textContent = 'Please enter a valid phone number.';
        errorSpan.hidden = false;
      }
      alert('Please enter a valid phone number.');
      phone.focus();
      return false;
    } else {
      phone.classList.remove('input-error');
      if (errorSpan) {
        errorSpan.textContent = '';
        errorSpan.hidden = true;
      }
    }
  }

  const otp = document.getElementById('otp') || document.getElementById('otpCode');
  if (otp) {
    const errorSpan = otp.parentElement ? otp.parentElement.querySelector('.error-text') : null;
    const value = otp.value.trim();
    if (value === '') {
      otp.classList.add('input-error');
      if (errorSpan) {
        errorSpan.textContent = 'OTP CODE REQUIRED';
        errorSpan.hidden = false;
      }
      alert('OTP CODE REQUIRED');
      otp.focus();
      return false;
    } else if (!otpPattern.test(value)) {
      otp.classList.add('input-error');
      if (errorSpan) {
        errorSpan.textContent = 'OTP must contain only numbers.';
        errorSpan.hidden = false;
      }
      alert('OTP must contain only numbers.');
      otp.focus();
      return false;
    } else {
      otp.classList.remove('input-error');
      if (errorSpan) {
        errorSpan.textContent = '';
        errorSpan.hidden = true;
      }
    }
  }

  const password = document.getElementById('password') || document.getElementById('newPassword');
  if (password) {
    const errorSpan = password.parentElement ? password.parentElement.querySelector('.error-text') : null;
    const value = password.value;
    const emptyMsg = password.id === 'newPassword' ? 'NEW PASSWORD REQUIRED' : 'PASSWORD REQUIRED';
    if (value === '') {
      password.classList.add('input-error');
      if (errorSpan) {
        errorSpan.textContent = emptyMsg;
        errorSpan.hidden = false;
      }
      alert(emptyMsg);
      password.focus();
      return false;
    } else if (!passwordPattern.test(value)) {
      password.classList.add('input-error');
      if (errorSpan) {
        errorSpan.textContent = 'Min 8 characters, at least 1 letter and 1 number.';
        errorSpan.hidden = false;
      }
      alert('Min 8 characters, at least 1 letter and 1 number.');
      password.focus();
      return false;
    } else {
      password.classList.remove('input-error');
      if (errorSpan) {
        errorSpan.textContent = '';
        errorSpan.hidden = true;
      }
    }
  }

  const confirmPass = document.getElementById('confirmedPassword');
  if (confirmPass) {
    const errorSpan = confirmPass.parentElement ? confirmPass.parentElement.querySelector('.error-text') : null;
    const pass = document.getElementById('newPassword') || document.getElementById('password');
    const confirmVal = confirmPass.value;
    const passVal = pass ? pass.value : '';
    if (confirmVal === '') {
      confirmPass.classList.add('input-error');
      if (errorSpan) {
        errorSpan.textContent = 'CONFIRM PASSWORD REQUIRED';
        errorSpan.hidden = false;
      }
      alert('CONFIRM PASSWORD REQUIRED');
      confirmPass.focus();
      return false;
    } else if (confirmVal !== passVal) {
      confirmPass.classList.add('input-error');
      if (errorSpan) {
        errorSpan.textContent = 'Passwords do not match.';
        errorSpan.hidden = false;
      }
      alert('Passwords do not match.');
      confirmPass.focus();
      return false;
    } else {
      confirmPass.classList.remove('input-error');
      if (errorSpan) {
        errorSpan.textContent = '';
        errorSpan.hidden = true;
      }
    }
  }

  return true;
}

window.validateForm = validateForm;

function setupLiveListeners() {
  const fullNameInput = document.getElementById('fullName');
  if (fullNameInput) {
    fullNameInput.addEventListener('input', () => {
      const errorSpan = fullNameInput.parentElement ? fullNameInput.parentElement.querySelector('.error-text') : null;
      if (fullNameInput.value.trim() !== '') {
        fullNameInput.classList.remove('input-error');
        if (errorSpan) {
          errorSpan.textContent = '';
          errorSpan.hidden = true;
        }
      }
    });
  }

  const emailInput = document.getElementById('emailAddress');
  if (emailInput) {
    emailInput.addEventListener('input', () => {
      const errorSpan = emailInput.parentElement ? emailInput.parentElement.querySelector('.error-text') : null;
      const val = emailInput.value.trim();
      if (val === '') {
        emailInput.classList.remove('input-error');
        if (errorSpan) {
          errorSpan.textContent = '';
          errorSpan.hidden = true;
        }
      } else if (!gmailPattern.test(val)) {
        emailInput.classList.add('input-error');
        if (errorSpan) {
          errorSpan.textContent = 'Please enter a valid @gmail.com address.';
          errorSpan.hidden = false;
        }
      } else {
        emailInput.classList.remove('input-error');
        if (errorSpan) {
          errorSpan.textContent = '';
          errorSpan.hidden = true;
        }
      }
    });
  }

  const phoneInput = document.getElementById('phoneNumber');
  if (phoneInput) {
    phoneInput.addEventListener('input', () => {
      const errorSpan = phoneInput.parentElement ? phoneInput.parentElement.querySelector('.error-text') : null;
      const val = phoneInput.value.trim();
      if (val === '') {
        phoneInput.classList.remove('input-error');
        if (errorSpan) {
          errorSpan.textContent = '';
          errorSpan.hidden = true;
        }
      } else if (!phonePattern.test(val)) {
        phoneInput.classList.add('input-error');
        if (errorSpan) {
          errorSpan.textContent = 'Please enter a valid phone number.';
          errorSpan.hidden = false;
        }
      } else {
        phoneInput.classList.remove('input-error');
        if (errorSpan) {
          errorSpan.textContent = '';
          errorSpan.hidden = true;
        }
      }
    });
  }

  const otpInput = document.getElementById('otp') || document.getElementById('otpCode');
  if (otpInput) {
    otpInput.addEventListener('input', () => {
      const errorSpan = otpInput.parentElement ? otpInput.parentElement.querySelector('.error-text') : null;
      const val = otpInput.value.trim();
      if (val === '') {
        otpInput.classList.remove('input-error');
        if (errorSpan) {
          errorSpan.textContent = '';
          errorSpan.hidden = true;
        }
      } else if (!otpPattern.test(val)) {
        otpInput.classList.add('input-error');
        if (errorSpan) {
          errorSpan.textContent = 'OTP must contain only numbers.';
          errorSpan.hidden = false;
        }
      } else {
        otpInput.classList.remove('input-error');
        if (errorSpan) {
          errorSpan.textContent = '';
          errorSpan.hidden = true;
        }
      }
    });
  }

  const passInput = document.getElementById('password') || document.getElementById('newPassword');
  if (passInput) {
    passInput.addEventListener('input', () => {
      const errorSpan = passInput.parentElement ? passInput.parentElement.querySelector('.error-text') : null;
      const val = passInput.value;
      if (val === '') {
        passInput.classList.remove('input-error');
        if (errorSpan) {
          errorSpan.textContent = '';
          errorSpan.hidden = true;
        }
      } else if (!passwordPattern.test(val)) {
        passInput.classList.add('input-error');
        if (errorSpan) {
          errorSpan.textContent = 'Min 8 characters, at least 1 letter and 1 number.';
          errorSpan.hidden = false;
        }
      } else {
        passInput.classList.remove('input-error');
        if (errorSpan) {
          errorSpan.textContent = '';
          errorSpan.hidden = true;
        }
      }

      const confInput = document.getElementById('confirmedPassword');
      if (confInput && confInput.value !== '') {
        const confSpan = confInput.parentElement ? confInput.parentElement.querySelector('.error-text') : null;
        if (confInput.value !== val) {
          confInput.classList.add('input-error');
          if (confSpan) {
            confSpan.textContent = 'Passwords do not match.';
            confSpan.hidden = false;
          }
        } else {
          confInput.classList.remove('input-error');
          if (confSpan) {
            confSpan.textContent = '';
            confSpan.hidden = true;
          }
        }
      }
    });
  }

  const confInput = document.getElementById('confirmedPassword');
  if (confInput) {
    confInput.addEventListener('input', () => {
      const errorSpan = confInput.parentElement ? confInput.parentElement.querySelector('.error-text') : null;
      const pass = document.getElementById('newPassword') || document.getElementById('password');
      const passVal = pass ? pass.value : '';
      if (confInput.value === '') {
        confInput.classList.remove('input-error');
        if (errorSpan) {
          errorSpan.textContent = '';
          errorSpan.hidden = true;
        }
      } else if (confInput.value !== passVal) {
        confInput.classList.add('input-error');
        if (errorSpan) {
          errorSpan.textContent = 'Passwords do not match.';
          errorSpan.hidden = false;
        }
      } else {
        confInput.classList.remove('input-error');
        if (errorSpan) {
          errorSpan.textContent = '';
          errorSpan.hidden = true;
        }
      }
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupLiveListeners);
} else {
  setupLiveListeners();
}