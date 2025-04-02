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
                Which type of work environment do you prefer?    
            </h3>
            <Form.Check
                type="radio"
                name="work-environment"
                onChange={updateResponse}
                id="office"
                label="Structured office setting"
                value="office"
                checked={response === "office"}
            />
            <Form.Check
                type="radio"
                name="work-environment"
                onChange={updateResponse}
                id="remote"
                label="Flexible remote work"
                value="remote"
                checked={response === "remote"}
            />
            <Form.Check
                type="radio"
                name="work-environment"
                onChange={updateResponse}
                id="hybrid"
                label="Flexible hybrid work"
                value="hybrid"
                checked={response === "hybrid"}
            />
            <Form.Check
                type="radio"
                name="work-environment"
                onChange={updateResponse}
                id="outdoor"
                label="Outdoor or hands-on work"
                value="outdoor"
                checked={response === "outdoor"}
            />
            <Form.Check
                type="radio"
                name="work-environment"
                onChange={updateResponse}
                id="fast-paced"
                label="Fast paced, high-energy settings (e.g., hospitals, stock markets)"
                value="fast-paced"
                checked={response === "fast-paced"}
            />
            <Form.Check
                type="radio"
                name="work-environment"
                onChange={updateResponse}
                id="independent"
                label="Independent or freelance work"
                value="independent"
                checked={response === "independent"}
            />
                </div>
        </div>
    )
}
export default DetailedQ