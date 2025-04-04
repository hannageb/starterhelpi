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
        <div>
            <GoHomeScreen></GoHomeScreen>
            <div className="Desc">
                <h4>Find out what field might be best for you by answering a sweet and simple questionaire</h4>
            </div>
            <div className="Questions">
                <h3>
                    Question filler    
                </h3>
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