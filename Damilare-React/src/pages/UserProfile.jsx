import { useEffect, useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import dmlAvatar from "../assets/body-images/DML AVATER.png";
import { useAuth } from "../context/AuthContext";
import { formatEmailToName, getInitials, getStaffList, isSuperAdminEmail } from "../utils/staffStorage";

export default function UserProfile() {
  const { user } = useAuth();
  const [currentUser, setCurrentUser] = useState(user);
  const [staffInfo, setStaffInfo] = useState(null);

  useEffect(() => {
    let resolved = user;
    if (!resolved) {
      try {
        const stored = localStorage.getItem("user") || sessionStorage.getItem("userSession");
        if (stored) {
          const parsed = JSON.parse(stored);
          resolved = parsed.data || parsed;
        }
      } catch (e) {
        console.error(e);
      }
    }
    setCurrentUser(resolved);

    if (resolved?.emailAddress || resolved?.email) {
      const email = (resolved.emailAddress || resolved.email).trim().toLowerCase();
      const staffList = getStaffList();
      const found = staffList.find(
        (s) => s.emailAddress?.trim().toLowerCase() === email
      );
      setStaffInfo(found);
    }
  }, [user]);

  const email = currentUser?.emailAddress || currentUser?.email || "dml@gmail.com";
  const isSuperAdmin = isSuperAdminEmail(email);

  const fullName =
    currentUser?.fullName ||
    (currentUser?.firstName
      ? `${currentUser.firstName} ${currentUser?.lastName || ""}`.trim()
      : staffInfo?.fullName ||
        (isSuperAdmin ? "Wahab Damilare (DML)" : formatEmailToName(email)));

  const nameParts = fullName.trim().split(/\s+/);
  const firstName = currentUser?.firstName || nameParts[0] || (isSuperAdmin ? "Damilare" : fullName);
  const lastName = currentUser?.lastName || (nameParts.length > 1 ? nameParts.slice(1).join(" ") : "");
  const phone =
    currentUser?.phoneNumber ||
    currentUser?.phoneNo ||
    staffInfo?.phoneNumber ||
    (isSuperAdmin ? "+234 801 234 5678" : "Not Provided");

  // Role and Department from Staff Directory
  const assignedRole = staffInfo?.role || (isSuperAdmin ? "Super Administrator" : "Pending Assignment");
  const assignedDept = staffInfo?.department || (isSuperAdmin ? "Executive & Board Administration" : "Unassigned");
  const joinDate =
    staffInfo?.dateEmployed && staffInfo.dateEmployed !== "Pending"
      ? `Joined ${staffInfo.dateEmployed}`
      : isSuperAdmin
      ? "Joined Jan 2022"
      : "Registration Pending";

  const isAccountActive = staffInfo?.status === "Active" || isSuperAdmin;

  return (
    <DashboardLayout>
      <section className="user-profile-hero">
        <div className="hero-left">
          <div className="hero-avatar-wrapper">
            {isSuperAdmin ? (
              <img src={dmlAvatar} alt="Avatar" className="hero-avatar-img" />
            ) : (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  backgroundColor: "var(--purple-primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: "32px",
                  fontWeight: "bold",
                  fontFamily: "title-font",
                }}
              >
                {getInitials(fullName)}
              </div>
            )}
            <span className="online-indicator" title="Active Now"></span>
          </div>

          <div className="hero-meta">
            <div className="name-row">
              <h1>{fullName}</h1>
              <span
                className="role-badge"
                style={{
                  backgroundColor: isSuperAdmin ? "var(--role-admin-bg)" : "var(--role-staff-bg)",
                  color: isSuperAdmin ? "var(--role-admin-text)" : "var(--role-staff-text)",
                }}
              >
                {isSuperAdmin ? "Super Administrator" : assignedRole}
              </span>
              {isAccountActive && (
                <span className="verified-badge">
                  <i className="bi bi-patch-check-fill"></i> {isSuperAdmin ? "Verified Admin" : "Active Staff"}
                </span>
              )}
            </div>

            <div className="info-chips">
              <span className="chip-item">
                <i className="bi bi-envelope"></i> {email}
              </span>
              <span className="chip-item">
                <i className="bi bi-telephone"></i> {phone}
              </span>
              <span className="chip-item">
                <i className="bi bi-geo-alt"></i> Lagos, Nigeria
              </span>
              <span className="chip-item">
                <i className="bi bi-calendar3"></i> {joinDate}
              </span>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <button type="button" className="btn btn-outline">
            <i className="bi bi-shield-lock"></i> Security
          </button>
          <button type="button" className="btn btn-purple">
            <i className="bi bi-pencil-square"></i> Edit Profile
          </button>
        </div>
      </section>

      <section className="user-metrics-grid">
        <div className="metric-card">
          <div className="card-icon-box icon-purple">
            <i className="bi bi-shop"></i>
          </div>
          <div className="metric-info">
            <span className="metric-num">5</span>
            <span className="metric-label">Active Store Branches</span>
          </div>
        </div>

        <div className="metric-card">
          <div className="card-icon-box icon-blue">
            <i className="bi bi-people-fill"></i>
          </div>
          <div className="metric-info">
            <span className="metric-num">{isSuperAdmin ? "24" : "1"}</span>
            <span className="metric-label">{isSuperAdmin ? "Staff Members Managed" : "Team Member"}</span>
          </div>
        </div>

        <div className="metric-card">
          <div className="card-icon-box icon-green">
            <i className="bi bi-currency-dollar"></i>
          </div>
          <div className="metric-info">
            <span className="metric-num">{isSuperAdmin ? "$148,500" : "$0.00"}</span>
            <span className="metric-label">{isSuperAdmin ? "Supervised Gross Revenue" : "Sales Recorded"}</span>
          </div>
        </div>

        <div className="metric-card">
          <div className="card-icon-box icon-yellow">
            <i className="bi bi-shield-check"></i>
          </div>
          <div className="metric-info">
            <span className="metric-num">98%</span>
            <span className="metric-label">Account Security Score</span>
          </div>
        </div>
      </section>

      <section className="user-content-grid">
        <div className="grid-column">
          <div className="info-card">
            <div className="card-header">
              <h2>
                <i className="bi bi-person-lines-fill"></i> Personal Information
              </h2>
              <button type="button" className="btn-edit-sm">
                <i className="bi bi-pencil"></i> Edit
              </button>
            </div>
            <div className="fields-grid">
              <div className="field-item">
                <span className="field-label">First Name</span>
                <span className="field-value">{firstName}</span>
              </div>
              <div className="field-item">
                <span className="field-label">Last Name</span>
                <span className="field-value">{lastName}</span>
              </div>
              <div className="field-item">
                <span className="field-label">Account Role</span>
                <span className="field-value highlight-primary">{assignedRole}</span>
              </div>
              <div className="field-item">
                <span className="field-label">Department</span>
                <span className="field-value">{assignedDept}</span>
              </div>
              <div className="field-item">
                <span className="field-label">Primary Email</span>
                <span className="field-value">{email}</span>
              </div>
              <div className="field-item">
                <span className="field-label">Phone Number</span>
                <span className="field-value">{phone}</span>
              </div>
              <div className="field-item full-width">
                <span className="field-label">Residential Address</span>
                <span className="field-value">
                  Plot 12, Admiralty Way, Lekki Phase 1, Lagos State, Nigeria
                </span>
              </div>
            </div>
          </div>

          <div className="info-card">
            <div className="card-header">
              <h2>
                <i className="bi bi-building"></i> Company &amp; Business Profile
              </h2>
              <button type="button" className="btn-edit-sm">
                <i className="bi bi-pencil"></i> Edit
              </button>
            </div>
            <div className="fields-grid">
              <div className="field-item">
                <span className="field-label">Business Name</span>
                <span className="field-value highlight-primary">
                  Damilare Power Solutions Ltd.
                </span>
              </div>
              <div className="field-item">
                <span className="field-label">Assigned Department</span>
                <span className="field-value">{assignedDept}</span>
              </div>
              <div className="field-item">
                <span className="field-label">Corporate Email</span>
                <span className="field-value">{email}</span>
              </div>
              <div className="field-item">
                <span className="field-label">Employment Date</span>
                <span className="field-value">
                  {staffInfo?.dateEmployed || (isSuperAdmin ? "01/10/2022" : "Pending Assignment")}
                </span>
              </div>
              <div className="field-item full-width">
                <span className="field-label">Business Office Address</span>
                <span className="field-value">
                  Suite 402, DML Towers, Victoria Island, Lagos State
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid-column">
          <div className="info-card">
            <div className="card-header">
              <h2>
                <i className="bi bi-shield-check"></i> Security &amp; Access Permissions
              </h2>
              <button type="button" className="btn-edit-sm">
                <i className="bi bi-gear"></i> Manage
              </button>
            </div>
            <div className="fields-grid">
              <div className="field-item">
                <span className="field-label">Access Level</span>
                <span className="field-value highlight-primary">
                  {isSuperAdmin ? "Super Admin (Level 3 - Full Access)" : "Staff Member (Level 1 - Read Access)"}
                </span>
              </div>
              <div className="field-item">
                <span className="field-label">Account Status</span>
                <span className="field-value">
                  <span className={`badge ${isAccountActive ? "in-stock-badge" : "out-of-stock-badge"}`}>
                    {staffInfo?.status || (isSuperAdmin ? "Active" : "Pending")}
                  </span>
                </span>
              </div>
              <div className="field-item">
                <span className="field-label">Password Protection</span>
                <span className="field-value">Encrypted &bull; Active</span>
              </div>
              <div className="field-item">
                <span className="field-label">Session Idle Timeout</span>
                <span className="field-value">30 Minutes</span>
              </div>
            </div>

            <div className="authorized-devices-section">
              <span className="field-label devices-heading">Authorized Devices</span>
              <div className="security-devices-list">
                <div className="device-item">
                  <div className="device-left">
                    <i className="bi bi-laptop"></i>
                    <div className="device-meta">
                      <span className="device-name">Windows PC &bull; Chrome</span>
                      <span className="device-location">
                        Lagos, Nigeria &bull; Active Session
                      </span>
                    </div>
                  </div>
                  <span className="device-badge badge-active">Active</span>
                </div>
              </div>
            </div>
          </div>

          <div className="info-card">
            <div className="card-header">
              <h2>
                <i className="bi bi-clock-history"></i> Recent Activity Log
              </h2>
            </div>
            <div className="timeline-list">
              <div className="timeline-item">
                <div className="timeline-icon icon-bg-green">
                  <i className="bi bi-check-lg"></i>
                </div>
                <div className="timeline-content">
                  <span className="timeline-text">
                    Logged in successfully as {fullName}
                  </span>
                  <span className="timeline-time">Today, Just now</span>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-icon icon-bg-blue">
                  <i className="bi bi-shield-lock"></i>
                </div>
                <div className="timeline-content">
                  <span className="timeline-text">
                    Profile credentials authenticated
                  </span>
                  <span className="timeline-time">Today</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
}
