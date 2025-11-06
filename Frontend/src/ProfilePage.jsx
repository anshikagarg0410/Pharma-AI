import { useContext } from "react";
import "./ProfilePage.css";
import { MyContext } from "./MyContext.jsx";
import profileIcon from './assets/Profile.png'; // Import the profile icon
import { FiArrowLeft } from "react-icons/fi"; // Import a back icon

function ProfilePage() {
    // Get the function to change the view back to chat
    const { setCurrentView } = useContext(MyContext);

    // Mock user data
    const userData = {
        username: "PharmaUser_01",
        email: "user@pharma.ai",
        subscription: "Pro Plan",
        joinDate: "2024-10-20",
    };

    return (
        <div className="profile-page-container">
            <div className="profile-header">
                <button 
                    className="back-button icon-button" 
                    onClick={() => setCurrentView('chat')}
                >
                    <FiArrowLeft size={24} />
                </button>
                <h1>User Profile</h1>
            </div>
            
            <div className="profile-content">
                <div className="profile-card">
                    <img src={profileIcon} alt="Profile" className="profile-pic" />
                    
                    <div className="profile-info-group">
                        <label>Username</label>
                        <input type="text" value={userData.username} readOnly />
                    </div>
                    
                    <div className="profile-info-group">
                        <label>Email</label>
                        <input type="email" value={userData.email} readOnly />
                    </div>
                    
                    <div className="profile-info-group">
                        <label>Subscription</label>
                        <input type="text" value={userData.subscription} readOnly />
                    </div>
                    
                    <div className="profile-info-group">
                        <label>Member Since</label>
                        <input type="text" value={userData.joinDate} readOnly />
                    </div>
                    
                    <button className="logout-button">
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;