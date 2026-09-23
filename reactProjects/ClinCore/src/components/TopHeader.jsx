export default function TopHeader({ ...props }) {
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

                    <div className="profile-div">
                        <div className="profile-img">
                            {/* Profile avatar — update src path to match your actual image */}
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
