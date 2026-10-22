export default function PatientPortalMessages({ doctor, messages, value, onValueChange, onSubmit }) {
  return (
    <div className="pure-content-card messages-card">
      <div className="messages-header">
        <div className="doc-avatar-wrap">
          <div className="doc-avatar-circle">
            <i className="bi bi-heart-pulse-fill"></i>
          </div>
          <div>
            <h4>{doctor}</h4>
            <span className="doc-status-text">Assigned Cardiologist • Online</span>
          </div>
        </div>
      </div>

      <div className="chat-messages-scroll">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`chat-bubble-row ${message.isDoctor ? "incoming" : "outgoing"}`}
          >
            <div className="chat-bubble">
              <div className="chat-sender-name">{message.sender}</div>
              <div className="chat-text">{message.text}</div>
              <div className="chat-time">{message.time}</div>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={onSubmit} className="chat-input-bar">
        <input
          type="text"
          placeholder="Type your message or symptom inquiry to the doctor..."
          value={value}
          onChange={(event) => onValueChange(event.target.value)}
          className="pure-chat-input"
        />
        <button type="submit" className="btn-send-msg">
          <i className="bi bi-send-fill"></i>
          <span>Send</span>
        </button>
      </form>
    </div>
  );
}
