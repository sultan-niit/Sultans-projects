let apiBaseUrl = "https://drakionoil.com/api/niit-api-testing";
function closeModal() {
    const alertModal = document.getElementById('alert');
     alertModal.classList.remove("alertModal");
}


function alertModal(success, message, redirectUrl = "sign-in.html") {
    const alertModal = document.getElementById('alert');
    if (!alertModal) return;
    if (success == true) {
        alertModal.innerHTML =
            `<div class="alert-container">
                <div class="image-wrapper">
                    <img src="/all-images/icon-images/success.jpeg" alt="Success">
                </div>
                <h4>${message}</h4>
              <a href="${redirectUrl}"> <button class="btn" title="Okay, Thanks">Okay, Thanks</button> </a>
            </div>`;
    } else {
    alertModal.innerHTML =
      ` <div class="alert-container">
            <div class="image-wrapper">
                <img src="/all-images/icon-images/warning.jpeg" alt="Warning">
            </div>
            <h4>${message}</h4>
            <button class="btn" onclick="closeModal();" title="Okay">Okay</button>
            </div>
        `;
    }
    
    alertModal.classList.add("alertModal");
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
        alertModal(false, "EMAIL ADDRESS REQUIRED");
        return;
    }

    if (!emailAddress.includes("@") || !emailAddress.includes(".")) {
        alertModal(false, "ENTER A VALID EMAIL");
        return;
    }

    if (!phoneNumber) {
        alertModal(false, "PHONE NUMBER IS REQUIRED");
        return;
    }

    const phoneDigitsOnly = phoneNumber.startsWith("+") ? phoneNumber.slice(1) : phoneNumber;

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



    const submitBtn = document.getElementById('submitBtnId');
    submitBtn.innerHTML = 'Processing...';
    submitBtn.disabled = true;

    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("emailAddress", emailAddress);
    formData.append("phoneNumber", phoneNumber);
    formData.append("password", password);


    try {

        const response = await fetch(apiBaseUrl + '/auth/sign-up', {
            method: "POST",
            body: formData
        });

        const fetchData = await response.json();

        if (fetchData.success == true) {
            sessionStorage.setItem("userSignUpSession", JSON.stringify(fetchData));
            alertModal(fetchData.success, fetchData.message);
        } else {
            alertModal(fetchData.success, fetchData.message);
        }

        submitBtn.innerHTML = 'Sign Up';
        submitBtn.disabled = false;

    } catch (error) {
        console.error(error);
        alertModal(false, error.message);

        submitBtn.innerHTML = 'Sign Up';
        submitBtn.disabled = false;
    }
}

async function signInHandle() {

    const emailAddress = document.getElementById("emailAddress").value.trim();
    const password = document.getElementById("password").value;

    if (!emailAddress) {
        alertModal(false, "EMAIL ADDRESS REQUIRED");
        return;
    }

    if (!emailAddress.includes("@") || !emailAddress.includes(".")) {
        alertModal(false, "ENTER A VALID EMAIL");
        return;
    }


    if (!password) {
        alertModal(false, "PASSWORD REQUIRED");
        return;
    }

    const signInBtn = document.getElementById('signInBtnId');
    signInBtn.innerHTML = 'Authenticating...';
    signInBtn.disabled = true;

    try {

        const response = await fetch(apiBaseUrl + '/auth/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                emailAddress,
                password
            })
        });

        const fetchData = await response.json();

        if (fetchData.success == true) {
            sessionStorage.setItem("userSignUpSession", JSON.stringify(fetchData));
            alertModal(fetchData.success, fetchData.message + ' Hi, ' + (fetchData.data?.emailAddress || emailAddress), "portal.html");
        } else {
            alertModal(fetchData.success, fetchData.message);
        }

        signInBtn.innerHTML = 'Sign In';
        signInBtn.disabled = false;

    } catch (error) {
        console.error(error);
        alertModal(false, error.message);

        signInBtn.innerHTML = 'Sign In';
        signInBtn.disabled = false;
    }
}

async function forgotPasswordHandle() {

    const emailAddress = document.getElementById("emailAddress").value.trim();


    if (!emailAddress) {
        alertModal(false, "EMAIL ADDRESS REQUIRED");
        return;
    }

    if (!emailAddress.includes("@") || !emailAddress.includes(".")) {
        alertModal(false, "ENTER A VALID EMAIL");
        return;
    }

    const submitBtn = document.getElementById('submitBtnId');
    submitBtn.innerHTML = 'Processing...';
    submitBtn.disabled = true;

    try {

        const response = await fetch(apiBaseUrl + '/auth/forgot-password', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                emailAddress
            })
        });

        const fetchData = await response.json();

        if (fetchData.success == true) {
            alertModal(fetchData.success, `${fetchData.message} | YOUR OTP CODE IS: ${fetchData.data.otpCode}`, "reset-password.html");
        } else {
            alertModal(fetchData.success, fetchData.message);
        }

        submitBtn.innerHTML = 'Proceed to Forgot Password';
        submitBtn.disabled = false;

    } catch (error) {
        console.error(error);
        alertModal(false, error.message);

        submitBtn.innerHTML = 'Proceed to Forgot Password';
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

    if (!confirmedPassword) {
        alertModal(false, "CONFIRM PASSWORD REQUIRED");
        return;
    }

    if (confirmedPassword !== password) {
        alertModal(false, "PASSWORDS DO NOT MATCH");
        return;
    }



    const submitBtn = document.getElementById('submitBtnId');
    submitBtn.innerHTML = 'Processing...';
    submitBtn.disabled = true;

    try {

        const response = await fetch(apiBaseUrl + '/auth/reset-password', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                otpCode,
                password,
                confirmedPassword
            })
        });

        const fetchData = await response.json();

        if (fetchData.success == true) {
            alertModal(fetchData.success, fetchData.message, "sign-in.html");
        } else {
            alertModal(fetchData.success, fetchData.message);
        }

        submitBtn.innerHTML = 'Submit';
        submitBtn.disabled = false;

    } catch (error) {
        console.error(error);
        alertModal(false, error.message);

        submitBtn.innerHTML = 'Submit';
        submitBtn.disabled = false;
    }
}