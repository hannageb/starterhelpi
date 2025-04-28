import { useState } from 'react';
import './detailedReport.css'
import { Navigate } from 'react-router-dom';

function GoHomeScreen() {
    const [goToHome, setGoToHome] = useState(false);
    const [goToDetailed, setGoToDetailed] = useState(false);
    const [goToBasic, setGoToBasic] = useState(false);

    if (goToHome) return <Navigate to="/" />;
    if (goToDetailed) return <Navigate to="/Detailed Question" />;
    if (goToBasic) return <Navigate to="/Basic Question" />;

    return (
        <header className="header">
            <h1 className="centerTitle">REPORT</h1>
            <button onClick={() => setGoToHome(true)} className="back-button">
                <img src="./cisc275-logo.png" alt="polar bear wearing a graduation cap" width="50" height="50"></img>
            </button>
            <button onClick={() => setGoToDetailed(true)} className="detailed-button">Detailed Questions</button>
            <button onClick={() => setGoToBasic(true)} className="basic-button">Basic Questions</button>
        </header>
    );
}

function DetailedReport(){
    return(
        <><div><GoHomeScreen></GoHomeScreen></div>
        console.log(responses)
        <div className='envBody'>
            <div className='wrapper'>
                <div className='lid one'></div>
                <div className='lid two'></div>
                <div className='envelope'></div>
                <div className='letter'>
                    <p>Your first result:</p>
                </div>
            </div>
            <div className='wrapper'>
                <div className='lid one'></div>
                <div className='lid two'></div>
                <div className='envelope'></div>
                <div className='letter'>
                    <p>Your second result:</p>
                </div>
            </div>
            <div className='wrapper'>
                <div className='lid one'></div>
                <div className='lid two'></div>
                <div className='envelope'></div>
                <div className='letter'>
                    <p>Your third result:</p>
                </div>
            </div>
        </div></>
    );
}
export default DetailedReport
