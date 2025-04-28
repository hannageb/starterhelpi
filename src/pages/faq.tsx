import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './faq.css'

function GoHomeScreen() {
    const [goToHome, setGoToHome] = useState(false);

    if (goToHome) return <Navigate to="/" />;

    return (
        <header className="header">
            <h1 className="centerTitle">FAQ</h1>
            <button onClick={() => setGoToHome(true)} className="home-button">
                <img src="./cisc275-logo.png" alt="polar bear wearing a graduation cap" width="50" height="50"></img>
            </button>
        </header>
    );
}

function FAQ(){
    return(
        <div>
            <GoHomeScreen></GoHomeScreen>
            <div className="Desc">
                <h5 style={{color: '#E6D9D9'}}>Some frequently asked questions</h5>
            </div>
            
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