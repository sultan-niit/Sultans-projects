import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TopHeader from "../components/TopHeader";

export default function Messages() {
  return (
    <>
      <div className="dashboard-wrapper">
        <Sidebar />

        <div className="content-wrapper">
          <TopHeader pageTitle="Messages" />

          <div className="main-content" style={{ padding: "24px 32px 40px 32px" }}>
                <div class="messages-wrapper">
                    <div class="messages-inbox-panel">
                        <div class="inbox-search-box">
                            <i class="bi bi-search search-icon"></i>
                            <input type="text" class="inbox-search-input" placeholder="Search name, chat, etc" />
                            <button type="button" class="filter-icon-btn" title="Filter Chats">
                                <i class="bi bi-sliders"></i>
                            </button>
                        </div>

                        <div class="conversations-list">
                            <div class="conversation-item">
                                <div class="avatar-container">
                                    <img src="all-images/body-images/patient-1.jpg" alt="John Doe" class="avatar-img" />
                                </div>
                                <div class="conversation-details">
                                    <div class="conversation-meta-top">
                                        <div class="user-identity">
                                            <span class="name-text">John Doe</span>
                                            <span class="role-tag patient">Patient</span>
                                        </div>
                                        <span class="timestamp-text">09:30 AM</span>
                                    </div>
                                    <div class="conversation-meta-bottom">
                                        <span class="message-snippet">I need to reschedule my appointment f...</span>
                                        <span class="unread-badge-count">2</span>
                                    </div>
                                </div>
                            </div>

                            <div class="conversation-item">
                                <div class="avatar-container">
                                    <img src="all-images/body-images/doctor-2.jpg" alt="Dr. Emily Smith" class="avatar-img" />
                                </div>
                                <div class="conversation-details">
                                    <div class="conversation-meta-top">
                                        <div class="user-identity">
                                            <span class="name-text">Dr. Emily Smith</span>
                                            <span class="role-tag doctor">Doctor</span>
                                        </div>
                                        <span class="timestamp-text">10:15 AM</span>
                                    </div>
                                    <div class="conversation-meta-bottom">
                                        <span class="message-snippet">Please review the patient's blood test r...</span>
                                        <span class="unread-badge-count">1</span>
                                    </div>
                                </div>
                            </div>

                            <div class="conversation-item">
                                <div class="avatar-container">
                                    <img src="all-images/body-images/patient-3.jpg" alt="Mary Johnson" class="avatar-img" />
                                </div>
                                <div class="conversation-details">
                                    <div class="conversation-meta-top">
                                        <div class="user-identity">
                                            <span class="name-text">Mary Johnson</span>
                                            <span class="role-tag patient">Patient</span>
                                        </div>
                                        <span class="timestamp-text">10:20 AM</span>
                                    </div>
                                    <div class="conversation-meta-bottom">
                                        <span class="message-snippet">Thank you for the excellent care during...</span>
                                        <span class="unread-badge-count">3</span>
                                    </div>
                                </div>
                            </div>

                            <div class="conversation-item active">
                                <div class="avatar-container">
                                    <img src="all-images/body-images/doctor-1.jpg" alt="Dr. Michael Brown" class="avatar-img" />
                                </div>
                                <div class="conversation-details">
                                    <div class="conversation-meta-top">
                                        <div class="user-identity">
                                            <span class="name-text">Dr. Michael Brown</span>
                                            <span class="role-tag doctor">Doctor</span>
                                        </div>
                                        <span class="timestamp-text">10:40 AM</span>
                                    </div>
                                    <div class="conversation-meta-bottom">
                                        <span class="message-snippet">You're welcome, Dr. Brown. If you need anyt...</span>
                                    </div>
                                </div>
                            </div>

                            <div class="conversation-item">
                                <div class="avatar-container">
                                    <img src="all-images/body-images/patient-4.jpg" alt="Susan Lee" class="avatar-img" />
                                </div>
                                <div class="conversation-details">
                                    <div class="conversation-meta-top">
                                        <div class="user-identity">
                                            <span class="name-text">Susan Lee</span>
                                            <span class="role-tag patient">Patient</span>
                                        </div>
                                        <span class="timestamp-text">01:20 PM</span>
                                    </div>
                                    <div class="conversation-meta-bottom">
                                        <span class="message-snippet">I have a few questions about my treatm...</span>
                                    </div>
                                </div>
                            </div>

                            <div class="conversation-item">
                                <div class="avatar-container">
                                    <img src="all-images/body-images/patient-5.jpg" alt="Kevin White" class="avatar-img" />
                                </div>
                                <div class="conversation-details">
                                    <div class="conversation-meta-top">
                                        <div class="user-identity">
                                            <span class="name-text">Kevin White</span>
                                            <span class="role-tag patient">Patient</span>
                                        </div>
                                        <span class="timestamp-text">02:10 PM</span>
                                    </div>
                                    <div class="conversation-meta-bottom">
                                        <span class="message-snippet">The symptoms have worsened. Should...</span>
                                        <span class="unread-badge-count">1</span>
                                    </div>
                                </div>
                            </div>

                            <div class="conversation-item">
                                <div class="avatar-container">
                                    <img src="all-images/body-images/doctor-3.jpg" alt="Dr. Linda Green" class="avatar-img" />
                                </div>
                                <div class="conversation-details">
                                    <div class="conversation-meta-top">
                                        <div class="user-identity">
                                            <span class="name-text">Dr. Linda Green</span>
                                            <span class="role-tag doctor">Doctor</span>
                                        </div>
                                        <span class="timestamp-text">02:45 PM</span>
                                    </div>
                                    <div class="conversation-meta-bottom">
                                        <span class="message-snippet">Please update the preventive care guid...</span>
                                        <span class="unread-badge-count">2</span>
                                    </div>
                                </div>
                            </div>

                            <div class="conversation-item">
                                <div class="avatar-container">
                                    <img src="all-images/body-images/patient-6.jpg" alt="Jennifer Adams" class="avatar-img" />
                                </div>
                                <div class="conversation-details">
                                    <div class="conversation-meta-top">
                                        <div class="user-identity">
                                            <span class="name-text">Jennifer Adams</span>
                                            <span class="role-tag patient">Patient</span>
                                        </div>
                                        <span class="timestamp-text">03:30 PM</span>
                                    </div>
                                    <div class="conversation-meta-bottom">
                                        <span class="message-snippet">Can you send me the details of my last appo...</span>
                                    </div>
                                </div>
                            </div>

                            <div class="conversation-item">
                                <div class="avatar-container">
                                    <img src="all-images/body-images/doctor-4.jpg" alt="Dr. Samuel Thompson" class="avatar-img" />
                                </div>
                                <div class="conversation-details">
                                    <div class="conversation-meta-top">
                                        <div class="user-identity">
                                            <span class="name-text">Dr. Samuel Thompson</span>
                                            <span class="role-tag doctor">Doctor</span>
                                        </div>
                                        <span class="timestamp-text">Yesterday</span>
                                    </div>
                                    <div class="conversation-meta-bottom">
                                        <span class="message-snippet">Thank you. Can you please provide me the li...</span>
                                    </div>
                                </div>
                            </div>

                            <div class="conversation-item">
                                <div class="avatar-container">
                                    <img src="all-images/body-images/patient-7.jpg" alt="Mateus Fernandes" class="avatar-img" />
                                </div>
                                <div class="conversation-details">
                                    <div class="conversation-meta-top">
                                        <div class="user-identity">
                                            <span class="name-text">Mateus Fernandes</span>
                                            <span class="role-tag patient">Patient</span>
                                        </div>
                                        <span class="timestamp-text">21/05/26</span>
                                    </div>
                                    <div class="conversation-meta-bottom">
                                        <span class="message-snippet">Great, thanks for the information. I'll be pre...</span>
                                    </div>
                                </div>
                            </div>

                            <div class="conversation-item">
                                <div class="avatar-container">
                                    <img src="all-images/body-images/doctor-5.jpg" alt="Dr. Robert Wilson" class="avatar-img" />
                                </div>
                                <div class="conversation-details">
                                    <div class="conversation-meta-top">
                                        <div class="user-identity">
                                            <span class="name-text">Dr. Robert Wilson</span>
                                            <span class="role-tag doctor">Doctor</span>
                                        </div>
                                        <span class="timestamp-text">20/05/26</span>
                                    </div>
                                    <div class="conversation-meta-bottom">
                                        <span class="message-snippet">The lab results for patient #4829 are ready...</span>
                                    </div>
                                </div>
                            </div>

                            <div class="conversation-item">
                                <div class="avatar-container">
                                    <img src="all-images/body-images/patient-8.jpg" alt="Sarah Jenkins" class="avatar-img" />
                                </div>
                                <div class="conversation-details">
                                    <div class="conversation-meta-top">
                                        <div class="user-identity">
                                            <span class="name-text">Sarah Jenkins</span>
                                            <span class="role-tag patient">Patient</span>
                                        </div>
                                        <span class="timestamp-text">19/05/26</span>
                                    </div>
                                    <div class="conversation-meta-bottom">
                                        <span class="message-snippet">Could I get a refill for my prescription?</span>
                                        <span class="unread-badge-count">1</span>
                                    </div>
                                </div>
                            </div>

                            <div class="conversation-item">
                                <div class="avatar-container">
                                    <img src="all-images/body-images/patient-9.jpg" alt="David Miller" class="avatar-img" />
                                </div>
                                <div class="conversation-details">
                                    <div class="conversation-meta-top">
                                        <div class="user-identity">
                                            <span class="name-text">David Miller</span>
                                            <span class="role-tag patient">Patient</span>
                                        </div>
                                        <span class="timestamp-text">18/05/26</span>
                                    </div>
                                    <div class="conversation-meta-bottom">
                                        <span class="message-snippet">Thank you for the quick follow-up advice.</span>
                                    </div>
                                </div>
                            </div>

                            <div class="conversation-item">
                                <div class="avatar-container">
                                    <img src="all-images/body-images/patient-10.jpg" alt="Dr. Jessica Taylor" class="avatar-img" />
                                </div>
                                <div class="conversation-details">
                                    <div class="conversation-meta-top">
                                        <div class="user-identity">
                                            <span class="name-text">Dr. Jessica Taylor</span>
                                            <span class="role-tag doctor">Doctor</span>
                                        </div>
                                        <span class="timestamp-text">16/05/26</span>
                                    </div>
                                    <div class="conversation-meta-bottom">
                                        <span class="message-snippet">Cardiology meeting postponed to 3 PM.</span>
                                        <span class="unread-badge-count">2</span>
                                    </div>
                                </div>
                            </div>

                            <div class="conversation-item">
                                <div class="avatar-container">
                                    <img src="all-images/body-images/patient-11.jpg" alt="Amanda Clark" class="avatar-img" />
                                </div>
                                <div class="conversation-details">
                                    <div class="conversation-meta-top">
                                        <div class="user-identity">
                                            <span class="name-text">Amanda Clark</span>
                                            <span class="role-tag patient">Patient</span>
                                        </div>
                                        <span class="timestamp-text">14/05/26</span>
                                    </div>
                                    <div class="conversation-meta-bottom">
                                        <span class="message-snippet">My appointment went smoothly, thank you!</span>
                                    </div>
                                </div>
                            </div>

                            <div class="conversation-item">
                                <div class="avatar-container">
                                    <img src="all-images/body-images/patient-12.jpg" alt="William Harris" class="avatar-img" />
                                </div>
                                <div class="conversation-details">
                                    <div class="conversation-meta-top">
                                        <div class="user-identity">
                                            <span class="name-text">William Harris</span>
                                            <span class="role-tag patient">Patient</span>
                                        </div>
                                        <span class="timestamp-text">12/05/26</span>
                                    </div>
                                    <div class="conversation-meta-bottom">
                                        <span class="message-snippet">Please confirm if Dr. Michael is available.</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button type="button" class="btn-new-message">
                            <i class="bi bi-pencil-square"></i>
                            <span>New Message</span>
                        </button>
                    </div>

                    <div class="messages-chat-panel">
                        <div class="chat-panel-header">
                            <div class="chat-user-profile">
                                <div class="chat-avatar-wrap">
                                    <img src="all-images/body-images/doctor-1.jpg" alt="Dr. Michael Brown" class="chat-avatar-img" />
                                </div>
                                <div class="chat-user-text-info">
                                    <h2 class="chat-current-name">Dr. Michael Brown</h2>
                                    <span class="chat-current-status">Last seen recently</span>
                                </div>
                            </div>

                            <div class="chat-header-actions">
                                <button type="button" class="btn-chat-options" title="More Options">
                                    <i class="bi bi-three-dots"></i>
                                </button>
                            </div>
                        </div>

                        <div class="chat-panel-body">
                            <div class="chat-date-separator">
                                <span class="date-badge">Today, July 23</span>
                            </div>

                            <div class="message-row incoming">
                                <div class="msg-author-avatar">
                                    <img src="all-images/body-images/doctor-1.jpg" alt="Dr. Michael Brown" />
                                </div>
                                <div class="msg-content-block">
                                    <div class="msg-bubble">
                                        Can you confirm the schedule for the Geriatric Care session tomorrow afternoon?
                                    </div>
                                    <span class="msg-timestamp">10:00 AM</span>
                                </div>
                            </div>

                            <div class="message-row outgoing">
                                <div class="msg-bubble">
                                    Sure, Dr. Brown. Let me check the schedule for you.
                                </div>
                                <div class="msg-meta-status">
                                    <span>10:20 AM</span>
                                </div>
                            </div>

                            <div class="message-row outgoing">
                                <div class="msg-bubble">
                                    The Geriatric Care session is scheduled for 2:00 PM to 4:00 PM tomorrow. You have five patients lined up.
                                </div>
                                <div class="msg-meta-status">
                                    <span>10:20 AM</span>
                                    <i class="bi bi-check2-all check-icon"></i>
                                </div>
                            </div>

                            <div class="message-row incoming">
                                <div class="msg-author-avatar">
                                    <img src="all-images/body-images/doctor-1.jpg" alt="Dr. Michael Brown" />
                                </div>
                                <div class="msg-content-block">
                                    <div class="msg-bubble">
                                        Thank you. Can you please provide me the list of patients and their conditions?
                                    </div>
                                    <span class="msg-timestamp">10:25 AM</span>
                                </div>
                            </div>

                            <div class="message-row outgoing">
                                <div class="msg-bubble">
                                    Of course. The patients are:
                                    <ul class="patient-list-text">
                                        <li>1. James Wilson - Arthritis Management</li>
                                        <li>2. Mary Johnson - Diabetes Monitoring</li>
                                        <li>3. Susan Lee - Hypertension Check-Up</li>
                                        <li>4. Robert Brown - Heart Disease Follow-Up</li>
                                        <li>5. Emily Thompson - Medication Review</li>
                                    </ul>
                                </div>
                                <div class="msg-meta-status">
                                    <span>10:30 AM</span>
                                    <i class="bi bi-check2-all check-icon"></i>
                                </div>
                            </div>

                            <div class="message-row incoming">
                                <div class="msg-author-avatar">
                                    <img src="all-images/body-images/doctor-1.jpg" alt="Dr. Michael Brown" />
                                </div>
                                <div class="msg-content-block">
                                    <div class="msg-bubble">
                                        Great, thanks for the information. I'll be prepared for the session.
                                    </div>
                                    <span class="msg-timestamp">10:35 AM</span>
                                </div>
                            </div>

                            <div class="message-row outgoing">
                                <div class="msg-bubble">
                                    You're welcome, Dr. Brown. If you need anything else, just let me know.
                                </div>
                                <div class="msg-meta-status">
                                    <span>10:40 AM</span>
                                    <i class="bi bi-check2-all check-icon"></i>
                                </div>
                            </div>
                        </div>

                        <div class="chat-panel-footer">
                            <div class="chat-input-container">
                                <button type="button" class="input-addon-btn" title="Add Emoji">
                                    <i class="bi bi-emoji-smile"></i>
                                </button>
                                <input type="text" class="chat-text-input" placeholder="Type a message..." />
                                <button type="button" class="btn-send-message">
                                    <span>Send</span>
                                    <i class="bi bi-send-fill"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="messages-page-footer">
                    <div class="messages-footer-left">
                        <span>Copyright &copy; 2024 Peterdraw</span>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Term and conditions</a>
                        <a href="#">Contact</a>
                    </div>

                    <div class="messages-footer-socials">
                        <a href="#" title="Facebook"><i class="bi bi-facebook"></i></a>
                        <a href="#" title="X"><i class="bi bi-twitter-x"></i></a>
                        <a href="#" title="Instagram"><i class="bi bi-instagram"></i></a>
                        <a href="#" title="YouTube"><i class="bi bi-youtube"></i></a>
                        <a href="#" title="LinkedIn"><i class="bi bi-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </>
  );
}
