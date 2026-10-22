import { useModalState } from "../js/components/ModalContext";
import { useAuth } from "../context/AuthContext";

export default function TopHeader({ ...props }) {
    const { openProfileModal } = useModalState();
    const { user } = useAuth() || {};

    const currentUser = user || (() => {
        try {
            return JSON.parse(localStorage.getItem("user") || "null");
        } catch {
            return null;
        }
    })();

    const displayName =
        currentUser?.fullName ||
        currentUser?.name ||
        currentUser?.staffName ||
        [currentUser?.firstName, currentUser?.lastName].filter(Boolean).join(" ") ||
        currentUser?.emailAddress ||
        currentUser?.email ||
        "Sultoon Abdulraheem";

    const email = currentUser?.emailAddress || currentUser?.email || "sultoon.abdulraheem@clincore.com";
    const position = currentUser?.position || currentUser?.role || "Chief Medical Administrator";
    const phone = currentUser?.phoneNumber || currentUser?.phone || "080 3123 4567";
    const status = currentUser?.status || "Active";
    const lastLogin = currentUser?.lastLogin || "2026-09-26 12:40 PM";
    const department = currentUser?.department || "Medical Administration";

    const initials = displayName
        .split(" ")
        .filter(Boolean)
        .map(part => part[0])
        .join("")
        .slice(0, 2)
        .toUpperCase() || "SA";

    const handleProfileClick = () => {
        openProfileModal({
            fullName: displayName,
            email,
            position,
            phone,
            status,
            lastLogin,
            avatar: initials,
            department,
            ...(currentUser || {})
        }, 'staff');
    };

    return (
        <>
            <div className="top-header">
                {/* Search / Title Section */}
                <div className="search-div">
                    <i className="bi bi-search"></i>
                    <input type="text" className="search-input" placeholder={props.placeHolder || "Search anything"} />
                </div>

                {/* Header Action Buttons & Profile Section */}
                <div className="action-div">
                    <button type="button" className="icon-btn" title="Settings">
                        <i className="bi bi-gear"></i>
                    </button>

                    <button type="button" className="icon-btn" title="Notifications">
                        <i className="bi bi-bell"></i>
                        <span className="notif-dot"></span>
                    </button>

                    <div className="profile-div" onClick={handleProfileClick} style={{ cursor: 'pointer' }} title={`View profile for ${displayName}`}>
                        <div
                            className="profile-img"
                            style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                backgroundColor: 'var(--primary-color-dark, #0d5c56)',
                                color: '#ffffff',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                overflow: 'hidden',
                                flexShrink: 0,
                                border: '1.5px solid var(--border-color)',
                                userSelect: 'none',
                            }}
                        >
                            <span style={{ fontSize: '14px', fontWeight: '700', color: '#ffffff', letterSpacing: '0.5px' }}>
                                {initials}
                            </span>
                        </div>
                        <span className="profile-name">{displayName}</span>
                        <i className="bi bi-chevron-down"></i>
                    </div>
                </div>
            </div>
        </>
    );
}



