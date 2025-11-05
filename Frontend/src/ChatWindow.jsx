import { useContext } from "react";
import "./ChatWindow.css";
import { MyContext } from "./MyContext.jsx";
import Chat from "./Chat.jsx"; 
// Import icons from react-icons
import { FiPlus, FiImage, FiUpload } from "react-icons/fi";
import { TfiCommentAlt } from "react-icons/tfi";

function ChatWindow() {
  // Consume context values for chat, including messages and setMessages
  const { 
    prompt, 
    setPrompt, 
    messages, // Consumed from context
    setMessages, // Consumed from context
  } = useContext(MyContext); 
  
  // State to hold the history of messages (REMOVED: Was moved to App.jsx)
  // const [messages, setMessages] = useState([]);
  
  // Function to handle the submission of the chat prompt
  const handleSend = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    
    const userPrompt = prompt.trim();
    if (userPrompt === "") {
      return; // Do nothing if prompt is empty
    }

    // 1. Add user message to history (using context setter)
    setMessages(prevMessages => [...prevMessages, { id: Date.now(), role: "user", text: userPrompt }]);

    // 2. Clear the input
    setPrompt(""); 
    
    // 3. Simulate an AI response
    const aiResponseText = `Processing: "${userPrompt}". I found 3 relevant studies and can summarize them for you.`;
    
    setTimeout(() => {
        // Add AI message to history (using context setter)
        setMessages(prevMessages => [...prevMessages, { id: Date.now() + 1, role: "ai", text: aiResponseText }]);
    }, 500);
    
  };


  return (
    <div className="chat-container">
      <div className="navbar">
        <span>Pharma AI</span>
        <div className="userIconDiv">
          <span className="userIcon"><i className="fa-solid fa-user"></i></span>
        </div>
      </div>

      <div className="chat-content">
        {messages.length === 0 ? (
            <>
                <div className="heading">Welcome to Pharma AI</div>
                <div className="subheading">Transforming Pharmaceutical Research Through Agentic Intelligence</div>
            </>
        ) : (
             <div className="message-history">
                {messages.map((msg) => (
                    <Chat key={msg.id} role={msg.role} text={msg.text} />
                ))}
             </div>
        )}
      </div>
      
      {/* Input Area: Wrapped in a form for easy submission on Enter */}
      <div className="chat-input-area">
        <form onSubmit={handleSend} className="chat-bar"> 
           <input
            type="text"
            className="chat-input"
            placeholder="How can I help you today?"
            value={prompt} 
            onChange={(e) => setPrompt(e.target.value)} 
          />
          <div className="left-icons">
            <button type="button" className="icon-button"> 
              <FiPlus size={20} />
            </button>
            <button type="button" className="icon-button">
              <FiImage size={20} />
            </button>
            <button type="button" className="icon-button">
              <TfiCommentAlt size={20} />
            </button>
             <button type="submit" className="icon-button file-upload-button"> 
            {/* <FiUpload size={20} /> */}
            <i className="fa-solid fa-paper-plane"></i>
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChatWindow;