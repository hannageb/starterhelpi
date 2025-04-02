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
            <div>
                <h3>
                    Which skills do you excel at or enjoy using the most?
                </h3>
                <Form.Check
                type="radio"
                name="work-skills"
                onChange={updateResponse}
                id="problem-solving"
                label="Problem Solving"
                value="problem-solving"
                checked={response === "problem-solving"}
                />
                <Form.Check
                type="radio"
                name="work-skills"
                onChange={updateResponse}
                id="communication"
                label="Communication"
                value="communication"
                checked={response === "communication"}
                />
                <Form.Check
                type="radio"
                name="work-skills"
                onChange={updateResponse}
                id="creativity"
                label="Creativity"
                value="creativity"
                checked={response === "creativity"}
                />
                <Form.Check
                type="radio"
                name="work-skills"
                onChange={updateResponse}
                id="leadership"
                label="Leadership"
                value="leadership"
                checked={response === "leadership"}
                />
                <Form.Check
                type="radio"
                name="work-skills"
                onChange={updateResponse}
                id="technical-skills"
                label="Technical Skills"
                value="technical-skills"
                checked={response === "technical-skills"}
                />
                <Form.Check
                type="radio"
                name="work-skills"
                onChange={updateResponse}
                id="teaching"
                label="Teaching/Education"
                value="teaching"
                checked={response === "teaching"}
                />   
                </div>
            <div>
                <h3>
                    
                </h3>
            </div>
        </div>
    )
}
export default DetailedQ