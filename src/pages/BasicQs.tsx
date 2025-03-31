import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';

export function GoHomeScreen() {
    const [goToHome, setGoToHome] = React.useState(false)
    if (goToHome){
        return <Navigate to="/"/>;
    }

    return(
        <div>
            BASIC QUESTIONS
            <button
            onClick={() => {
                setGoToHome(true)
            }}>
            {" "}
            Go to Homepage
            </button>
        </div>
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
        <div>
            <h3 style={{alignItems:'center'}}>
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