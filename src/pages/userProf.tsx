import { useState } from 'react';
import { Navigate } from 'react-router';
import './userProf.css'

function GoHomeScreen() {
    const [goToHome, setGoToHome] = useState(false);
    const [goToFAQ, setGoToFAQ] = useState(false);
    const [goToDetailed, setGoToDetailed] = useState(false);
    const [goToBasic, setGoToBasic] = useState(false);

    if (goToHome) return <Navigate to="/" />;
    if (goToFAQ) return <Navigate to="/FAQ" />;
    if (goToDetailed) return <Navigate to="/Detailed Question"/>;
    if (goToBasic) return <Navigate to="/Basic Question"/>;

    return (
        <header className="header" style={{justifyContent: 'space-between'}}>
            <h1 style={{fontFamily: 'callingstone', fontSize: '35px', paddingTop: '10px'}}>User Profile</h1>
            <div className="nav-bar">
                <button 
                    onClick={() => setGoToHome(true)} 
                    className="back-button" 
                    aria-label="homePage" /* aria-label from Gemini */>
                    <img src="./cisc275-logo.png" alt="polar bear wearing a graduation cap" width="30" height="30"></img> 
                </button>
                <button onClick={() => setGoToFAQ(true)}>FAQ</button>
                <button onClick={() => setGoToBasic(true)}>Basic Questions</button>
                <button onClick={() => setGoToDetailed(true)}>Detailed Questions</button>
            </div>
            <h5 className="description" style={{color: '#E6D9D9', textAlign: 'center', fontStyle: 'italic'}}>This is where you can see your profile</h5>
        </header>  
    );
}

function UserProf(){
    return(
        <div>
            <GoHomeScreen/>
            <div className='UserProf'>
                <h6>Profile</h6>
            </div>

            <footer className="footer">
                <p>Made with 💛 by Luc, Hanna & Isha — CareerHelpi 2025</p>
            </footer>
        </div>
    )
}
export default UserProf