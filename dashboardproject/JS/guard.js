/**
 * ROUTE GUARD
 * Runs on all protected pages (dashboard, departments, doctors, etc.)
 * Redirects unauthenticated users back to the login page.
 */
(function () {
  const session = sessionStorage.getItem("userSignUpSession");

  if (!session) {
    window.location.replace("index.html");
    return;
  }

  try {
    const parsed = JSON.parse(session);
    if (!parsed || !parsed.data) {
      sessionStorage.removeItem("userSignUpSession");
      window.location.replace("index.html");
    }
  } catch (e) {
    sessionStorage.removeItem("userSignUpSession");
    window.location.replace("index.html");
  }
})();
