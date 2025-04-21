import React from 'react';
import { Navigate } from 'react-router-dom';
import './basicReport.css'

function GoHomeScreen() {
    const [goToHome, setGoToHome] = React.useState(false);
    const[goToBasic, setGoToBasic] = React.useState(false)
    const [goToDetailed, setGoToDetailed] = React.useState(false)

    if (goToHome) {
        return <Navigate to="/" />;
    }
    if(goToBasic){
        if(goToBasic){
            return <Navigate to="/Basic Question"/>;
        }
    }
    if(goToDetailed){
        return <Navigate to="/Detailed Question"/>
    }

    return (
        <header className="header">
            <h1 className="centerTitle">BASIC QUESTION RESULT</h1>
            <button onClick={() => {setGoToHome(true)}} className="back-button">
            {" "}Home
            </button>
            <button onClick={()=>{setGoToBasic(true)}} className="basic-button">
                {" "}Basic Questions
            </button>
            <button onClick={()=> {setGoToDetailed(true)}} className='detailed-button'>
                {" "}Detailed Question
            </button>
        </header>
    );
}

function BasicReport(){
    return(
        <div>
            <GoHomeScreen></GoHomeScreen>
        </div>
    )
}
export default BasicReport