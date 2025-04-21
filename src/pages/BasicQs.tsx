import React, { useState } from "react";
import { Navigate} from "react-router-dom";
import Form from 'react-bootstrap/Form';
import './BasicQs.css';
import Confetti from 'react-confetti';
import { useWindowSize } from '@react-hook/window-size'; 

function GoHomeScreen() {
    const [goToHome, setGoToHome] = useState(false);
    const [goToDetailed, setGoToDetailed] = useState(false);

    if (goToHome) return <Navigate to="/" />;
    if (goToDetailed) return <Navigate to="/Detailed Question" />;

    return (
        <header className="header">
            <h1 className="centerTitle">BASIC QUESTIONS</h1>
            <button onClick={() => setGoToHome(true)} className="back-button">Home</button>
            <button onClick={() => setGoToDetailed(true)} className="detailed-button">Detailed Questions</button>
        </header>
    );
}

function BasicQ() {
    const [responses, setResponses] = useState<{ [key: string]: string }>({});
    const [showConfetti, setShowConfetti] = useState(false);
    const [width, height] = useWindowSize();
    const [progress, setProgress] = useState<number>(0);
    const [page, setPage] = useState(1);
    const [propName, setPropName] = useState([""]);
    const [goToReport, setGoToReport] = useState(false);

    if (goToReport) return <Navigate to="/Basic Report"/>;

    const updateResponse = (event: React.ChangeEvent<HTMLInputElement>) => {
        setResponses({ ...responses, [event.target.name]: event.target.value });
    };

    const nextPage = () => { if (page < 5) setPage(page + 1); };
    const prevPage = () => { if (page > 1) setPage(page - 1); };

    const ChangeProg = (event: React.ChangeEvent<HTMLInputElement>) => {
        updateResponse(event);
        if (!propName.includes(event.target.name)) {
            const newProgress = progress + 10 > 100 ? 100 : progress + 10;
            setPropName([...propName, event.target.name]);
            setProgress(newProgress);
            if (newProgress === 100) {
                setShowConfetti(true);
                setTimeout(() => setShowConfetti(false), 5000);
            }
        }
    };

    return (
        <div>
            <GoHomeScreen />
            <div className="Desc">
                <h5 style={{color: '#E6D9D9'}}>Find out what field might be best for you by answering a sweet and simple questionnaire</h5>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
                <div style={{ textAlign: 'center' }}>
                    <p>{progress}%</p>
                    <div style={{ width: '700px', border: '2px solid', borderRadius: '30px' }}>
                        <div style={{ height: '40px', background: "darkblue", width: `${progress}%`, transition: "width 0.3s ease-in-out", borderRadius: '30px' }}></div>
                    </div>
                </div>
            </div>
            <div className="Questions">
                {page === 1 && (
                    <>
                        <h3>1) I like disassembling and reassembling things</h3>
                        <Form.Group onChange={ChangeProg}>
                            <Form.Check inline type="radio" name="assembling" value="Strongly Agree" label="Strongly Agree" checked={responses["assembling"] === "Strongly Agree"} />
                            <Form.Check inline type="radio" name="assembling" value="Agree" label="Agree" checked={responses["assembling"] === "Agree"} />
                            <Form.Check inline type="radio" name="assembling" value="Neither agree nor Disagree" label="Neither agree nor Disagree" checked={responses["assembling"] === "Neither agree nor Disagree"} />
                            <Form.Check inline type="radio" name="assembling" value="Disagree" label="Disagree" checked={responses["assembling"] === "Disagree"} />
                            <Form.Check inline type="radio" name="assembling" value="Strongly Disagree" label="Strongly Disagree" checked={responses["assembling"] === "Strongly Disagree"} />
                        </Form.Group>

                        <h3>2) I am good at collaborating with others</h3>
                        <Form.Group onChange={ChangeProg}>
                            <Form.Check inline type="radio" name="collaboration" value="Strongly Agree" label="Strongly Agree" checked={responses["collaboration"] === "Strongly Agree"} />
                            <Form.Check inline type="radio" name="collaboration" value="Agree" label="Agree" checked={responses["collaboration"] === "Agree"} />
                            <Form.Check inline type="radio" name="collaboration" value="Neither agree nor Disagree" label="Neither agree nor Disagree" checked={responses["collaboration"] === "Neither agree nor Disagree"} />
                            <Form.Check inline type="radio" name="collaboration" value="Disagree" label="Disagree" checked={responses["collaboration"] === "Disagree"} />
                            <Form.Check inline type="radio" name="collaboration" value="Strongly Disagree" label="Strongly Disagree" checked={responses["collaboration"] === "Strongly Disagree"} />
                        </Form.Group>
                    </>
                )}

                {page === 2 && (
                    <>
                        <h3>3) I am good at persuading others</h3>
                        <Form.Group onChange={ChangeProg}>
                            <Form.Check inline type="radio" name="persuasion" value="Strongly Agree" label="Strongly Agree" checked={responses["persuasion"] === "Strongly Agree"} />
                            <Form.Check inline type="radio" name="persuasion" value="Agree" label="Agree" checked={responses["persuasion"] === "Agree"} />
                            <Form.Check inline type="radio" name="persuasion" value="Neither agree nor Disagree" label="Neither agree nor Disagree" checked={responses["persuasion"] === "Neither agree nor Disagree"} />
                            <Form.Check inline type="radio" name="persuasion" value="Disagree" label="Disagree" checked={responses["persuasion"] === "Disagree"} />
                            <Form.Check inline type="radio" name="persuasion" value="Strongly Disagree" label="Strongly Disagree" checked={responses["persuasion"] === "Strongly Disagree"} />
                        </Form.Group>

                        <h3>4) What subjects do you enjoy?</h3>
                        <Form.Group onChange={ChangeProg}>
                            <Form.Check type="checkbox" name="subjects" value="Math" label="Mathematics" />
                            <Form.Check type="checkbox" name="subjects" value="Biology" label="Biology" />
                            <Form.Check type="checkbox" name="subjects" value="History" label="History" />
                            <Form.Check type="checkbox" name="subjects" value="English & Foreign Language" label="English & Foreign Language" />
                            <Form.Check type="checkbox" name="subjects" value="Chemistry" label="Chemistry" />
                        </Form.Group>
                    </>
                )}

                {page === 3 && (
                    <>
                        <h3>5) What skills do you have?</h3>
                        <Form.Group onChange={ChangeProg}>
                            <Form.Check type="checkbox" name="skillset" value="Communication" label="Communication" />
                            <Form.Check type="checkbox" name="skillset" value="Leadership" label="Leadership" />
                            <Form.Check type="checkbox" name="skillset" value="Problem Solving" label="Problem Solving" />
                            <Form.Check type="checkbox" name="skillset" value="Time Management" label="Time Management" />
                            <Form.Check type="checkbox" name="skillset" value="Creativity" label="Creativity" />
                        </Form.Group>

                        <h3>6) What hobbies do you find yourself doing in your freetime?</h3>
                        <Form.Group onChange={ChangeProg}>
                            <Form.Check type="checkbox" name="hobbies" value="Arts" label="Arts (drawing, painting, playing music)" />
                            <Form.Check type="checkbox" name="hobbies" value="Building" label="Building something" />
                            <Form.Check type="checkbox" name="hobbies" value="Sports" label="Playing sports" />
                            <Form.Check type="checkbox" name="hobbies" value="Friends" label="Hanging out with friends" />
                            <Form.Check type="checkbox" name="hobbies" value="Reading" label="Reading/Writing" />
                        </Form.Group>
                    </>
                )}

                {page === 4 && (
                    <>
                        <h3>7) What work environment do you prefer?</h3>
                        <Form.Group onChange={ChangeProg}>
                            <Form.Check type="radio" name="work-environment" value="Office" label="Office" checked={responses["work-environment"] === "Office"} />
                            <Form.Check type="radio" name="work-environment" value="Work from Home" label="Work from Home" checked={responses["work-environment"] === "Work from Home"} />
                            <Form.Check type="radio" name="work-environment" value="Lab" label="Lab" checked={responses["work-environment"] === "Lab"} />
                            <Form.Check type="radio" name="work-environment" value="Hands-on" label="Hands-on" checked={responses["work-environment"] === "Hands-on"} />
                        </Form.Group>

                        <h3>8) What do you first look at when considering a career?</h3>
                        <Form.Group onChange={ChangeProg}>
                            <Form.Check type="radio" name="key-factor" value="Salary" label="Salary" checked={responses["key-factor"] === "Salary"} />
                            <Form.Check type="radio" name="key-factor" value="Flexibility" label="Flexibility" checked={responses["key-factor"] === "Flexibility"} />
                            <Form.Check type="radio" name="key-factor" value="Passion" label="Passion" checked={responses["key-factor"] === "Passion"} />
                            <Form.Check type="radio" name="key-factor" value="Societal Impact" label="Societal Impact" checked={responses["key-factor"] === "Societal Impact"} />
                        </Form.Group>
                    </>
                )}

                {page === 5 && (
                    <>
                        <h3>9) Which of the following is most exciting?</h3>
                        <Form.Group onChange={ChangeProg}>
                            <Form.Check type="radio" name="exciting" value="Learning" label="Learning new things" checked={responses["exciting"] === "Learning"} />
                            <Form.Check type="radio" name="exciting" value="Art" label="Expressing myself through art" checked={responses["exciting"] === "Art"} />
                            <Form.Check type="radio" name="exciting" value="Challenge" label="Challenging myself" checked={responses["exciting"] === "Challenge"} />
                            <Form.Check type="radio" name="exciting" value="Impact" label="Seeing my impact on others" checked={responses["exciting"] === "Impact"} />
                        </Form.Group>

                        <h3>10) Which of the following is the component you're most excited for in your dream job?</h3>
                        <Form.Group onChange={ChangeProg}>
                            <Form.Check type="radio" name="dream-job" value="Traveling" label="Traveling" checked={responses["dream-job"] === "Traveling"} />
                            <Form.Check type="radio" name="dream-job" value="Money" label="Making money" checked={responses["dream-job"] === "Money"} />
                            <Form.Check type="radio" name="dream-job" value="Opportunity" label="Opportunity to learn new things" checked={responses["dream-job"] === "Opportunity"} />
                            <Form.Check type="radio" name="dream-job" value="Community" label="Working with other people" checked={responses["dream-job"] === "Community"} />
                        </Form.Group>
                    </>
                )}

                <div className="pagination-buttons" style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                    <button onClick={prevPage} disabled={page === 1}>⬅️ Previous</button>
                    <button onClick={nextPage} disabled={page === 5}>Next ➡️</button>
                </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '30px' }}>
                <button
                    disabled={Object.keys(responses).length < 10}
                    className={`submit-button ${Object.keys(responses).length < 10 ? 'disabled' : 'enabled'}`}
                    onClick={() => {setGoToReport(true)}}
                >
                    Submit
                </button>
            </div>
            {showConfetti && <Confetti width={width} height={height} />}
        </div>
    );
}

export default BasicQ;