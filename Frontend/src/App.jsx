import './App.css'
import Sidebar from './Sidebar.jsx';
import ChatWindow from './ChatWindow.jsx';
import {MyContext} from "./MyContext.jsx";
import ProfilePage from './ProfilePage.jsx'
import { useState } from 'react'; // Import useState

function App() {

  // State to manage sidebar collapse status
  const [isCollapsed, setIsCollapsed] = useState(false); 

  // Function to toggle the sidebar state
  const toggleSidebar = () => {
    setIsCollapsed(prev => !prev);
  };

  // State for chat functionality
  const [prompt, setPrompt] = useState("");
  const [reply, setReply] = useState(null);
  // MOVED: Message history state is moved from ChatWindow to App
  const [messages, setMessages] = useState([]); 
  const [currentView, setCurrentView] = useState("chat"); // 'chat' or 'profile'

  // NEW FUNCTION: Resets all chat-related states
  const newChat = () => {
    setPrompt("");
    setReply(null);
    setMessages([]); 
    setCurrentView("chat");
  };


  const providerValues={ 
    isSidebarCollapsed: isCollapsed, 
    toggleSidebar: toggleSidebar,     
    // Pass chat state
    prompt,
    setPrompt,
    reply,
    setReply,
    // Pass message history and reset function
    messages,
    setMessages,
    newChat, // Pass the new function
    currentView,
    setCurrentView
  };
  
  return (
    // Apply a class name to the app wrapper based on the collapsed state
    <div className={`app ${isCollapsed ? 'collapsed' : ''}`}> 
      <MyContext.Provider value={providerValues}>
        <Sidebar></Sidebar>
        {currentView === 'chat' ? (
            <ChatWindow />
        ) : (
            <ProfilePage />
        )}
      </MyContext.Provider>
      
    </div >
  )
}

export default App