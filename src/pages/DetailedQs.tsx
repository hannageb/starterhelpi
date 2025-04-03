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
                    How do you prefer to work?
                </h3>
            <Form.Check
                type="radio"
                name="work-preferences"
                onChange={updateResponse}
                id="independently"
                label="Independently"
                value="independently"
                checked={response === "independently"}
            />
            <Form.Check 
                type="radio"
                name="work-preferences"
                onChange={updateResponse}
                id="small-team"
                label="In a small team"
                value="small-team"
                checked={response === "small-team"}
                />
            <Form.Check
                type="radio"
                name="work-preferences"
                onChange={updateResponse}
                id="leading"
                label="Leading and managing people"
                value="leading"
                checked={response === "leading"}
            />
            <Form.Check
                type="radio"
                name="work-preferences"
                onChange={updateResponse}
                id="large-group"
                label="Large group settings"
                value="large-group"
                checked={response === "large-group"}
            />
            </div>
            <div>
                <h3>
                    What level of education or training are you open to pursuing?
                </h3>
            <Form.Check
                type="radio"
                name="education-level"
                onChange={updateResponse}
                id="high-school"
                label="High school diploma or equivalent"
                value="high-school"
                checked={response === "high-school"}
            />
            <Form.Check
                type="radio"
                name="education-level"
                onChange={updateResponse}
                id="trade-school"
                label="Certification or trade school"
                value="trade-school"
                checked={response === "trade-school"}
            />
            <Form.Check
                type="radio"
                name="education-level"
                onChange={updateResponse}
                id="associates-or-bachelors"
                label="Associate's or bachelor's degree"
                value="associates-or-bachelors"
                checked={response === "associates-or-bachelors"}
                />
            <Form.Check
                type="radio"
                name="education-level"
                onChange={updateResponse}
                id="masters"
                label="Master's degree or higher"
                value="masters"
                checked={response === "masters"}
                />
            </div>
            <div>
                <h3>
                    How important is job stability and salary to you?
                </h3>
            <Form.Check
                type="radio"
                name="stability-and-salary"
                onChange={updateResponse}
                id="extremely-important"
                label="Extremely important (I need a secure and high-paying job)"
                value="extremely-important"
                checked={response === "extremely-important"}
            />
            <Form.Check
                type="radio"
                name="stability-and-salary"
                onChange={updateResponse}
                id="somewhat-important"
                label="Somewhat important (I value passion as much as financial security)"
                value="somewhat-important"
                checked={response === "somewhat-important"}
            />
            <Form.Check
                type="radio"
                name="stability-and-salary"
                onChange={updateResponse}
                id="not-very-important"
                label="Not very important (I prioritize creativity, purpose, or flexibility over salary)"
                value="not-very-important"
                checked={response === "not-very-important"}
            />
            </div>
            <div>
                <h3>
                    How do you handle stress and pressure at work?
                </h3>
            <Form.Check
                type="radio"
                name="handle-stress"
                onChange={updateResponse}
                id="thrive-in-high-pressure"
                label="I thrive in high-pressure situations"
                value="thrive-in-high-pressure"
                checked={response === "thrive-in-high-pressure"}
            />
            <Form.Check
                type="radio"
                name="handle-stress"
                onChange={updateResponse}
                id="thrive-in-high-pressure"
                label="I thrive in high-pressure situations"
                value="thrive-in-high-pressure"
                checked={response === "thrive-in-high-pressure"} 
            />
            <Form.Check
                type="radio"
                name="handle-stress"
                onChange={updateResponse}
                id="steady-manageable"
                label="I prefer steady, manageable workloads"
                value="steady-manageable"
                checked={response === "steady-manageable"} 
            />
            <Form.Check
                type="radio"
                name="handle-stress"
                onChange={updateResponse}
                id="creative-time-sensitive"
                label="I like creative problem-solving over time-sensitive tasks"
                value="creative-time-sensitive"
                checked={response === "creative-time-sensitive"} 
            />
            <Form.Check
                 type="radio"
                 name="handle-stress"
                 onChange={updateResponse}
                 id="balanced-challenges"
                 label="I enjoy challenges but need a balanced workload"
                 value="balanced-challenges"
                 checked={response === "balanced-challenges"} 
            />
            </div>
            <div>
                <h3>
                    Are you open to relocating for better career opportunities?
                </h3>
            <Form.Check
                type="radio"
                name="relocating"
                onChange={updateResponse}
                id="yes"
                label="Yes, I’m willing to move anywhere for the right opportunity"
                value="yes"
                checked={response === "yes"} 
            />
            <Form.Check
                type="radio"
                name="relocating"
                onChange={updateResponse}
                id="maybe"
                label="Maybe, but I prefer staying in my current region"
                value="maybe"
                checked={response === "maybe"}
            />
            <Form.Check
                type="radio"
                name="relocating"
                onChange={updateResponse}
                id="no"
                label="No, I want to work close to home"
                value="no"
                checked={response === "no"}
            />
            </div>
            <div>
                <h3>
                    What kind of career growth and advancement opportunities are important to you?
                </h3>
            <Form.Check
                type="radio"
                name="career-growth"
                onChange={updateResponse}
                id="clear-structured"
                label="I want a clear, structured promotion path"
                value="clear-structured"
                checked={response === "clear-structured"}
            />
            <Form.Check
                type="radio"
                name="career-growth"
                onChange={updateResponse}
                id="self-driven-growth"
                label="I want a flexible career with new opportunities and self-driven growth"
                value="self-driven-growth"
                checked={response === "self-driven-growth"}
            />
            <Form.Check
                type="radio"
                name="career-growth"
                onChange={updateResponse}
                id="managing"
                label="I see myself managing and leading teams, making strategic decisions and guiding others in my field"
                value="managing"
                checked={response === "managing"}
            />
            <Form.Check
                type="radio"
                name="career-growth"
                onChange={updateResponse}
                id="highly-skilled"
                label="I want to become a highly skilled specialist in my field without necessarily managing people."
                value="highly-skilled"
                checked={response === "highly-skilled"}
            />
            </div>
        </div>
    )
}
export default DetailedQ