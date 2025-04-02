import React, { useState } from "react";
//import GoHomeScreen from './BasicQs';
import { Form } from "react-bootstrap";
import { Navigate } from "react-router-dom";

function GoHomeScreen() {
    const [goToHome, setGoToHome] = React.useState(false)
    if (goToHome){
        return <Navigate to="/"/>;
    }

    return(
        <header className="header">
            <h1 className="centerTitle">
                DETAILED QUESTIONS
            </h1>
            <button onClick={() => {setGoToHome(true)}} className="back-button">
                {" "}Go to Homepage
            </button>
        </header>
    );
}

function DetailedQ(){
    const [response, setResponse] = useState<string>("");

    function updateResponse(event: React.ChangeEvent<HTMLInputElement>) {
        setResponse(event.target.value);
    }
    return(
        <div>
        <GoHomeScreen></GoHomeScreen>
        <div>
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
    )
}
export default DetailedQ