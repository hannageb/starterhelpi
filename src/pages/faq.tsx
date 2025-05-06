import { useState } from 'react';
import { Navigate } from 'react-router';
import './faq.css'

function GoHomeScreen() {
    const [goToHome, setGoToHome] = useState(false);
    const [goToDetailed, setGoToDetailed] = useState(false);
    const [goToBasic, setGoToBasic] = useState(false);
    const [goToUser, setGoToUser] = useState(false);

    if (goToHome) return <Navigate to="/" />;
    if (goToUser) return <Navigate to="/User Profile"/>;
    if (goToDetailed) return <Navigate to="/Detailed Question"/>;
    if (goToBasic) return <Navigate to="/Basic Question"/>;

    return (
        <header className="header" style={{justifyContent: 'space-between'}}>
            <h1 style={{fontFamily: 'callingstone', fontSize: '35px', paddingTop: '10px'}}>Frequently Asked Questions</h1>
            <div className="nav-bar">
                <button 
                    onClick={() => setGoToHome(true)} 
                    className="back-button" 
                    aria-label="homePage" /* aria-label from Gemini */>
                    <img src="./cisc275-logo.png" alt="polar bear wearing a graduation cap" width="30" height="30"></img> 
                </button>
                <button onClick={() => setGoToUser(true)}>User Profile</button>
                <button onClick={() => setGoToBasic(true)}>Basic Questions</button>
                <button onClick={() => setGoToDetailed(true)}>Detailed Questions</button>
            </div>
            <h5 className="description" style={{color: '#E6D9D9', textAlign: 'center', fontStyle: 'italic'}}>Some frequently asked questions</h5>
        </header>  
    );
}

function FAQ(){
    return(
        <div>
            <GoHomeScreen></GoHomeScreen>
            <div className='Container'>
                <div className='FaQ'>
                    <div>
                        <h6 style={{fontWeight:'bold'}}>What is this for?</h6>
                        <p>This is a final project for CISC275</p>
                    </div>
                </div>
                <div className='FaQ'>
                    <div>
                        <h6 style={{fontWeight:'bold'}}>What would this help with?</h6>
                        <p>This will help you find what field areas might work with you</p>
                    </div>
                </div>
            </div>
            <footer className="footer">
                <p>Made with 💛 by Luc, Hanna & Isha — CareerHelpi 2025</p>
            </footer>
        </div>
    )
}
export default FAQ