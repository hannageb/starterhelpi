import { useState } from 'react';
import { Navigate } from 'react-router';
import './userProf.css'

function GoHomeScreen() {
    const [goToHome, setGoToHome] = useState(false);

    if (goToHome) return <Navigate to="/" />;

    return (
        <header className="header">
            <h1 className="centerTitle">User Profile</h1>
            <button onClick={() => setGoToHome(true)} className="back-button">
            <img src="./cisc275-logo.png" alt="polar bear wearing a graduation cap" width="50" height="50"></img>
            </button>
        </header>
    );
}

function UserProf(){
    return(
        <div>
            <GoHomeScreen/>
            <div className="Desc">
                <h5 style={{color: '#E6D9D9'}}>This is where you can see your profile</h5>
            </div>

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