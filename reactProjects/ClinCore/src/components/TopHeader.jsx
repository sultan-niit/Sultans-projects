import { useModalState } from "../js/components/ModalContext";

export default function TopHeader({ ...props }) {
    const { openProfileModal } = useModalState();

    const handleProfileClick = () => {
        openProfileModal({
            fullName: 'Sultoon Abdulraheem',
            email: 'sultoon.abdulraheem@clincore.com',
            position: 'Chief Medical Administrator',
            phone: '080 3123 4567',
            status: 'Active',
            lastLogin: '2026-09-26 12:40 PM',
            avatar: 'SA',
            department: 'Medical Administration'
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

                    <div className="profile-div" onClick={handleProfileClick} style={{ cursor: 'pointer' }}>
                        <div className="profile-img">
                            <img src="/all-images/body-images/profile-avatar.jpg" alt="sultoon abdulraheem" />
                        </div>
                        <span className="profile-name">sultoon abdulraheem</span>
                        <i className="bi bi-chevron-down"></i>
                    </div>
                </div>
            </div>
        </>
    );
}



