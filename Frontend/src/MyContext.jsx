import { createContext } from "react";

// Updated to include placeholder values for the new context
export const MyContext = createContext({
    isSidebarCollapsed: false,
    toggleSidebar: () => {},
    // New chat state placeholders
    prompt: "",
    setPrompt: () => {},
    reply: null,
    setReply: () => {},
    // New feature: function to reset the chat
    newChat: () => {},
    
    // ADD THESE NEW LINES
    currentView: "chat", // Default view is 'chat'
    setCurrentView: () => {}, // Function to change the view
});