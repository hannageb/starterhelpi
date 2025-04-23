import './basicReport.css'
import {useState } from "react";
import {Navigate} from "react-router-dom";


function GoHomeScreen() {
    const [goToHome, setGoToHome] = useState(false);
    const[goToBasic, setGoToBasic] = useState(false)
    const [goToDetailed, setGoToDetailed] = useState(false);

    if (goToDetailed) return <Navigate to="/Detailed Question" />;

    if (goToHome) {
        return <Navigate to="/" />;
    }
    if(goToBasic){
        if(goToBasic){
            return <Navigate to="/Basic Question"/>;
        }
    }

    return (
        <header className="header">
            <h1 className="centerTitle">REPORT</h1>
            <button onClick={() => {setGoToHome(true)}} className="back-button">
            {" "}Home
            </button>
            <button onClick={()=>{setGoToBasic(true)}} className="basic-button">
                {" "}Basic Questions
            </button>
            <button onClick={()=>{setGoToDetailed(true)}} className="detailed-button">
                {" "}Detailed Questions
            </button>
        </header>
    );
}

function BasicReport(){
    return(
        <div>
            <div>
                <GoHomeScreen></GoHomeScreen>
            </div>
            <div>
                <div className='envBody'>
                    <div className='wrapper'>
                        <div className='lid one'></div>
                        <div className='lid two'></div>
                        <div className='envelope'></div>
                        <div className='letter'>
                            <p>Your result:</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BasicReport
