let apiBaseUrl = "https://drakionoil.com/api/niit-api-testing";
function closeModal() {
  const alertModal = document.getElementById("alert");
  alertModal.classList.remove("alertModal");
  // Restore page scroll
  document.documentElement.style.overflow = "";
  document.body.style.overflow = "";
}

function alertModal(success, message, redirectUrl = "index.html") {
  let alertEl = document.getElementById("alert");

  // If #alert doesn't exist yet, create and append to body
  if (!alertEl) {
    alertEl = document.createElement("div");
    alertEl.id = "alert";
    alertEl.className = "alert-overlay";
    document.body.appendChild(alertEl);
  }

  // Ensure it is a direct child of body (escapes any overflow:hidden container)
  if (alertEl.parentElement !== document.body) {
    document.body.appendChild(alertEl);
  }

  if (success == true) {
    alertEl.innerHTML = `<div class="alert-container alert-container--success">
                <div class="image-wrapper">
                    <img src="/all-images/icon-images/success.jpeg" alt="Success">
                </div>
                <h4>${message}</h4>
              <a href="${redirectUrl}"> <button class="btn btn--success" title="Okay, Thanks">Okay, Thanks</button> </a>
            </div>`;
  } else {
    alertEl.innerHTML = `<div class="alert-container alert-container--warning">
            <div class="image-wrapper image-wrapper--warning">
                <img src="/all-images/icon-images/warning.jpeg" alt="Warning">
            </div>
            <h4>${message}</h4>
            <button class="btn btn--warning" onclick="closeModal();" title="Okay, Thanks">Okay, Thanks</button>
            </div>
        `;
  }

  // Lock page scroll while modal is open
  document.documentElement.style.overflow = "hidden";
  document.body.style.overflow = "hidden";

  alertEl.classList.add("alertModal");
}

async function signUpHandle() {
  const fullName = document.getElementById("fullName").value.trim();
  const emailAddress = document.getElementById("emailAddress").value.trim();
  const phoneNumber = document.getElementById("phoneNumber").value.trim();
  const password = document.getElementById("password").value;

  if (!fullName) {
    alertModal(false, "FULL NAME REQUIRED");
    return;
  }

  if (!emailAddress) {
    if (typeof showError === "function") showError(document.getElementById("emailAddress"), "Email address is required.");
    alertModal(false, "EMAIL ADDRESS REQUIRED");
    return;
  } else if (typeof gmailPattern !== "undefined" && !gmailPattern.test(emailAddress)) {
    if (typeof showError === "function") showError(document.getElementById("emailAddress"), "Please enter a valid @gmail.com address.");
    alertModal(false, "PLEASE ENTER A VALID @GMAIL.COM ADDRESS");
    return;
  } else if (!emailAddress.includes("@") || !emailAddress.includes(".")) {
    if (typeof showError === "function") showError(document.getElementById("emailAddress"), "Please enter a valid email address.");
    alertModal(false, "ENTER A VALID EMAIL");
    return;
  } else {
    if (typeof clearError === "function") clearError(document.getElementById("emailAddress"));
  }

  if (!phoneNumber) {
    alertModal(false, "PHONE NUMBER IS REQUIRED");
    return;
  }

  const phoneDigitsOnly = phoneNumber.startsWith("+")
    ? phoneNumber.slice(1)
    : phoneNumber;

  if (isNaN(phoneDigitsOnly) || phoneDigitsOnly.trim() === "") {
    alertModal(false, "PHONE NUMBER MUST CONTAIN ONLY NUMBERS");
    return;
  }

  if (phoneNumber.length < 11 || phoneNumber.length > 14) {
    alertModal(false, "INVALID PHONE NUMBER");
    return;
  }

  if (!password) {
    alertModal(false, "PASSWORD REQUIRED");
    return;
  }

  if (password.length < 8) {
    alertModal(false, "PASSWORD MUST NOT BE LESS THAN 8 CHARACTERS");
    return;
  }

  const pwPattern = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
  if (!pwPattern.test(password)) {
    alertModal(false, "PASSWORD MUST CONTAIN AT LEAST 1 LETTER AND 1 NUMBER");
    return;
  }

  const submitBtn = document.getElementById("submitBtnId");
  submitBtn.innerHTML = "Processing...";
  submitBtn.disabled = true;

  const formData = new FormData();
  formData.append("fullName", fullName);
  formData.append("emailAddress", emailAddress);
  formData.append("phoneNumber", phoneNumber);
  formData.append("password", password);

  try {
    const response = await fetch(apiBaseUrl + "/auth/sign-up", {
      method: "POST",
      body: formData,
    });

    const fetchData = await response.json();

    if (fetchData.success == true) {
      sessionStorage.setItem("userSignUpSession", JSON.stringify(fetchData));
      alertModal(fetchData.success, fetchData.message);
    } else {
      alertModal(fetchData.success, fetchData.message);
    }

    submitBtn.innerHTML = "Sign Up";
    submitBtn.disabled = false;
  } catch (error) {
    console.error(error);
    alertModal(false, error.message);

    submitBtn.innerHTML = "Sign Up";
    submitBtn.disabled = false;
  }
}

