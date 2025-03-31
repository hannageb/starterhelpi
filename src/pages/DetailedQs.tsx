import React, { useState } from "react";
import GoHomeScreen from './BasicQs';
import { Form } from "react-bootstrap";

function DetailedQ(){
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
    )
}
export default DetailedQ
