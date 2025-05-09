import { useState } from "react";
import { Navigate } from "react-router";

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

export default GoHomeScreen