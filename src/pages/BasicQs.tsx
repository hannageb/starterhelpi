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
    const [responses, setResponses] = useState<{ [key: string]: string }>({});

    function updateResponse(event: React.ChangeEvent<HTMLInputElement>) {
        setResponses({
            ...responses,
            [event.target.name]: event.target.value,
        });
    }

    const [progress, setProgress] = useState<number>(0);
    const [propName, setPropName] = useState([""])

    const ChangeProg = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(propName.indexOf(event.target.name) === -1){
            setPropName( [...propName, event.target.name])
            setProgress((prevProgress)=> prevProgress+Math.round(((1/9)*100))>100 ? 100:prevProgress+Math.round(((1/9)*100)))
        }
    }

    return(
        <div>
            <GoHomeScreen></GoHomeScreen>
            <div className="Desc">
                <h5>Find out what field might be best for you by answering a sweet and simple questionaire</h5>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
                <div style={{ textAlign: 'center' }}>
                    <p>{progress}%</p>
                    <div style={{ width: '700px', border: '2px solid', borderRadius: '30px'}}>
                    <div style={{ height: '40px', background: "darkblue", width: `${progress}%`, transition: "width 0.3s ease-in-out", borderRadius: '30px' }}></div>
                </div>
            </div>
            </div>
            <div className="Questions">
                <h3>
                    1) I like disassembling and reassembling things
                </h3>
                <Form.Group onChange={ChangeProg}>
                    <Form.Check
                        inline
                        type="radio"
                        name="assembling"
                        onChange={(e) => { updateResponse(e); ChangeProg(e); } }
                        id="strongly agree"
                        label="Strongly Agree"
                        value="Strongly Agree"
                        checked={responses["assembling"] === "Strongly Agree"} />
                    <Form.Check
                        inline
                        type="radio"
                        name="assembling"
                        onChange={(e) => { updateResponse(e); ChangeProg(e); } }
                        id="agree"
                        label="Agree"
                        value="Agree"
                        checked={responses["assembling"] === "Agree"} />
                    <Form.Check
                        inline
                        type="radio"
                        name="assembling"
                        onChange={(e) => { updateResponse(e); ChangeProg(e); } }
                        id="neither"
                        label="Neither agree nor Disagree"
                        value="Neither agree nor Disagree"
                        checked={responses["assembling"] === "Neither agree nor Disagree"} />
                    <Form.Check
                        inline
                        type="radio"
                        name="assembling"
                        onChange={(e) => { updateResponse(e); ChangeProg(e); } }
                        id="Disagree"
                        label="Disagree"
                        value="Disagree"
                        checked={responses["assembling"] === "Disagree"} />
                    <Form.Check
                        inline
                        type="radio"
                        name="assembling"
                        onChange={(e) => { updateResponse(e); ChangeProg(e); } }
                        id="Strongly Disagree"
                        label="Strongly Disagree"
                        value="Strongly Disagree"
                        checked={responses["assembling"] === "Strongly Disagree"} />
                </Form.Group>

                <h3>
                    2) I am good at collaborating with others
                </h3>
                <Form.Group>
                    <Form.Check
                        inline
                        type="radio"
                        name="collaboration"
                        onChange={(e) => { updateResponse(e); ChangeProg(e); } }
                        id="strongly agree"
                        label="Strongly Agree"
                        value="Strongly Agree"
                        checked={responses["collaboration"] === "Strongly Agree"} />
                    <Form.Check
                        inline
                        type="radio"
                        name="collaboration"
                        onChange={(e) => { updateResponse(e); ChangeProg(e); } }
                        id="agree"
                        label="Agree"
                        value="Agree"
                        checked={responses["collaboration"] === "Agree"} />
                    <Form.Check
                        inline
                        type="radio"
                        name="collaboration"
                        onChange={(e) => { updateResponse(e); ChangeProg(e); } }
                        id="neither"
                        label="Neither agree nor Disagree"
                        value="Neither agree nor Disagree"
                        checked={responses["collaboration"] === "Neither agree nor Disagree"} />
                    <Form.Check
                        inline
                        type="radio"
                        name="collaboration"
                        onChange={(e) => { updateResponse(e); ChangeProg(e); } }
                        id="Disagree"
                        label="Disagree"
                        value="Disagree"
                        checked={responses["collaboration"] === "Disagree"} />
                    <Form.Check
                        inline
                        type="radio"
                        name="collaboration"
                        onChange={(e) => { updateResponse(e); ChangeProg(e); } }
                        id="Strongly Disagree"
                        label="Strongly Disagree"
                        value="Strongly Disagree"
                        checked={responses["collaboration"] === "Strongly Disagree"} />
                </Form.Group>
                <h3>
                    3) I am good at persuading others
                </h3>
                <Form.Check
                    inline
                    type="radio"
                    name="persuasion"
                    onChange={(e) => { updateResponse(e); ChangeProg(e); } }
                    id="strongly agree"
                    label="Strongly Agree"
                    value="Strongly Agree"
                    checked={responses["persuasion"] === "Strongly Agree"} />
                <Form.Check
                    inline
                    type="radio"
                    name="persuasion"
                    onChange={(e) => { updateResponse(e); ChangeProg(e); } }
                    id="agree"
                    label="Agree"
                    value="Agree"
                    checked={responses["persuasion"] === "Agree"} />
                <Form.Check
                    inline
                    type="radio"
                    name="persuasion"
                    onChange={(e) => { updateResponse(e); ChangeProg(e); } }
                    id="neither"
                    label="Neither agree nor Disagree"
                    value="Neither agree nor Disagree"
                    checked={responses["persuasion"] === "Neither agree nor Disagree"} />
                <Form.Check
                    inline
                    type="radio"
                    name="persuasion"
                    onChange={(e) => { updateResponse(e); ChangeProg(e); } }
                    id="Disagree"
                    label="Disagree"
                    value="Disagree"
                    checked={responses["persuasion"] === "Disagree"} />
                <Form.Check
                    inline
                    type="radio"
                    name="persuasion"
                    onChange={(e) => { updateResponse(e); ChangeProg(e); } }
                    id="Strongly Disagree"
                    label="Strongly Disagree"
                    value="Strongly Disagree"
                    checked={responses["persuasion"] === "Strongly Disagree"} />
                <h3>
                    4) What subjects do you enjoy?
                </h3>
                <Form.Check
                    type="checkbox"
                    name="subjects"
                    onChange={(e) => { updateResponse(e); ChangeProg(e); } }
                    id="math"
                    label="Mathematics"
                    value="math" />
                <Form.Check
                    type="checkbox"
                    name="subjects"
                    onChange={(e) => { updateResponse(e); ChangeProg(e); } }
                    id="bisc"
                    label="Biology"
                    value="bisc" />
                <Form.Check
                    type="checkbox"
                    name="subjects"
                    onChange={(e) => { updateResponse(e); ChangeProg(e); } }
                    id="hist"
                    label="History"
                    value="hist" />
                <Form.Check
                    type="checkbox"
                    name="subjects"
                    onChange={(e) => { updateResponse(e); ChangeProg(e); } }
                    id="engl"
                    label="English & Foreign Language"
                    value="engl" />
                <Form.Check
                    type="checkbox"
                    name="subjects"
                    onChange={(e) => { updateResponse(e); ChangeProg(e); } }
                    id="chem"
                    label="Chemistry"
                    value="chem" />
                <h3>
                    5) What skills do you have?
                </h3>
                <Form.Check
                    type="checkbox"
                    name="skillset"
                    onChange={(e) => { updateResponse(e); ChangeProg(e); } }
                    id="comm"
                    label="Communication"
                    value="comm" />
                <Form.Check
                    type="checkbox"
                    name="skillset"
                    onChange={(e) => { updateResponse(e); ChangeProg(e); } }
                    id="lead"
                    label="Leadership"
                    value="lead" />
                <Form.Check
                    type="checkbox"
                    name="skillset"
                    onChange={(e) => { updateResponse(e); ChangeProg(e); } }
                    id="problem-solving"
                    label="Problem Solving"
                    value="problem-solving" />
                <Form.Check
                    type="checkbox"
                    name="skillset"
                    onChange={(e) => { updateResponse(e); ChangeProg(e); } }
                    id="time"
                    label="Time Management"
                    value="time" />
                <Form.Check
                    type="checkbox"
                    name="skillset"
                    onChange={(e) => { updateResponse(e); ChangeProg(e); } }
                    id="creativity"
                    label="Creativity"
                    value="creativity" />
                <h3>
                    6) What hobbies do you find yourself doing in your freetime?
                </h3>
                <Form.Check
                    type="checkbox"
                    name="hobbies"
                    onChange={(e) => { updateResponse(e); ChangeProg(e); } }
                    id="art"
                    label="Arts (drawing, painting, playing music)"
                    value="art" />
                <Form.Check
                    type="checkbox"
                    name="hobbies"
                    onChange={(e) => { updateResponse(e); ChangeProg(e); } }
                    id="hands-on"
                    label="Building something"
                    value="hands-on" />
                <Form.Check
                    type="checkbox"
                    name="hobbies"
                    onChange={(e) => { updateResponse(e); ChangeProg(e); } }
                    id="active"
                    label="Playing sports"
                    value="active" />
                <Form.Check
                    type="checkbox"
                    name="hobbies"
                    onChange={(e) => { updateResponse(e); ChangeProg(e); } }
                    id="social"
                    label="Hanging out with friends"
                    value="social" />
                <Form.Check
                    type="checkbox"
                    name="hobbies"
                    onChange={(e) => { updateResponse(e); ChangeProg(e); } }
                    id="learning"
                    label="Reading/Writing"
                    value="learning" />
                <h3>
                    7) What work environment do you prefer?
                </h3>
                <Form.Check
                    type="radio"
                    name="work-environment"
                    onChange={(e) => { updateResponse(e); ChangeProg(e); } }
                    id="office"
                    label="Office"
                    value="Office"
                    checked={responses["work-environment"] === "Office"} />
                <Form.Check
                    type="radio"
                    name="work-environment"
                    onChange={(e) => { updateResponse(e); ChangeProg(e); } }
                    id="Work from Home"
                    label="Work from Home"
                    value="Work from Home"
                    checked={responses["work-environment"] === "Work from Home"} />
                <Form.Check
                    type="radio"
                    name="work-environment"
                    onChange={(e) => { updateResponse(e); ChangeProg(e); } }
                    id="Lab"
                    label="Lab"
                    value="Lab"
                    checked={responses["work-environment"] === "Lab"} />
                <Form.Check
                    type="radio"
                    name="work-environment"
                    onChange={(e) => { updateResponse(e); ChangeProg(e); } }
                    id="Hands-on"
                    label="Hands-on"
                    value="Hands-on"
                    checked={responses["work-environment"] === "Hands-on"} />
                <h3>
                    8) What do you first look at when considering a career?
                </h3>
                <Form.Check
                    type="radio"
                    name="key-factor"
                    onChange={(e) => { updateResponse(e); ChangeProg(e); } }
                    id="Salary"
                    label="Salary"
                    value="Salary"
                    checked={responses["key-factor"] === "Salary"} />
                <Form.Check
                    type="radio"
                    name="key-factor"
                    onChange={(e) => { updateResponse(e); ChangeProg(e); } }
                    id="Flexibility"
                    label="Flexibility"
                    value="Flexibility"
                    checked={responses["key-factor"] === "Flexibility"} />
                <Form.Check
                    type="radio"
                    name="key-factor"
                    onChange={(e) => { updateResponse(e); ChangeProg(e); } }
                    id="Passion"
                    label="Passion"
                    value="Passion"
                    checked={responses["key-factor"] === "Passion"} />
                <Form.Check
                    type="radio"
                    name="key-factor"
                    onChange={(e) => { updateResponse(e); ChangeProg(e); } }
                    id="Societal Impact"
                    label="Societal Impact"
                    value="Societal Impact"
                    checked={responses["key-factor"] === "Societal Impact"} />
                <h3>
                    9) Which of the following is most exciting?
                </h3>
                <Form.Check
                    type="radio"
                    name="exciting"
                    onChange={(e) => { updateResponse(e); ChangeProg(e); } }
                    id="learning"
                    label="Learning new things"
                    value="Learning new things"
                    checked={responses["exciting"] === "Learning new things"} />
                <Form.Check
                    type="radio"
                    name="exciting"
                    onChange={(e) => { updateResponse(e); ChangeProg(e); } }
                    id="Expression"
                    label="Expressing myself through art"
                    value="Expressing myself through art"
                    checked={responses["exciting"] === "Expressing myself through art"} />
                <Form.Check
                    type="radio"
                    name="exciting"
                    onChange={(e) => { updateResponse(e); ChangeProg(e); } }
                    id="challenge"
                    label="Challenging myself"
                    value="Challenging myself"
                    checked={responses["exciting"] === "Challenging myself"} />
                <Form.Check
                    type="radio"
                    name="exciting"
                    onChange={(e) => { updateResponse(e); ChangeProg(e); } }
                    id="impact"
                    label="Seeing my impact on other people"
                    value="Seeing my impact on other people"
                    checked={responses["exciting"] === "Seeing my impact on other people"} />
            </div>
        </div>
    );
}
export default BasicQ
