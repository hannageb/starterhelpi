import { useState } from "react";
import { Navigate } from "react-router";

function GoHomeScreen() {
    const [goToHome, setGoToHome] = useState(false);
    const [goToFAQ, setGoToFAQ] = useState(false);
    const [goToDetailed, setGoToDetailed] = useState(false);
    
    if (goToFAQ) return <Navigate to="/FAQ" />;
    if (goToDetailed) return <Navigate to="/Detailed Question" />;
    if (goToHome) return <Navigate to="/" />;

    return (
        <header style={{justifyContent: 'space-between'}}>
           <h1 style={{fontFamily: 'callingstone', fontSize: '35px', paddingTop: '10px'}}>BASIC QUESTIONS</h1>
           <div className='nav-bar'>
                <button onClick={() => setGoToHome(true)} className="back-button">
                    <img src="./cisc275-logo.png" alt="polar bear wearing a graduation cap" width="30" height="30"></img>
                </button>
                <button onClick={() => setGoToFAQ(true)}>FAQ</button>
                <button onClick={() => setGoToDetailed(true)}>Detailed Questions</button>
            </div>
            <h5 className="description" style={{ color: '#E6D9D9', fontStyle:'italic', textAlign:'center'}}> Answer these questions to find out what field might be best! By the end, you will receive a general field that match your interests and desires.</h5>
        </header>
    );
}

export default GoHomeScreen