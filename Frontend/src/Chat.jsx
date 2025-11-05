import "./Chat.css";

// This component will render a single chat message
function Chat({ role, text }) {
    // The role determines the alignment and styling defined in Chat.css
    const isUser = role === "user"; 
    
    // Key change: We apply a class based on the role and use it for styling/alignment
    return (
        <div className={`chat-message-wrapper ${isUser ? 'user-align' : 'ai-align'}`}>
            <div className={`chat-message ${isUser ? 'user' : 'ai'}`}>
                <div className="message-header">
                    <strong>{isUser ? "You" : "Pharma AI"}</strong>
                </div>
                <div className="message-text">
                    {text}
                </div>
            </div>
        </div>
    )
};
export default Chat;