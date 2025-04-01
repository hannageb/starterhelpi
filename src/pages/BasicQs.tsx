import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import './BasicQs.css'

function GoHomeScreen() {
    const [goToHome, setGoToHome] = React.useState(false)
    if (goToHome){
        return <Navigate to="/"/>;
    }

    return(
        <header className="header">
            <h1 className="centerTitle">
                BASIC QUESTIONS
            </h1>
            <button onClick={() => {setGoToHome(true)}} className="back-button">
                {" "}Go to Homepage
            </button>
        </header>
    );
}
function BasicQ(){
    const [response, setResponse] = useState<string>("");

    function updateResponse(event: React.ChangeEvent<HTMLInputElement>) {
        setResponse(event.target.value);
    }
    return(
        <div className="title">
            <GoHomeScreen></GoHomeScreen>
        <div>
            <h2 style={{alignItems:'center'}}>
                Question filler    
            </h2>
            <Form.Check
                type="radio"
                name="basic-question"
                onChange={updateResponse}
                id="response-"
                label=" "
                value=" "
                checked={response === " "}
            />
            </div>
        </div>
    );
}
export default BasicQ