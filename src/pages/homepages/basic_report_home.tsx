import { useState } from "react";
import { Navigate } from "react-router";

function GoHomeScreen() {
    const [goToHome, setGoToHome] = useState(false);
    const[goToBasic, setGoToBasic] = useState(false)
    const [goToFAQ, setGoToFAQ] = useState(false);
    const [goToDetailed, setGoToDetailed] = useState(false);
    const [goToUser, setGoToUser] = useState(false)
    
    if (goToFAQ) return <Navigate to="/FAQ" />;
    if (goToUser) return <Navigate to="/User Profile"/>;
    if (goToDetailed) return <Navigate to="/Detailed Question" />;
    if (goToHome) return <Navigate to="/" />;
    if (goToBasic) return <Navigate to="/Basic Question"/>;

    return (
        <header style={{justifyContent: 'space-between'}}>
           <h1 style={{fontFamily: 'callingstone', fontSize: '35px', paddingTop: '10px'}}>CAREER REPORT</h1>
           <div className='nav-bar'>
                <button onClick={() => setGoToHome(true)} className="back-button">
                    <img src="./cisc275-logo.png" alt="polar bear wearing a graduation cap" width="30" height="30"></img>
                </button>
                <button onClick={() => setGoToFAQ(true)}>FAQ</button>
                <button onClick={() => setGoToUser(true)}>User Profile</button>
                <button onClick={() => setGoToDetailed(true)}>Detailed Questions</button>
                <button onClick={() => setGoToBasic(true)}>Basic Questions</button>
            </div>
        </header>
    );
}

export default GoHomeScreen