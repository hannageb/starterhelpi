import React, { useState } from "react";
//import GoHomeScreen from './BasicQs';
import { Form } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import './DetailedQs.css'


function GoHomeScreen() {
    const [goToHome, setGoToHome] = React.useState(false);
    const[goToBasic, setGoToBasic] = React.useState(false)

    if (goToHome) {
        return <Navigate to="/" />;
    }
    if(goToBasic){
        if(goToBasic){
            return <Navigate to="/Basic Question"/>;
        }
    }

    return (
        <header className="header">
            <h1 className="centerTitle">DETAILED QUESTIONS</h1>
            <button onClick={() => {setGoToHome(true)}} className="back-button">
            {" "}Home
            </button>
            <button onClick={()=>{setGoToBasic(true)}} className="basic-button">
                {" "}Basic Questions
            </button>
        </header>
    );
}



function DetailedQ() {
    const [responses, setResponses] = useState<{ [key: string]: string }>({});
    const [progress, setProgress] = useState<number>(0);
    const [propName, setPropName] = useState([""])
    const navigate = useNavigate();
    
    const ChangeProg = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(propName.indexOf(event.target.name) === -1){
            setPropName( [...propName, event.target.name])
            setProgress((prevProgress)=> prevProgress+10>100 ? 100:prevProgress+10)
        }
    }

    function updateResponse(event: React.ChangeEvent<HTMLInputElement>) {
        setResponses({
            ...responses,
            [event.target.name]: event.target.value,
        });

    }
    return(
        <div>
            <GoHomeScreen></GoHomeScreen>
            <div className="description">
                <h5> Click this button if you want a more personalized career suggestion! Instead of just a general field, you'll answer in-depth questions about your interests, skills, and work preferences to get a more specific career match tailored to you.</h5>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
                    <div style={{ textAlign: 'center' }}>
                        <p>{progress}%</p>
                        <div style={{ width: '700px', border: '2px solid', borderRadius: '30px'}}>
                        <div style={{ height: '40px', background: "darkblue", width: `${progress}%`, transition: "width 0.3s ease-in-out", borderRadius: '30px'}}></div>
                    </div>
                </div>
            </div>
            <div className="questions">
                <h3>Which type of work environment do you prefer?</h3> 
                <Form.Check
                    type="radio"
                    name="work-environment"
                    onChange={(e) => {updateResponse(e);ChangeProg(e);}}
                    id="office"
                    label="Structured office setting"
                    value="office"
                    checked={responses["work-environment"] === "office"}
                />
                <Form.Check
                    type="radio"
                    name="work-environment"
                    onChange={(e) => {updateResponse(e);ChangeProg(e);}}
                    id="remote"
                    label="Flexible remote work"
                    value="remote"
                    checked={responses["work-environment"] === "remote"}
                />
                <Form.Check
                    type="radio"
                    name="work-environment"
                    onChange={(e) => {updateResponse(e);ChangeProg(e);}}
                    id="hybrid"
                    label="Flexible hybrid work"
                    value="hybrid"
                    checked={responses["work-environment"] === "hybrid"}
                />
                <Form.Check
                    type="radio"
                    name="work-environment"
                    onChange={(e) => {updateResponse(e);ChangeProg(e);}}
                    id="outdoor"
                    label="Outdoor or hands-on work"
                    value="outdoor"
                    checked={responses["work-environment"] === "outdoor"}
                />
                <Form.Check
                    type="radio"
                    name="work-environment"
                    onChange={(e) => {updateResponse(e);ChangeProg(e);}}
                    id="fast-paced"
                    label="Fast paced, high-energy settings (e.g., hospitals, stock markets)"
                    value="fast-paced"
                    checked={responses["work-environment"] === "fast-paced"}
                />
                <Form.Check
                    type="radio"
                    name="work-environment"
                    onChange={(e) => {updateResponse(e);ChangeProg(e);}}
                    id="independent"
                    label="Independent or freelance work"
                    value="independent"
                    checked={responses["work-environment"] === "independent"}
                />
            <div>
                <h3>
                    Which skills do you excel at or enjoy using the most?
                </h3>
                <Form.Check
                    type="radio"
                    name="work-skills"
                    onChange={(e) => {updateResponse(e);ChangeProg(e);}}
                    id="problem-solving"
                    label="Problem Solving"
                    value="problem-solving"
                    checked={responses["work-skills"] === "problem-solving"}
                />
                <Form.Check
                    type="radio"
                    name="work-skills"
                    onChange={(e) => {updateResponse(e);ChangeProg(e);}}
                    id="communication"
                    label="Communication"
                    value="communication"
                    checked={responses["work-skills"] === "communication"}
                />
                <Form.Check
                    type="radio"
                    name="work-skills"
                    onChange={(e) => {updateResponse(e);ChangeProg(e);}}
                    id="creativity"
                    label="Creativity"
                    value="creativity"
                    checked={responses["work-skills"] === "creativity"}
                />
                <Form.Check
                    type="radio"
                    name="work-skills"
                    onChange={(e) => {updateResponse(e);ChangeProg(e);}}
                    id="leadership"
                    label="Leadership"
                    value="leadership"
                    checked={responses["work-skills"] === "leadership"}
                />
                <Form.Check
                    type="radio"
                    name="work-skills"
                    onChange={(e) => {updateResponse(e);ChangeProg(e);}}
                    id="technical-skills"
                    label="Technical Skills"
                    value="technical-skills"
                    checked={responses["work-skills"] === "technical-skills"}
                />
                <Form.Check
                type="radio"
                    name="work-skills"
                    onChange={(e) => {updateResponse(e);ChangeProg(e);}}
                    id="teaching"
                    label="Teaching/Education"
                    value="teaching"
                    checked={responses["work-skills"] === "teaching"}
                />   
                    </div>
                <div>
                    <h3>
                        How do you prefer to work?
                    </h3>
                <Form.Check
                    type="radio"
                    name="work-preferences"
                    onChange={(e) => {updateResponse(e);ChangeProg(e);}}
                    id="independently"
                    label="Independently"
                    value="independently"
                    checked={responses["work-preferences"] === "independently"}
                />
                <Form.Check 
                    type="radio"
                    name="work-preferences"
                    onChange={(e) => {updateResponse(e);ChangeProg(e);}}
                    id="small-team"
                    label="In a small team"
                    value="small-team"
                    checked={responses["work-preferences"] === "small-team"}
                    />
                <Form.Check
                    type="radio"
                    name="work-preferences"
                    onChange={(e) => {updateResponse(e);ChangeProg(e);}}
                    id="leading"
                    label="Leading and managing people"
                    value="leading"
                    checked={responses["work-preferences"] === "leading"}
                />
                <Form.Check
                    type="radio"
                    name="work-preferences"
                    onChange={(e) => {updateResponse(e);ChangeProg(e);}}
                    id="large-group"
                    label="Large group settings"
                    value="large-group"
                    checked={responses["work-preferences"] === "large-group"}
                />
                </div>
                <div>
                    <h3>
                        What level of education or training are you open to pursuing?
                    </h3>
                <Form.Check
                    type="radio"
                    name="education-level"
                    onChange={(e) => {updateResponse(e);ChangeProg(e);}}
                    id="high-school"
                    label="High school diploma or equivalent"
                    value="high-school"
                    checked={responses["education-level"] === "high-school"}
                />
                <Form.Check
                    type="radio"
                    name="education-level"
                    onChange={(e) => {updateResponse(e);ChangeProg(e);}}
                    id="trade-school"
                    label="Certification or trade school"
                    value="trade-school"
                    checked={responses["education-level"] === "trade-school"}
                />
                <Form.Check
                    type="radio"
                    name="education-level"
                    onChange={(e) => {updateResponse(e);ChangeProg(e);}}
                    id="associates-or-bachelors"
                    label="Associate's or bachelor's degree"
                    value="associates-or-bachelors"
                    checked={responses["education-level"] === "associates-or-bachelors"}
                    />
                <Form.Check
                    type="radio"
                    name="education-level"
                    onChange={(e) => {updateResponse(e);ChangeProg(e);}}
                    id="masters"
                    label="Master's degree or higher"
                    value="masters"
                    checked={responses["education-level"] === "masters"}
                    />
                </div>
                <div>
                    <h3>
                        How important is job stability and salary to you?
                    </h3>
                <Form.Check
                    type="radio"
                    name="stability-and-salary"
                    onChange={(e) => {updateResponse(e);ChangeProg(e);}}
                    id="extremely-important"
                    label="Extremely important (I need a secure and high-paying job)"
                    value="extremely-important"
                    checked={responses["stability-and-salary"] === "extremely-important"}
                />
                <Form.Check
                    type="radio"
                    name="stability-and-salary"
                    onChange={(e) => {updateResponse(e);ChangeProg(e);}}
                    id="somewhat-important"
                    label="Somewhat important (I value passion as much as financial security)"
                    value="somewhat-important"
                    checked={responses["stability-and-salary"] === "somewhat-important"}
                />
                <Form.Check
                    type="radio"
                    name="stability-and-salary"
                    onChange={(e) => {updateResponse(e);ChangeProg(e);}}
                    id="not-very-important"
                    label="Not very important (I prioritize creativity, purpose, or flexibility over salary)"
                    value="not-very-important"
                    checked={responses["stability-and-salary"] === "not-very-important"}
                />
                </div>
                <div>
                    <h3>
                        How do you handle stress and pressure at work?
                    </h3>
                <Form.Check
                    type="radio"
                    name="handle-stress"
                    onChange={(e) => {updateResponse(e);ChangeProg(e);}}
                    id="thrive-in-high-pressure"
                    label="I thrive in high-pressure situations"
                    value="thrive-in-high-pressure"
                    checked={responses["handle-stress"] === "thrive-in-high-pressure"}
                />
                <Form.Check
                    type="radio"
                    name="handle-stress"
                    onChange={(e) => {updateResponse(e);ChangeProg(e);}}
                    id="steady-manageable"
                    label="I prefer steady, manageable workloads"
                    value="steady-manageable"
                    checked={responses["handle-stress"] === "steady-manageable"}
                />
                <Form.Check
                    type="radio"
                    name="handle-stress"
                    onChange={(e) => {updateResponse(e);ChangeProg(e);}}
                    id="creative-time-sensitive"
                    label="I like creative problem-solving over time-sensitive tasks"
                    value="creative-time-sensitive"
                    checked={responses["handle-stress"] === "creative-time-sensitive"}
                />
                <Form.Check
                    type="radio"
                    name="handle-stress"
                    onChange={(e) => {updateResponse(e);ChangeProg(e);}}
                    id="balanced-challenges"
                    label="I enjoy challenges but need a balanced workload"
                    value="balanced-challenges"
                    checked={responses["handle-stress"] === "balanced-challenges"}
                />
                </div>
                <div>
                    <h3>
                        Are you open to relocating for better career opportunities?
                    </h3>
                <Form.Check
                    type="radio"
                    name="relocating"
                    onChange={(e) => {updateResponse(e);ChangeProg(e);}}
                    id="yes"
                    label="Yes, I’m willing to move anywhere for the right opportunity"
                    value="yes"
                    checked={responses["relocating"] === "yes"}
                />
                <Form.Check
                    type="radio"
                    name="relocating"
                    onChange={(e) => {updateResponse(e);ChangeProg(e);}}
                    id="maybe"
                    label="Maybe, but I prefer staying in my current region"
                    value="maybe"
                    checked={responses["relocating"] === "maybe"}
                />
                <Form.Check
                    type="radio"
                    name="relocating"
                    onChange={(e) => {updateResponse(e);ChangeProg(e);}}
                    id="no"
                    label="No, I want to work close to home"
                    value="no"
                    checked={responses["relocating"] === "no"}
                />
                </div>
                <div>
                    <h3>
                        What kind of career growth and advancement opportunities are important to you?
                    </h3>
                <Form.Check
                    type="radio"
                    name="career-growth"
                    onChange={(e) => {updateResponse(e);ChangeProg(e);}}
                    id="clear-structured"
                    label="I want a clear, structured promotion path"
                    value="clear-structured"
                    checked={responses["career-growth"] === "clear-structured"}
                />
                <Form.Check
                    type="radio"
                    name="career-growth"
                    onChange={(e) => {updateResponse(e);ChangeProg(e);}}
                    id="self-driven-growth"
                    label="I want a flexible career with new opportunities and self-driven growth"
                    value="self-driven-growth"
                    checked={responses["career-growth"] === "self-driven-growth"}
                />
                <Form.Check
                    type="radio"
                    name="career-growth"
                    onChange={(e) => {updateResponse(e);ChangeProg(e);}}
                    id="managing"
                    label="I see myself managing and leading teams, making strategic decisions and guiding others in my field"
                    value="managing"
                    checked={responses["career-growth"] === "managing"}
                />
                <Form.Check
                    type="radio"
                    name="career-growth"
                    onChange={(e) => {updateResponse(e);ChangeProg(e);}}
                    id="highly-skilled"
                    label="I want to become a highly skilled specialist in my field without necessarily managing people."
                    value="highly-skilled"
                    checked={responses["career-growth"] === "highly-skilled"}
                />
                </div>
                <div>
                    <h3>
                        How do you prefer to solve problems at work?
                    </h3>
                <Form.Check
                    type="radio"
                    name="problem-solving"
                    onChange={(e) => {updateResponse(e);ChangeProg(e);}}
                    id="logical-analytical"
                    label="I like breaking down problems, finding patterns, and using facts to make decisions"
                    value="logical-analytical"
                    checked={responses["problem-solving"] === "logical-analytical"}
                />
                <Form.Check
                    type="radio"
                    name="problem-solving"
                    onChange={(e) => {updateResponse(e);ChangeProg(e);}}
                    id="creative-innovative"
                    label="I enjoy thinking outside the box and coming up with new ideas"
                    value="creative-innovative"
                    checked={responses["problem-solving"] === "creative-innovative"}
                />
                <Form.Check
                    type="radio"
                    name="problem-solving"
                    onChange={(e) => {updateResponse(e);ChangeProg(e);}}
                    id="practical"
                    label="I prefer fixing things directly or physically working through solutions"
                    value="practical"
                    checked={responses["problem-solving"] === "practical"}
                />
                <Form.Check
                    type="radio"
                    name="problem-solving"
                    onChange={(e) => {updateResponse(e);ChangeProg(e);}}
                    id="people-focused"
                    label="I believe the best answers come from teamwork and understanding people’s needs"
                    value="people-focused"
                    checked={responses["problem-solving"] === "people-focused"}
                />
                <Form.Check
                    type="radio"
                    name="problem-solving"
                    onChange={(e) => {updateResponse(e);ChangeProg(e);}}
                    id="high-pressure"
                    label="I perform well under stress and like making fast, decisive choices"
                    value="high-pressure"
                    checked={responses["problem-solving"] === "high-pressure"}
                />
                </div>
                <div>
                    <h3>
                        How do you want to be recognized or valued in your career?
                    </h3>
                <Form.Check
                    type="radio"
                    name="recognition"
                    onChange={(e) => {updateResponse(e);ChangeProg(e);}}
                    id="financial-rewards"
                    label="I want my salary, bonuses, and benefits to reflect my hard work and skills"
                    value="financial-rewards"
                    checked={responses["recognition"] === "financial-rewards"}
                />
                <Form.Check
                    type="radio"
                    name="recognization"
                    onChange={(e) => {updateResponse(e);ChangeProg(e);}}
                    id="public-recognition"
                    label="I want to be known for my work and have a strong professional reputation"
                    value="public-recognition"
                    checked={responses["recognition"] === "public-recognition"}
                />
                <Form.Check
                    type="radio"
                    name="recognition"
                    onChange={(e) => {updateResponse(e);ChangeProg(e);}}
                    id="personal-fulfillment"
                    label="I care more about making a difference in people’s lives than receiving public recognition"
                    value="personal-fulfillment"
                    checked={responses["recognition"] === "personal-fulfillment"}
                />
                <Form.Check
                    type="radio"
                    name="recognition"
                    onChange={(e) => {updateResponse(e);ChangeProg(e);}}
                    id="opporunities"
                    label="I want to be respected as an expert in my field and have opportunities to advance"
                    value="opportunities"
                    checked={responses["recognition"] === "opportunities"}
                />
                <Form.Check
                    type="radio"
                    name="recognition"
                    onChange={(e) => {updateResponse(e);ChangeProg(e);}}
                    id="creative-expression"
                    label="I want my ideas, creativity, or problem-solving skills to be valued"
                    value="creative-expression"
                    checked={responses["recognition"] === "creative-expression"}
                />
                <Form.Check
                    type="radio"
                    name="recognition"
                    onChange={(e) => {updateResponse(e);ChangeProg(e);}}
                    id="independence-autonomy"
                    label="I prefer to work on my own terms without needing external validation"
                    value="independence-autonomy"
                    checked={responses["recognition"] === "independence-autonomy"}
                />
                </div>
                </div>
            <div style={{ textAlign: 'center', marginTop: '30px' }}>
              <button
                disabled={Object.keys(responses).length < 10}
                style={{
                    backgroundColor: Object.keys(responses).length < 10 ? 'grey' : '#004080',
                    color: 'white',
                    fontSize: '18px',
                    padding: '10px 30px',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: Object.keys(responses).length < 10? 'not-allowed' : 'pointer',
                    transition: 'background-color 0.3s', 
                }}
                onClick={() => navigate('/')} 
            > 
                Submit
            </button>
        </div>
        </div>
    );
}
export default DetailedQ