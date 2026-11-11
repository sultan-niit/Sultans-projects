import { useEffect, useState } from "react";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (e) {
      console.error("Failed to load user from localStorage", e);
    }
  }, []);

  const fullName = user
    ? user.fullName || `${user.firstName || ""} ${user.lastName || ""}`.trim() || "User"
    : "";
  const emailAddress = user ? user.emailAddress || user.email || "" : "";
  const phoneNumber = user ? user.phoneNumber || "" : "";

  return (
    <>
      <section className="auth-section">
        <div className="auth-background">
          <div className="overlay-bg">
            <div className="profile-container">
              <div className="profile-wrapper">
                <div className="alert">
                  <div className="alert-success">
                    👋 <span className="alert-highlight">Hi, welcome to your profile</span>
                  </div>
                </div>

                <div className="profile-detail">
                  <h3>Full Name:</h3>
                  <span id="textfullName">{fullName}</span>
                </div>

                <div className="profile-detail">
                  <h3>Email:</h3>
                  <span id="textemailAddress">{emailAddress}</span>
                </div>

                <div className="profile-detail">
                  <h3>Phone Number:</h3>
                  <span id="textphoneNumber">{phoneNumber}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
