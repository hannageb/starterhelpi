import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './userProf.css'

function GoHomeScreen() {
    const [goToHome, setGoToHome] = useState(false);

    if (goToHome) return <Navigate to="/" />;

    return (
        <header className="header">
            <h1 className="centerTitle">FAQ</h1>
            <button onClick={() => setGoToHome(true)} className="back-button">Home</button>
        </header>
    );
}

function UserProf(){
    return(
        <div>
            <GoHomeScreen/>
            test
        </div>
    )
}
export default UserProf