async function signInHandle() {
  const emailEl    = document.getElementById("emailAddress");
  const passwordEl = document.getElementById("password");

  const emailAddress = emailEl.value.trim();
  const password     = passwordEl.value;

  // Sequential — stops at the FIRST error so only one field goes red at a time
  if (!emailAddress) {
    if (typeof showError === "function") showError(emailEl, "Email address is required.");
    alertModal(false, "EMAIL ADDRESS REQUIRED");
    return;
  } else if (typeof gmailPattern !== "undefined" && !gmailPattern.test(emailAddress)) {
    if (typeof showError === "function") showError(emailEl, "Please enter a valid @gmail.com address.");
    alertModal(false, "PLEASE ENTER A VALID @GMAIL.COM ADDRESS");
    return;
  } else if (!emailAddress.includes("@") || !emailAddress.includes(".")) {
    if (typeof showError === "function") showError(emailEl, "Please enter a valid email address.");
    alertModal(false, "ENTER A VALID EMAIL");
    return;
  } else {
    if (typeof clearError === "function") clearError(emailEl);
  }

  if (!password) {
    if (typeof showError === "function") showError(passwordEl, "Password is required.");
    alertModal(false, "PASSWORD REQUIRED");
    return;
  } else if (password.length < 8) {
    if (typeof showError === "function") showError(passwordEl, "Password must be at least 8 characters.");
    alertModal(false, "PASSWORD MUST BE AT LEAST 8 CHARACTERS");
    return;
  } else {
    if (typeof clearError === "function") clearError(passwordEl);
  }

  const signInBtn = document.getElementById("signInBtnId");
  signInBtn.innerHTML = "Authenticating...";
  signInBtn.disabled = true;

  try {
    const response = await fetch(apiBaseUrl + "/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emailAddress,
        password,
      }),
    });

    const fetchData = await response.json();

    if (fetchData.success == true) {
      sessionStorage.setItem("userSignUpSession", JSON.stringify(fetchData));
      alertModal(
        fetchData.success,
        fetchData.message +
          " Hi, " +
          (fetchData.data?.emailAddress || emailAddress),
        "dashboard.html",
      );
    } else {
      alertModal(fetchData.success, fetchData.message);
    }

    signInBtn.innerHTML = "Sign In";
    signInBtn.disabled = false;
  } catch (error) {
    console.error(error);
    alertModal(false, error.message);

    signInBtn.innerHTML = "Sign In";
    signInBtn.disabled = false;
  }
}

async function forgotPasswordHandle() {
  const emailAddress = document.getElementById("emailAddress").value.trim();

  if (!emailAddress) {
    if (typeof showError === "function") showError(document.getElementById("emailAddress"), "Email address is required.");
    alertModal(false, "EMAIL ADDRESS REQUIRED");
    return;
  } else if (typeof gmailPattern !== "undefined" && !gmailPattern.test(emailAddress)) {
    if (typeof showError === "function") showError(document.getElementById("emailAddress"), "Please enter a valid @gmail.com address.");
    alertModal(false, "PLEASE ENTER A VALID @GMAIL.COM ADDRESS");
    return;
  } else if (!emailAddress.includes("@") || !emailAddress.includes(".")) {
    if (typeof showError === "function") showError(document.getElementById("emailAddress"), "Please enter a valid email address.");
    alertModal(false, "ENTER A VALID EMAIL");
    return;
  } else {
    if (typeof clearError === "function") clearError(document.getElementById("emailAddress"));
  }

  const submitBtn = document.getElementById("submitBtnId");
  submitBtn.innerHTML = "Processing...";
  submitBtn.disabled = true;

  try {
    const response = await fetch(apiBaseUrl + "/auth/forgot-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emailAddress,
      }),
    });

    const fetchData = await response.json();

    if (fetchData.success == true) {
      alertModal(
        fetchData.success,
        `${fetchData.message} | YOUR OTP CODE IS: ${fetchData.data.otpCode}`,
        "reset-password.html",
      );
    } else {
      alertModal(fetchData.success, fetchData.message);
    }

    submitBtn.innerHTML = "Proceed to Forgot Password";
    submitBtn.disabled = false;
  } catch (error) {
    console.error(error);
    alertModal(false, error.message);

    submitBtn.innerHTML = "Proceed to Forgot Password";
    submitBtn.disabled = false;
  }
}

async function resetPasswordHandle() {
  const otpCode = document.getElementById("otp").value.trim();
  const password = document.getElementById("newPassword").value;
  const confirmedPassword = document.getElementById("confirmedPassword").value;

  if (!otpCode) {
    alertModal(false, "OTP CODE REQUIRED");
    return;
  }

  if (isNaN(otpCode)) {
    alertModal(false, "OTP CODE MUST CONTAIN ONLY NUMBERS");
    return;
  }

  if (otpCode.length != 6) {
    alertModal(false, "OTP CODE MUST BE 6 DIGITS");
    return;
  }

  if (!password) {
    alertModal(false, "NEW PASSWORD REQUIRED");
    return;
  }
  if (password.length < 8) {
    alertModal(false, "PASSWORD MUST BE AT LEAST 8 CHARACTERS");
    return;
  }

  const pwPattern = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
  if (!pwPattern.test(password)) {
    alertModal(false, "NEW PASSWORD MUST CONTAIN AT LEAST 1 LETTER AND 1 NUMBER");
    return;
  }

  if (!confirmedPassword) {
    alertModal(false, "CONFIRM PASSWORD REQUIRED");
    return;
  }

  if (confirmedPassword !== password) {
    alertModal(false, "PASSWORDS DO NOT MATCH");
    return;
  }

  const submitBtn = document.getElementById("submitBtnId");
  submitBtn.innerHTML = "Processing...";
  submitBtn.disabled = true;

  try {
    const response = await fetch(apiBaseUrl + "/auth/reset-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        otpCode,
        password,
        confirmedPassword,
      }),
    });

    const fetchData = await response.json();

    if (fetchData.success == true) {
      alertModal(fetchData.success, fetchData.message, "index.html");
    } else {
      alertModal(fetchData.success, fetchData.message);
    }

    submitBtn.innerHTML = "Submit";
    submitBtn.disabled = false;
  } catch (error) {
    console.error(error);
    alertModal(false, error.message);

    submitBtn.innerHTML = "Submit";
    submitBtn.disabled = false;
  }
}
