import { useState } from "react";
import { Navigate } from "react-router";

function GoHomeScreen() {
    const [goToHome, setGoToHome] = useState(false);
    const [goToFAQ, setGoToFAQ] = useState(false);
    const [goToUser, setGoToUser] = useState(false);
    const [goToBasic, setGoToBasic] = useState(false);

    if (goToHome) return <Navigate to="/" />;
    if (goToFAQ) return <Navigate to="/FAQ" />;
    if (goToUser) return <Navigate to="/User Profile" />;
    if (goToBasic) return <Navigate to="/Basic Question" />;

    return (
        <header style={{justifyContent: 'space-between'}} data-testid="header">
            <h1 style={{fontFamily: 'callingstone', fontSize: '35px', paddingTop: '10px'}}>DETAILED QUESTIONS</h1>
            <div className="nav-bar">
                <button onClick={() => setGoToHome(true)} className="back-button">
                <img src="./cisc275-logo.png" alt="polar bear wearing a graduation cap" width="30" height="30" aria-label="homePage"></img>
                </button>
                <button onClick={() => setGoToFAQ(true)}>FAQ</button>
                <button onClick={() => setGoToUser(true)}>User Profile</button>
                <button onClick={() => setGoToBasic(true)}>Basic Questions</button>
            </div>
            <h5 className="description" style={{ color: '#E6D9D9', fontStyle:'italic', textAlign:'center'}}> Click this button if you want a more personalized career suggestion! Instead of just a general field, you'll answer in-depth questions about your interests, skills, and work preferences to get a more specific career match tailored to you.</h5>
        </header>
    );
}

export default GoHomeScreen