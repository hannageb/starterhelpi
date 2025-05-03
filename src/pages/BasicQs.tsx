import React, { useState } from "react";
import { Navigate} from "react-router-dom";
import Form from 'react-bootstrap/Form';
import './BasicQs.css';
import Confetti from 'react-confetti';
import { useWindowSize } from '@react-hook/window-size'; 

function GoHomeScreen() {
    const [goToHome, setGoToHome] = useState(false);
    const [goToFAQ, setGoToFAQ] = useState(false);
    const [goToDetailed, setGoToDetailed] = useState(false);
    const [goToUser, setGoToUser] = useState(false);

    if (goToHome) return <Navigate to="/" />;
    if (goToFAQ) return <Navigate to="/FAQ" />;
    if (goToUser) return <Navigate to="/User Profile"/>;
    if (goToDetailed) return <Navigate to="/Detailed Question"/>;

    return (
        <header className="header">
            <h1 className="centerTitle">BASIC QUESTIONS</h1>
            <div className="left-nav">
                <button onClick={() => setGoToHome(true)} className="back-button">
                    <img src="./cisc275-logo.png" alt="polar bear wearing a graduation cap" width="50" height="50"></img>
                </button>
                <button onClick={() => setGoToFAQ(true)}>FAQ</button>
                <button onClick={() => setGoToUser(true)}>User Profile</button>
            </div>
            <div className="right-nav">
                <button onClick={() => setGoToDetailed(true)}>Detailed Questions</button>

            </div>
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

    if (goToReport) return <Navigate to="/Basic Report" state={{responses}}/>;

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
            <div style={{ display: 'flex', justifyContent: 'center'}}>
                <div style={{ textAlign: 'center' }}>
                    <p>{progress}%</p>
                    <div style={{ width: '700px', border: '2px solid', borderRadius: '30px', marginBottom: '2%'}}>
                        <div style={{ height: '20px', background: "darkblue", width: `${progress}%`, transition: "width 0.3s ease-in-out", borderRadius: '30px'}}></div>
                    </div>
                </div>
            </div>
            <div className="Questions">
                {page === 1 && (
                    <>
                        <h3>1) I like disassembling and reassembling things</h3>
                        {/*from gemini to help fix console errors  */} 
                        <Form.Group onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            updateResponse(event); 
                            ChangeProg(event); 
                            }}>
                            <Form.Check inline type="radio" name="I like disassembling and reassembling things" value="Strongly Agree" label="Strongly Agree" checked={responses["I like disassembling and reassembling things"] === "Strongly Agree"} />
                            <Form.Check inline type="radio" name="I like disassembling and reassembling things" value="Agree" label="Agree" checked={responses["I like disassembling and reassembling things"] === "Agree"} />
                            <Form.Check inline type="radio" name="I like disassembling and reassembling things" value="Neither agree nor Disagree" label="Neither agree nor Disagree" checked={responses["I like disassembling and reassembling things"] === "Neither agree nor Disagree"} />
                            <Form.Check inline type="radio" name="I like disassembling and reassembling things" value="Disagree" label="Disagree" checked={responses["I like disassembling and reassembling things"] === "Disagree"} />
                            <Form.Check inline type="radio" name="I like disassembling and reassembling things" value="Strongly Disagree" label="Strongly Disagree" checked={responses["I like disassembling and reassembling things"] === "Strongly Disagree"} />
                        </Form.Group>

                        <h3>2) I am good at collaborating with others</h3>
                        <Form.Group onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            updateResponse(event); 
                            ChangeProg(event); 
                            }}>
                            <Form.Check inline type="radio" name="I am good at collaborating with others" value="Strongly Agree" label="Strongly Agree" checked={responses["I am good at collaborating with others"] === "Strongly Agree"} />
                            <Form.Check inline type="radio" name="I am good at collaborating with others" value="Agree" label="Agree" checked={responses["I am good at collaborating with others"] === "Agree"} />
                            <Form.Check inline type="radio" name="I am good at collaborating with others" value="Neither agree nor Disagree" label="Neither agree nor Disagree" checked={responses["I am good at collaborating with others"] === "Neither agree nor Disagree"} />
                            <Form.Check inline type="radio" name="I am good at collaborating with others" value="Disagree" label="Disagree" checked={responses["I am good at collaborating with others"] === "Disagree"} />
                            <Form.Check inline type="radio" name="I am good at collaborating with others" value="Strongly Disagree" label="Strongly Disagree" checked={responses["I am good at collaborating with others"] === "Strongly Disagree"} />
                        </Form.Group>
                    </>
                )}

                {page === 2 && (
                    <>
                        <h3>3) I am good at persuading others</h3>
                        <Form.Group onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            updateResponse(event); 
                            ChangeProg(event); 
                            }}>
                            <Form.Check inline type="radio" name="I am good at persuading others" value="Strongly Agree" label="Strongly Agree" checked={responses["I am good at persuading others"] === "Strongly Agree"} />
                            <Form.Check inline type="radio" name="I am good at persuading others" value="Agree" label="Agree" checked={responses["I am good at persuading others"] === "Agree"} />
                            <Form.Check inline type="radio" name="I am good at persuading others" value="Neither agree nor Disagree" label="Neither agree nor Disagree" checked={responses["I am good at persuading others"] === "Neither agree nor Disagree"} />
                            <Form.Check inline type="radio" name="I am good at persuading others" value="Disagree" label="Disagree" checked={responses["I am good at persuading others"] === "Disagree"} />
                            <Form.Check inline type="radio" name="I am good at persuading others" value="Strongly Disagree" label="Strongly Disagree" checked={responses["I am good at persuading others"] === "Strongly Disagree"} />
                        </Form.Group>

                        <h3>4) What subjects do you enjoy?</h3>
                        <Form.Group onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            updateResponse(event); 
                            ChangeProg(event); 
                            }}>
                            <Form.Check type="checkbox" name="What subjects do you enjoy?" value="Math" label="Mathematics" />
                            <Form.Check type="checkbox" name="What subjects do you enjoy?" value="Biology" label="Biology" />
                            <Form.Check type="checkbox" name="What subjects do you enjoy?" value="History" label="History" />
                            <Form.Check type="checkbox" name="What subjects do you enjoy?" value="English & Foreign Language" label="English & Foreign Language" />
                            <Form.Check type="checkbox" name="What subjects do you enjoy?" value="Chemistry" label="Chemistry" />
                        </Form.Group>
                    </>
                )}

                {page === 3 && (
                    <>
                        <h3>5) What skills do you have?</h3>
                        <Form.Group onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            updateResponse(event); 
                            ChangeProg(event); 
                            }}>
                            <Form.Check type="checkbox" name="What skills do you have?" value="Communication" label="Communication" />
                            <Form.Check type="checkbox" name="What skills do you have?" value="Leadership" label="Leadership" />
                            <Form.Check type="checkbox" name="What skills do you have?" value="Problem Solving" label="Problem Solving" />
                            <Form.Check type="checkbox" name="What skills do you have?" value="Time Management" label="Time Management" />
                            <Form.Check type="checkbox" name="What skills do you have?" value="Creativity" label="Creativity" />
                        </Form.Group>

                        <h3>6) What hobbies do you find yourself doing in your freetime?</h3>
                        <Form.Group onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            updateResponse(event); 
                            ChangeProg(event); 
                            }}>
                            <Form.Check type="checkbox" name="What hobbies do you find yourself doing in your freetime?" value="Arts" label="Arts (drawing, painting, playing music)" />
                            <Form.Check type="checkbox" name="What hobbies do you find yourself doing in your freetime?" value="Building" label="Building something" />
                            <Form.Check type="checkbox" name="What hobbies do you find yourself doing in your freetime?" value="Sports" label="Playing sports" />
                            <Form.Check type="checkbox" name="What hobbies do you find yourself doing in your freetime?" value="Friends" label="Hanging out with friends" />
                            <Form.Check type="checkbox" name="What hobbies do you find yourself doing in your freetime?" value="Reading" label="Reading/Writing"/>
                        </Form.Group>
                    </>
                )}

                {page === 4 && (
                    <>
                        <h3>7) What work environment do you prefer?</h3>
                        <Form.Group onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            updateResponse(event); 
                            ChangeProg(event); 
                            }}>
                            <Form.Check type="radio" name="What work environment do you prefer?" value="Office" label="Office" checked={responses["What work environment do you prefer?"] === "Office"} />
                            <Form.Check type="radio" name="What work environment do you prefer?" value="Work from Home" label="Work from Home" checked={responses["What work environment do you prefer?"] === "Work from Home"} />
                            <Form.Check type="radio" name="What work environment do you prefer?" value="Lab" label="Lab" checked={responses["What work environment do you prefer?"] === "Lab"} />
                            <Form.Check type="radio" name="What work environment do you prefer?" value="Hands-on" label="Hands-on" checked={responses["What work environment do you prefer?"] === "Hands-on"} />
                        </Form.Group>

                        <h3>8) What do you first look at when considering a career?</h3>
                        <Form.Group onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            updateResponse(event); 
                            ChangeProg(event); 
                            }}>
                            <Form.Check type="radio" name=" What do you first look at when considering a career?" value="Salary" label="Salary" checked={responses[" What do you first look at when considering a career?"] === "Salary"} />
                            <Form.Check type="radio" name=" What do you first look at when considering a career?" value="Flexibility" label="Flexibility" checked={responses[" What do you first look at when considering a career?"] === "Flexibility"} />
                            <Form.Check type="radio" name=" What do you first look at when considering a career?" value="Passion" label="Passion" checked={responses[" What do you first look at when considering a career?"] === "Passion"} />
                            <Form.Check type="radio" name=" What do you first look at when considering a career?" value="Societal Impact" label="Societal Impact" checked={responses[" What do you first look at when considering a career?"] === "Societal Impact"} />
                        </Form.Group>
                    </>
                )}

                {page === 5 && (
                    <>
                        <h3>9) Which of the following is most exciting?</h3>
                        <Form.Group onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            updateResponse(event); 
                            ChangeProg(event); 
                            }}>
                            <Form.Check type="radio" name="Which of the following is most exciting?" value="Learning" label="Learning new things" checked={responses["Which of the following is most exciting?"] === "Learning"} />
                            <Form.Check type="radio" name="Which of the following is most exciting?" value="Art" label="Expressing myself through art" checked={responses["Which of the following is most exciting?"] === "Art"} />
                            <Form.Check type="radio" name="Which of the following is most exciting?" value="Challenge" label="Challenging myself" checked={responses["Which of the following is most exciting?"] === "Challenge"} />
                            <Form.Check type="radio" name="Which of the following is most exciting?" value="Impact" label="Seeing my impact on others" checked={responses["Which of the following is most exciting?"] === "Impact"} />
                        </Form.Group>

                        <h3>10) Which of the following is the component you're most excited for in your dream job?</h3>
                        <Form.Group onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            updateResponse(event); 
                            ChangeProg(event); 
                            }}>
                            <Form.Check type="radio" name="Which of the following is the component you're most excited for in your dream job?" value="Traveling" label="Traveling" checked={responses["Which of the following is the component you're most excited for in your dream job?"] === "Traveling"} />
                            <Form.Check type="radio" name="Which of the following is the component you're most excited for in your dream job?" value="Money" label="Making money" checked={responses["Which of the following is the component you're most excited for in your dream job?"] === "Money"} />
                            <Form.Check type="radio" name="Which of the following is the component you're most excited for in your dream job?" value="Opportunity" label="Opportunity to learn new things" checked={responses["Which of the following is the component you're most excited for in your dream job?"] === "Opportunity"} />
                            <Form.Check type="radio" name="Which of the following is the component you're most excited for in your dream job?" value="Community" label="Working with other people" checked={responses["Which of the following is the component you're most excited for in your dream job?"] === "Community"} />
                        </Form.Group>
                    </>
                    
                )}
                

                <div className="pagination-buttons" style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                    <button onClick={prevPage} disabled={page === 1}>⬅️ Previous</button>
                    <button onClick={nextPage} disabled={page === 5}>Next ➡️</button>
                </div>
                <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <div className="submit-container">
        <button
         disabled={Object.keys(responses).length < 10}
            className={`submit-button ${Object.keys(responses).length < 10 ? 'disabled' : 'enabled'}`}
            onClick={() => { setGoToReport(true); }}
            >
            Submit
        </button>
    </div>
    </div>

            </div>
            {showConfetti && <Confetti width={width} height={height} />}
            <footer className="footer">
                <p>Made with 💛 by Luc, Hanna & Isha — CareerHelpi 2025</p>
            </footer>
        </div>
        
    );
}

export default BasicQ;