export default function MessagesPanel({ ...props }) {
    return (
        <>
            <div className="messages-wrapper">
                <div className="messages-inbox-panel">
                    <div className="inbox-search-box">
                        <i className="bi bi-search search-icon"></i>
                        <input type="text" className="inbox-search-input" placeholder="Search name, chat, etc" />
                        <button type="button" className="filter-icon-btn" title="Filter Chats">
                            <i className="bi bi-sliders"></i>
                        </button>
                    </div>

                    <div className="conversations-list">
                        <div className="conversation-item">
                            <div className="avatar-container">
                                <img src="all-images/body-images/patient-1.jpg" alt="John Doe" className="avatar-img" />
                            </div>
                            <div className="conversation-details">
                                <div className="conversation-meta-top">
                                    <div className="user-identity">
                                        <span className="name-text">John Doe</span>
                                        <span className="role-tag patient">Patient</span>
                                    </div>
                                    <span className="timestamp-text">09:30 AM</span>
                                </div>
                                <div className="conversation-meta-bottom">
                                    <span className="message-snippet">I need to reschedule my appointment f...</span>
                                    <span className="unread-badge-count">2</span>
                                </div>
                            </div>
                        </div>

                        <div className="conversation-item">
                            <div className="avatar-container">
                                <img src="all-images/body-images/doctor-2.jpg" alt="Dr. Emily Smith" className="avatar-img" />
                            </div>
                            <div className="conversation-details">
                                <div className="conversation-meta-top">
                                    <div className="user-identity">
                                        <span className="name-text">Dr. Emily Smith</span>
                                        <span className="role-tag doctor">Doctor</span>
                                    </div>
                                    <span className="timestamp-text">10:15 AM</span>
                                </div>
                                <div className="conversation-meta-bottom">
                                    <span className="message-snippet">Please review the patient's blood test r...</span>
                                    <span className="unread-badge-count">1</span>
                                </div>
                            </div>
                        </div>

                        <div className="conversation-item">
                            <div className="avatar-container">
                                <img src="all-images/body-images/patient-3.jpg" alt="Mary Johnson" className="avatar-img" />
                            </div>
                            <div className="conversation-details">
                                <div className="conversation-meta-top">
                                    <div className="user-identity">
                                        <span className="name-text">Mary Johnson</span>
                                        <span className="role-tag patient">Patient</span>
                                    </div>
                                    <span className="timestamp-text">10:20 AM</span>
                                </div>
                                <div className="conversation-meta-bottom">
                                    <span className="message-snippet">Thank you for the excellent care during...</span>
                                    <span className="unread-badge-count">3</span>
                                </div>
                            </div>
                        </div>

                        <div className="conversation-item active">
                            <div className="avatar-container">
                                <img src="all-images/body-images/doctor-1.jpg" alt="Dr. Michael Brown" className="avatar-img" />
                            </div>
                            <div className="conversation-details">
                                <div className="conversation-meta-top">
                                    <div className="user-identity">
                                        <span className="name-text">Dr. Michael Brown</span>
                                        <span className="role-tag doctor">Doctor</span>
                                    </div>
                                    <span className="timestamp-text">10:40 AM</span>
                                </div>
                                <div className="conversation-meta-bottom">
                                    <span className="message-snippet">You're welcome, Dr. Brown. If you need anyt...</span>
                                </div>
                            </div>
                        </div>

                        <div className="conversation-item">
                            <div className="avatar-container">
                                <img src="all-images/body-images/patient-4.jpg" alt="Susan Lee" className="avatar-img" />
                            </div>
                            <div className="conversation-details">
                                <div className="conversation-meta-top">
                                    <div className="user-identity">
                                        <span className="name-text">Susan Lee</span>
                                        <span className="role-tag patient">Patient</span>
                                    </div>
                                    <span className="timestamp-text">01:20 PM</span>
                                </div>
                                <div className="conversation-meta-bottom">
                                    <span className="message-snippet">I have a few questions about my treatm...</span>
                                </div>
                            </div>
                        </div>

                        <div className="conversation-item">
                            <div className="avatar-container">
                                <img src="all-images/body-images/patient-5.jpg" alt="Kevin White" className="avatar-img" />
                            </div>
                            <div className="conversation-details">
                                <div className="conversation-meta-top">
                                    <div className="user-identity">
                                        <span className="name-text">Kevin White</span>
                                        <span className="role-tag patient">Patient</span>
                                    </div>
                                    <span className="timestamp-text">02:10 PM</span>
                                </div>
                                <div className="conversation-meta-bottom">
                                    <span className="message-snippet">The symptoms have worsened. Should...</span>
                                    <span className="unread-badge-count">1</span>
                                </div>
                            </div>
                        </div>

                        <div className="conversation-item">
                            <div className="avatar-container">
                                <img src="all-images/body-images/doctor-3.jpg" alt="Dr. Linda Green" className="avatar-img" />
                            </div>
                            <div className="conversation-details">
                                <div className="conversation-meta-top">
                                    <div className="user-identity">
                                        <span className="name-text">Dr. Linda Green</span>
                                        <span className="role-tag doctor">Doctor</span>
                                    </div>
                                    <span className="timestamp-text">02:45 PM</span>
                                </div>
                                <div className="conversation-meta-bottom">
                                    <span className="message-snippet">Please update the preventive care guid...</span>
                                    <span className="unread-badge-count">2</span>
                                </div>
                            </div>
                        </div>

                        <div className="conversation-item">
                            <div className="avatar-container">
                                <img src="all-images/body-images/patient-6.jpg" alt="Jennifer Adams" className="avatar-img" />
                            </div>
                            <div className="conversation-details">
                                <div className="conversation-meta-top">
                                    <div className="user-identity">
                                        <span className="name-text">Jennifer Adams</span>
                                        <span className="role-tag patient">Patient</span>
                                    </div>
                                    <span className="timestamp-text">03:30 PM</span>
                                </div>
                                <div className="conversation-meta-bottom">
                                    <span className="message-snippet">Can you send me the details of my last appo...</span>
                                </div>
                            </div>
                        </div>

                        <div className="conversation-item">
                            <div className="avatar-container">
                                <img src="all-images/body-images/doctor-4.jpg" alt="Dr. Samuel Thompson" className="avatar-img" />
                            </div>
                            <div className="conversation-details">
                                <div className="conversation-meta-top">
                                    <div className="user-identity">
                                        <span className="name-text">Dr. Samuel Thompson</span>
                                        <span className="role-tag doctor">Doctor</span>
                                    </div>
                                    <span className="timestamp-text">Yesterday</span>
                                </div>
                                <div className="conversation-meta-bottom">
                                    <span className="message-snippet">Thank you. Can you please provide me the li...</span>
                                </div>
                            </div>
                        </div>

                        <div className="conversation-item">
                            <div className="avatar-container">
                                <img src="all-images/body-images/patient-7.jpg" alt="Mateus Fernandes" className="avatar-img" />
                            </div>
                            <div className="conversation-details">
                                <div className="conversation-meta-top">
                                    <div className="user-identity">
                                        <span className="name-text">Mateus Fernandes</span>
                                        <span className="role-tag patient">Patient</span>
                                    </div>
                                    <span className="timestamp-text">21/05/26</span>
                                </div>
                                <div className="conversation-meta-bottom">
                                    <span className="message-snippet">Great, thanks for the information. I'll be pre...</span>
                                </div>
                            </div>
                        </div>

                        <div className="conversation-item">
                            <div className="avatar-container">
                                <img src="all-images/body-images/doctor-5.jpg" alt="Dr. Robert Wilson" className="avatar-img" />
                            </div>
                            <div className="conversation-details">
                                <div className="conversation-meta-top">
                                    <div className="user-identity">
                                        <span className="name-text">Dr. Robert Wilson</span>
                                        <span className="role-tag doctor">Doctor</span>
                                    </div>
                                    <span className="timestamp-text">20/05/26</span>
                                </div>
                                <div className="conversation-meta-bottom">
                                    <span className="message-snippet">The lab results for patient #4829 are ready...</span>
                                </div>
                            </div>
                        </div>

                        <div className="conversation-item">
                            <div className="avatar-container">
                                <img src="all-images/body-images/patient-8.jpg" alt="Sarah Jenkins" className="avatar-img" />
                            </div>
                            <div className="conversation-details">
                                <div className="conversation-meta-top">
                                    <div className="user-identity">
                                        <span className="name-text">Sarah Jenkins</span>
                                        <span className="role-tag patient">Patient</span>
                                    </div>
                                    <span className="timestamp-text">19/05/26</span>
                                </div>
                                <div className="conversation-meta-bottom">
                                    <span className="message-snippet">Could I get a refill for my prescription?</span>
                                    <span className="unread-badge-count">1</span>
                                </div>
                            </div>
                        </div>

                        <div className="conversation-item">
                            <div className="avatar-container">
                                <img src="all-images/body-images/patient-9.jpg" alt="David Miller" className="avatar-img" />
                            </div>
                            <div className="conversation-details">
                                <div className="conversation-meta-top">
                                    <div className="user-identity">
                                        <span className="name-text">David Miller</span>
                                        <span className="role-tag patient">Patient</span>
                                    </div>
                                    <span className="timestamp-text">18/05/26</span>
                                </div>
                                <div className="conversation-meta-bottom">
                                    <span className="message-snippet">Thank you for the quick follow-up advice.</span>
                                </div>
                            </div>
                        </div>

                        <div className="conversation-item">
                            <div className="avatar-container">
                                <img src="all-images/body-images/patient-10.jpg" alt="Dr. Jessica Taylor" className="avatar-img" />
                            </div>
                            <div className="conversation-details">
                                <div className="conversation-meta-top">
                                    <div className="user-identity">
                                        <span className="name-text">Dr. Jessica Taylor</span>
                                        <span className="role-tag doctor">Doctor</span>
                                    </div>
                                    <span className="timestamp-text">16/05/26</span>
                                </div>
                                <div className="conversation-meta-bottom">
                                    <span className="message-snippet">Cardiology meeting postponed to 3 PM.</span>
                                    <span className="unread-badge-count">2</span>
                                </div>
                            </div>
                        </div>

                        <div className="conversation-item">
                            <div className="avatar-container">
                                <img src="all-images/body-images/patient-11.jpg" alt="Amanda Clark" className="avatar-img" />
                            </div>
                            <div className="conversation-details">
                                <div className="conversation-meta-top">
                                    <div className="user-identity">
                                        <span className="name-text">Amanda Clark</span>
                                        <span className="role-tag patient">Patient</span>
                                    </div>
                                    <span className="timestamp-text">14/05/26</span>
                                </div>
                                <div className="conversation-meta-bottom">
                                    <span className="message-snippet">My appointment went smoothly, thank you!</span>
                                </div>
                            </div>
                        </div>

                        <div className="conversation-item">
                            <div className="avatar-container">
                                <img src="all-images/body-images/patient-12.jpg" alt="William Harris" className="avatar-img" />
                            </div>
                            <div className="conversation-details">
                                <div className="conversation-meta-top">
                                    <div className="user-identity">
                                        <span className="name-text">William Harris</span>
                                        <span className="role-tag patient">Patient</span>
                                    </div>
                                    <span className="timestamp-text">12/05/26</span>
                                </div>
                                <div className="conversation-meta-bottom">
                                    <span className="message-snippet">Please confirm if Dr. Michael is available.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button type="button" className="btn-new-message">
                        <i className="bi bi-pencil-square"></i>
                        <span>New Message</span>
                    </button>
                </div>

                <div className="messages-chat-panel">
                    <div className="chat-panel-header">
                        <div className="chat-user-profile">
                            <div className="chat-avatar-wrap">
                                <img src="all-images/body-images/doctor-1.jpg" alt="Dr. Michael Brown" className="chat-avatar-img" />
                            </div>
                            <div className="chat-user-text-info">
                                <h2 className="chat-current-name">Dr. Michael Brown</h2>
                                <span className="chat-current-status">Last seen recently</span>
                            </div>
                        </div>

                        <div className="chat-header-actions">
                            <button type="button" className="btn-chat-options" title="More Options">
                                <i className="bi bi-three-dots"></i>
                            </button>
                        </div>
                    </div>

                    <div className="chat-panel-body">
                        <div className="chat-date-separator">
                            <span className="date-badge">Today, July 23</span>
                        </div>

                        <div className="message-row incoming">
                            <div className="msg-author-avatar">
                                <img src="all-images/body-images/doctor-1.jpg" alt="Dr. Michael Brown" />
                            </div>
                            <div className="msg-content-block">
                                <div className="msg-bubble">
                                    Can you confirm the schedule for the Geriatric Care session tomorrow afternoon?
                                </div>
                                <span className="msg-timestamp">10:00 AM</span>
                            </div>
                        </div>

                        <div className="message-row outgoing">
                            <div className="msg-bubble">
                                Sure, Dr. Brown. Let me check the schedule for you.
                            </div>
                            <div className="msg-meta-status">
                                <span>10:20 AM</span>
                            </div>
                        </div>

                        <div className="message-row outgoing">
                            <div className="msg-bubble">
                                The Geriatric Care session is scheduled for 2:00 PM to 4:00 PM tomorrow. You have five patients lined up.
                            </div>
                            <div className="msg-meta-status">
                                <span>10:20 AM</span>
                                <i className="bi bi-check2-all check-icon"></i>
                            </div>
                        </div>

                        <div className="message-row incoming">
                            <div className="msg-author-avatar">
                                <img src="all-images/body-images/doctor-1.jpg" alt="Dr. Michael Brown" />
                            </div>
                            <div className="msg-content-block">
                                <div className="msg-bubble">
                                    Thank you. Can you please provide me the list of patients and their conditions?
                                </div>
                                <span className="msg-timestamp">10:25 AM</span>
                            </div>
                        </div>

                        <div className="message-row outgoing">
                            <div className="msg-bubble">
                                Of course. The patients are:
                                <ul className="patient-list-text">
                                    <li>1. James Wilson - Arthritis Management</li>
                                    <li>2. Mary Johnson - Diabetes Monitoring</li>
                                    <li>3. Susan Lee - Hypertension Check-Up</li>
                                    <li>4. Robert Brown - Heart Disease Follow-Up</li>
                                    <li>5. Emily Thompson - Medication Review</li>
                                </ul>
                            </div>
                            <div className="msg-meta-status">
                                <span>10:30 AM</span>
                                <i className="bi bi-check2-all check-icon"></i>
                            </div>
                        </div>

                        <div className="message-row incoming">
                            <div className="msg-author-avatar">
                                <img src="all-images/body-images/doctor-1.jpg" alt="Dr. Michael Brown" />
                            </div>
                            <div className="msg-content-block">
                                <div className="msg-bubble">
                                    Great, thanks for the information. I'll be prepared for the session.
                                </div>
                                <span className="msg-timestamp">10:35 AM</span>
                            </div>
                        </div>

                        <div className="message-row outgoing">
                            <div className="msg-bubble">
                                You're welcome, Dr. Brown. If you need anything else, just let me know.
                            </div>
                            <div className="msg-meta-status">
                                <span>10:40 AM</span>
                                <i className="bi bi-check2-all check-icon"></i>
                            </div>
                        </div>
                    </div>

                    <div className="chat-panel-footer">
                        <div className="chat-input-container">
                            <button type="button" className="input-addon-btn" title="Add Emoji">
                                <i className="bi bi-emoji-smile"></i>
                            </button>
                            <input type="text" className="chat-text-input" placeholder="Type a message..." />
                            <button type="button" className="btn-send-message">
                                <span>Send</span>
                                <i className="bi bi-send-fill"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
