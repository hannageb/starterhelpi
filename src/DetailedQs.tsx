import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from "react-router-dom";

function GoHomeScreen() {
    return(
        <header>
            <Link to="/">
                <Button style={{float:'right'}}>
                    Homepage
                </Button>
            </Link>
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
export default DetailedQ