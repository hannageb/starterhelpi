import React, { useState } from "react";
import { Navigate } from "react-router";
import Form from 'react-bootstrap/Form';
import './BasicQs.css';
import Confetti from 'react-confetti';
import { useWindowSize } from '@react-hook/window-size'; 
import GoHomeScreen from "./homepages/basic_home";
import Footer from "../footer";

function BasicQ() {
    const [responses, setResponses] = useState<{ [key: string]: string }>({});
    const [showConfetti, setShowConfetti] = useState(false);
    const [width, height] = useWindowSize();
    const [progress, setProgress] = useState<number>(0);
    const [page, setPage] = useState(1);
    const [propName, setPropName] = useState([""]);
    const [goToReport, setGoToReport] = useState(false); 

    if (goToReport) return <Navigate to="/Basic Report" state={{responses}}/>;

    /* saves responses as "Question name: answer" */
    const updateResponse = (event: React.ChangeEvent<HTMLInputElement>) => {
        setResponses({ ...responses, [event.target.name]: event.target.value });
    };

    const clearResponse = () => {
        /* clears the responses, progress bar, and if the question has been answered */
        setResponses({})
        setProgress(0);
        setPropName([""]);
    }

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
            <GoHomeScreen data-testid='nav bar' />
            <div style={{ display: 'flex', justifyContent: 'center'}} data-testid="progressBar">
                <div style={{ textAlign: 'center' }}>
                    <div style={{ width: '700px', border: '2px solid', borderRadius: '30px', marginBottom: '2%', marginTop: '4%'}}>
                        <div style={{ height: '20px', backgroundImage: "linear-gradient(rgb(40, 130, 213), rgb(73, 70, 173))", width: `${progress}%`, transition: "width 0.3s ease-in-out", borderRadius: '30px'}}><p style={{color: "whitesmoke"}}>{progress}%</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Questions" data-testid = 'question skeleton'>
                {page === 1 && (
                    <>
                        <h3>1) I like disassembling and reassembling things</h3>
                        <Form.Group data-testid="question">
                            <Form.Check inline type="radio" name="I like disassembling and reassembling things" value="Strongly Agree" label="Strongly Agree" checked={responses["I like disassembling and reassembling things"] === "Strongly Agree"} onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {updateResponse(e); ChangeProg(e)}}/>
                            <Form.Check inline type="radio" name="I like disassembling and reassembling things" value="Agree" label="Agree" checked={responses["I like disassembling and reassembling things"] === "Agree"}onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {updateResponse(e); ChangeProg(e)}} />
                            <Form.Check inline type="radio" name="I like disassembling and reassembling things" value="Neither agree nor Disagree" label="Neither agree nor Disagree" checked={responses["I like disassembling and reassembling things"] === "Neither agree nor Disagree"} onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {updateResponse(e); ChangeProg(e)}}/>
                            <Form.Check inline type="radio" name="I like disassembling and reassembling things" value="Disagree" label="Disagree" checked={responses["I like disassembling and reassembling things"] === "Disagree"}onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {updateResponse(e); ChangeProg(e)}} />
                            <Form.Check inline type="radio" name="I like disassembling and reassembling things" value="Strongly Disagree" label="Strongly Disagree" checked={responses["I like disassembling and reassembling things"] === "Strongly Disagree"} onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {updateResponse(e); ChangeProg(e)}}/>
                        </Form.Group>

                        <h3>2) I am good at collaborating with others</h3>
                        <Form.Group data-testid="question">
                            <Form.Check inline type="radio" name="I am good at collaborating with others" value="Strongly Agree" label="Strongly Agree" checked={responses["I am good at collaborating with others"] === "Strongly Agree"} onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {updateResponse(e); ChangeProg(e)}} />
                            <Form.Check inline type="radio" name="I am good at collaborating with others" value="Agree" label="Agree" checked={responses["I am good at collaborating with others"] === "Agree"} onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {updateResponse(e); ChangeProg(e)}} />
                            <Form.Check inline type="radio" name="I am good at collaborating with others" value="Neither agree nor Disagree" label="Neither agree nor Disagree" checked={responses["I am good at collaborating with others"] === "Neither agree nor Disagree"} onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {updateResponse(e); ChangeProg(e)}} />
                            <Form.Check inline type="radio" name="I am good at collaborating with others" value="Disagree" label="Disagree" checked={responses["I am good at collaborating with others"] === "Disagree"} onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {updateResponse(e); ChangeProg(e)}} />
                            <Form.Check inline type="radio" name="I am good at collaborating with others" value="Strongly Disagree" label="Strongly Disagree" checked={responses["I am good at collaborating with others"] === "Strongly Disagree"} onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {updateResponse(e); ChangeProg(e)}} />
                        </Form.Group>
                    </>
                )}

                {page === 2 && (
                    <>
                        <h3 >3) I am good at persuading others</h3>
                        <Form.Group data-testid="question">
                            <Form.Check inline type="radio" name="I am good at persuading others" value="Strongly Agree" label="Strongly Agree" checked={responses["I am good at persuading others"] === "Strongly Agree"} onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {updateResponse(e); ChangeProg(e)}}/>
                            <Form.Check inline type="radio" name="I am good at persuading others" value="Agree" label="Agree" checked={responses["I am good at persuading others"] === "Agree"} onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {updateResponse(e); ChangeProg(e)}}/>
                            <Form.Check inline type="radio" name="I am good at persuading others" value="Neither agree nor Disagree" label="Neither agree nor Disagree" checked={responses["I am good at persuading others"] === "Neither agree nor Disagree"} onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {updateResponse(e); ChangeProg(e)}}/>
                            <Form.Check inline type="radio" name="I am good at persuading others" value="Disagree" label="Disagree" checked={responses["I am good at persuading others"] === "Disagree"} onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {updateResponse(e); ChangeProg(e)}}/>
                            <Form.Check inline type="radio" name="I am good at persuading others" value="Strongly Disagree" label="Strongly Disagree" checked={responses["I am good at persuading others"] === "Strongly Disagree"} onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {updateResponse(e); ChangeProg(e)}}/>
                        </Form.Group>

                        <h3 >4) What subjects do you enjoy?</h3>
                        <Form.Group data-testid="question">
                            <Form.Check type="checkbox" name="What subjects do you enjoy?" value="Math" label="Mathematics" onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {updateResponse(e); ChangeProg(e)}}/>
                            <Form.Check type="checkbox" name="What subjects do you enjoy?" value="Biology" label="Biology" onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {updateResponse(e); ChangeProg(e)}}/>
                            <Form.Check type="checkbox" name="What subjects do you enjoy?" value="History" label="History" onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {updateResponse(e); ChangeProg(e)}}/>
                            <Form.Check type="checkbox" name="What subjects do you enjoy?" value="English & Foreign Language" label="English & Foreign Language" onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {updateResponse(e); ChangeProg(e)}}/>
                            <Form.Check type="checkbox" name="What subjects do you enjoy?" value="Chemistry" label="Chemistry" onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {updateResponse(e); ChangeProg(e)}}/>
                        </Form.Group>
                    </>
                )}

                {page === 3 && (
                    <>
                        <h3>5) What skills do you have?</h3>
                        <Form.Group data-testid="question">
                            <Form.Check type="checkbox" name="What skills do you have?" value="Communication" label="Communication" onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {updateResponse(e); ChangeProg(e)}}/>
                            <Form.Check type="checkbox" name="What skills do you have?" value="Leadership" label="Leadership" onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {updateResponse(e); ChangeProg(e)}}/>
                            <Form.Check type="checkbox" name="What skills do you have?" value="Problem Solving" label="Problem Solving" onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {updateResponse(e); ChangeProg(e)}}/>
                            <Form.Check type="checkbox" name="What skills do you have?" value="Time Management" label="Time Management" onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {updateResponse(e); ChangeProg(e)}}/>
                            <Form.Check type="checkbox" name="What skills do you have?" value="Creativity" label="Creativity" onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {updateResponse(e); ChangeProg(e)}}/>
                        </Form.Group>

                        <h3>6) What hobbies do you find yourself doing in your freetime?</h3>
                        <Form.Group data-testid="question">
                            <Form.Check type="checkbox" name="What hobbies do you find yourself doing in your freetime?" value="Arts" label="Arts (drawing, painting, playing music)" onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {updateResponse(e); ChangeProg(e)}} aria-label='question'/>
                            <Form.Check type="checkbox" name="What hobbies do you find yourself doing in your freetime?" value="Building" label="Building something" onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {updateResponse(e); ChangeProg(e)}}/>
                            <Form.Check type="checkbox" name="What hobbies do you find yourself doing in your freetime?" value="Sports" label="Playing sports" onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {updateResponse(e); ChangeProg(e)}}/>
                            <Form.Check type="checkbox" name="What hobbies do you find yourself doing in your freetime?" value="Friends" label="Hanging out with friends" onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {updateResponse(e); ChangeProg(e)}}/>
                            <Form.Check type="checkbox" name="What hobbies do you find yourself doing in your freetime?" value="Reading" label="Reading/Writing" onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {updateResponse(e); ChangeProg(e)}}/>
                        </Form.Group>
                    </>
                )}

                {page === 4 && (
                    <>
                        <h3>7) What work environment do you prefer?</h3>
                        <Form.Group data-testid="question">
                            <Form.Check type="radio" name="What work environment do you prefer?" value="Office" label="Office" checked={responses["What work environment do you prefer?"] === "Office"} onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {updateResponse(e); ChangeProg(e)}}/>
                            <Form.Check type="radio" name="What work environment do you prefer?" value="Work from Home" label="Work from Home" checked={responses["What work environment do you prefer?"] === "Work from Home"} onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {updateResponse(e); ChangeProg(e)}}/>
                            <Form.Check type="radio" name="What work environment do you prefer?" value="Lab" label="Lab" checked={responses["What work environment do you prefer?"] === "Lab"} onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {updateResponse(e); ChangeProg(e)}}/>
                            <Form.Check type="radio" name="What work environment do you prefer?" value="Hands-on" label="Hands-on" checked={responses["What work environment do you prefer?"] === "Hands-on"} onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {updateResponse(e); ChangeProg(e)}}/>
                        </Form.Group>

                        <h3>8) What do you first look at when considering a career?</h3>
                        <Form.Group data-testid="question">
                            <Form.Check type="radio" name=" What do you first look at when considering a career?" value="Salary" label="Salary" checked={responses[" What do you first look at when considering a career?"] === "Salary"} onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {updateResponse(e); ChangeProg(e)}}/>
                            <Form.Check type="radio" name=" What do you first look at when considering a career?" value="Flexibility" label="Flexibility" checked={responses[" What do you first look at when considering a career?"] === "Flexibility"} onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {updateResponse(e); ChangeProg(e)}} />
                            <Form.Check type="radio" name=" What do you first look at when considering a career?" value="Passion" label="Passion" checked={responses[" What do you first look at when considering a career?"] === "Passion"} onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {updateResponse(e); ChangeProg(e)}}/>
                            <Form.Check type="radio" name=" What do you first look at when considering a career?" value="Societal Impact" label="Societal Impact" checked={responses[" What do you first look at when considering a career?"] === "Societal Impact"} onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {updateResponse(e); ChangeProg(e)}}/>
                        </Form.Group>
                    </>
                )}

                {page === 5 && (
                    <>
                        <h3>9) Which of the following is most exciting?</h3>
                        <Form.Group data-testid="question">
                            <Form.Check type="radio" name="Which of the following is most exciting?" value="Learning" label="Learning new things" checked={responses["Which of the following is most exciting?"] === "Learning"} onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {updateResponse(e); ChangeProg(e)}}/>
                            <Form.Check type="radio" name="Which of the following is most exciting?" value="Art" label="Expressing myself through art" checked={responses["Which of the following is most exciting?"] === "Art"} onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {updateResponse(e); ChangeProg(e)}}/>
                            <Form.Check type="radio" name="Which of the following is most exciting?" value="Challenge" label="Challenging myself" checked={responses["Which of the following is most exciting?"] === "Challenge"} onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {updateResponse(e); ChangeProg(e)}}/>
                            <Form.Check type="radio" name="Which of the following is most exciting?" value="Impact" label="Seeing my impact on others" checked={responses["Which of the following is most exciting?"] === "Impact"} onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {updateResponse(e); ChangeProg(e)}}/>
                        </Form.Group>

                        <h3>10) Which of the following is the component you're most excited for in your dream job?</h3>
                        <Form.Group data-testid="question">
                            <Form.Check type="radio" name="Which of the following is the component you're most excited for in your dream job?" value="Traveling" label="Traveling" checked={responses["Which of the following is the component you're most excited for in your dream job?"] === "Traveling"} onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {updateResponse(e); ChangeProg(e)}}/>
                            <Form.Check type="radio" name="Which of the following is the component you're most excited for in your dream job?" value="Money" label="Making money" checked={responses["Which of the following is the component you're most excited for in your dream job?"] === "Money"} onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {updateResponse(e); ChangeProg(e)}}/>
                            <Form.Check type="radio" name="Which of the following is the component you're most excited for in your dream job?" value="Opportunity" label="Opportunity to learn new things" checked={responses["Which of the following is the component you're most excited for in your dream job?"] === "Opportunity"} onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {updateResponse(e); ChangeProg(e)}}/>
                            <Form.Check type="radio" name="Which of the following is the component you're most excited for in your dream job?" value="Community" label="Working with other people" checked={responses["Which of the following is the component you're most excited for in your dream job?"] === "Community"} onChange={(e: React.ChangeEvent<HTMLInputElement>)=> {updateResponse(e); ChangeProg(e)}}/>
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
                        <button
                            className={`clear-button ${Object.keys(responses).length === 0 ? 'disabled' : 'enabled'}`}
                            onClick={() => {clearResponse()}}
                            >
                            Clear
                        </button>
                    </div>
                </div>
             </div >
        <div data-testid ='confettiAnim'>
            {showConfetti && <Confetti width={width} height={height} />}
        </div>
        <Footer/>
    </div>    
    );
}

export default BasicQ;