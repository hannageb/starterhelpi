import React, { useState } from "react";
import { Navigate } from "react-router";
import './BasicQs.css';
import Confetti from 'react-confetti';
import { useWindowSize } from '@react-hook/window-size'; 
import GoHomeScreen from "./homepages/basic_home";
import Footer from "../footer";
import Questions from "./questions/BasicQuestion";

function BasicQ() {
    const [responses, setResponses] = useState<{ [key: string]: string | string[] }>({});
    const [showConfetti, setShowConfetti] = useState(false);
    const [width, height] = useWindowSize();
    const [progress, setProgress] = useState<number>(0);
    const [page, setPage] = useState(1);
    const [propName, setPropName] = useState([""]);
    const [goToReport, setGoToReport] = useState(false); 
    const [errorMessage, setErrorMessage] = useState<string>("")

    if (goToReport) return <Navigate to="/Basic Report" state={{responses}}/>;

    /* saves responses as "Question name: answer" */
    const updateResponse = (event: React.ChangeEvent<HTMLInputElement>) => {
        try{
            setResponses({ ...responses, [event.target.name]: event.target.value });
            setErrorMessage("")
        }
        catch(err){
            console.error("error updating responses",err)
            setErrorMessage("Error updating responses")
        }
    };

    const updateCheckboxResponse = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked } = event.target;
    
        setResponses(prev => {
            const prevValues = Array.isArray(prev[name]) ? [...prev[name] as string[]] : [];
            return {
                ...prev,
                [name]: checked
                    ? [...prevValues, value]
                    : prevValues.filter(v => v !== value)
            };
        });
        setErrorMessage("");
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
        try{
            if (!propName.includes(event.target.name)) {
                const newProgress = progress + 10 > 100 ? 100 : progress + 10;
                setPropName([...propName, event.target.name]);
                setProgress(newProgress);
                if (newProgress === 100) {
                    setShowConfetti(true);
                    setTimeout(() => setShowConfetti(false), 5000);
                }
            } 
        }
        catch(err){
            console.error("error changing progress", err)
            setErrorMessage("Error changing the progress bar")
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
            <Questions
                updateCheckboxResponse={updateCheckboxResponse}
                errorMessage={errorMessage}
                page={page}
                responses={responses}
                updateResponse={updateResponse}
                ChangeProg={ChangeProg}
                nextPage={nextPage}
                prevPage={prevPage}
                clearResponse={clearResponse}
                goToReport={goToReport}
                setGoToReport={setGoToReport}
            />
        <div data-testid ='confettiAnim'>
            {showConfetti && <Confetti width={width} height={height} />}
        </div>
        <Footer/>
    </div>    
    );
}

export default BasicQ;