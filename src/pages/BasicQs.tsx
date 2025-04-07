import React, { useEffect, useState } from "react";
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
    const [responses, setResponses] = useState<{ [key: string]: string }>({});

    function updateResponse(event: React.ChangeEvent<HTMLInputElement>) {
        setResponses({
            ...responses,
            [event.target.name]: event.target.value,
        });
    }

    const [progress, setProgress] = useState(0);
    const ChangeProg = () => {
        setProgress((prevProgress)=> prevProgress+5>100 ? 100:prevProgress+5)
    }

    return(
        <div>
            <GoHomeScreen></GoHomeScreen>
            <div className="Desc">
                <h4>Find out what field might be best for you by answering a sweet and simple questionaire</h4>
            </div>
            <div className="Questions">
                <h3>
                    1) I like disassembling and reassembling things
                </h3>
                <Form.Check
                    type="radio"
                    name="assembling"
                    onChange={updateResponse}
                    id="strongly agree"
                    label="Strongly Agree"
                    value="Strongly Agree"
                    checked={responses["assembling"] === "Strongly Agree"}
                />
                <Form.Check
                    type="radio"
                    name="assembling"
                    onChange={updateResponse}
                    id="agree"
                    label="Agree"
                    value="Agree"
                    checked={responses["assembling"] === "Agree"}
                />
                <Form.Check
                    type="radio"
                    name="assembling"
                    onChange={updateResponse}
                    id="neither"
                    label="Neither agree nor Disagree"
                    value="Neither agree nor Disagree"
                    checked={responses["assembling"] === "Neither agree nor Disagree"}
                />
                <Form.Check
                    type="radio"
                    name="assembling"
                    onChange={updateResponse}
                    id="Disagree"
                    label="Disagree"
                    value="Disagree"
                    checked={responses["assembling"] === "Disagree"}
                />
                <Form.Check
                    type="radio"
                    name="assembling"
                    onChange={updateResponse}
                    id="Strongly Disagree"
                    label="Strongly Disagree"
                    value="Strongly Disagree"
                    checked={responses["assembling"] === "Strongly Disagree"}
                />
                <h3>
                    2) I am good at collaborating with others
                </h3>
                <Form.Check
                    type="radio"
                    name="collaboration"
                    onChange={updateResponse}
                    id="strongly agree"
                    label="Strongly Agree"
                    value="Strongly Agree"
                    checked={responses["collaboration"] === "Strongly Agree"}
                />
                <Form.Check
                    type="radio"
                    name="collaboration"
                    onChange={updateResponse}
                    id="agree"
                    label="Agree"
                    value="Agree"
                    checked={responses["collaboration"] === "Agree"}
                />
                <Form.Check
                    type="radio"
                    name="collaboration"
                    onChange={updateResponse}
                    id="neither"
                    label="Neither agree nor Disagree"
                    value="Neither agree nor Disagree"
                    checked={responses["collaboration"] === "Neither agree nor Disagree"}
                />
                <Form.Check
                    type="radio"
                    name="collaboration"
                    onChange={updateResponse}
                    id="Disagree"
                    label="Disagree"
                    value="Disagree"
                    checked={responses["collaboration"] === "Disagree"}
                />
                <Form.Check
                    type="radio"
                    name="collaboration"
                    onChange={updateResponse}
                    id="Strongly Disagree"
                    label="Strongly Disagree"
                    value="Strongly Disagree"
                    checked={responses["collaboration"] === "Strongly Disagree"}
                />
                <h3>
                    3) I am good at persuading others
                </h3>
                <Form.Check
                    type="radio"
                    name="persuasion"
                    onChange={updateResponse}
                    id="strongly agree"
                    label="Strongly Agree"
                    value="Strongly Agree"
                    checked={responses["persuasion"] === "Strongly Agree"}
                />
                <Form.Check
                    type="radio"
                    name="persuasion"
                    onChange={updateResponse}
                    id="agree"
                    label="Agree"
                    value="Agree"
                    checked={responses["persuasion"] === "Agree"}
                />
                <Form.Check
                    type="radio"
                    name="persuasion"
                    onChange={updateResponse}
                    id="neither"
                    label="Neither agree nor Disagree"
                    value="Neither agree nor Disagree"
                    checked={responses["persuasion"] === "Neither agree nor Disagree"}
                />
                <Form.Check
                    type="radio"
                    name="persuasion"
                    onChange={updateResponse}
                    id="Disagree"
                    label="Disagree"
                    value="Disagree"
                    checked={responses["persuasion"] === "Disagree"}
                />
                <Form.Check
                    type="radio"
                    name="persuasion"
                    onChange={updateResponse}
                    id="Strongly Disagree"
                    label="Strongly Disagree"
                    value="Strongly Disagree"
                    checked={responses["persuasion"] === "Strongly Disagree"}
                />
                <h3>
                    4) What subjects do you enjoy?
                </h3>
                <Form.Check
                    type="checkbox"
                    name="subjects"
                    onChange={updateResponse}
                    id="math"
                    label="Mathematics"
                    value="math"
                />
                <Form.Check
                    type="checkbox"
                    name="subjects"
                    onChange={updateResponse}
                    id="bisc"
                    label="Biology"
                    value="bisc"
                />
                <Form.Check
                    type="checkbox"
                    name="subjects"
                    onChange={updateResponse}
                    id="hist"
                    label="History"
                    value="hist"
                />
                <Form.Check
                    type="checkbox"
                    name="subjects"
                    onChange={updateResponse}
                    id="engl"
                    label="English & Foreign Language"
                    value="engl"
                />
                 <Form.Check
                    type="checkbox"
                    name="subjects"
                    onChange={updateResponse}
                    id="chem"
                    label="Chemistry"
                    value="chem"
                />
                <h3>
                    5) 
                </h3>
            </div>
            <div style={{display:'flex',justifyContent:'center', margin:'20px'}}>
                <div style={{textAlign:'center'}}>
                    <p>{progress}%</p>
                    <div style={{width:'700px', border:'2px solid'}}>
                        <div style={{height:'40px',background:"green",width:`${progress}%`, transition:"width 0.3s ease-in-out"}}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default BasicQ
