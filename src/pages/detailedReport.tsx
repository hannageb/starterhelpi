import './detailedReport.css'
import { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router';
import { OpenAI } from "openai";

function GoHomeScreen() {
    const [goToHome, setGoToHome] = useState(false);
    const [goToBasic, setGoToBasic] = useState(false);
    const [goToFAQ, setGoToFAQ] = useState(false);
    const [goToUser, setGoToUser] = useState(false);
    const [goToDetailed, setGoToDetailed] = useState(false);

    if (goToFAQ) return <Navigate to="/FAQ" />;
    if (goToUser) return <Navigate to="/User Profile" />;
    if (goToDetailed) return <Navigate to="/Detailed Question" />;
    if (goToHome) return <Navigate to="/" />;
    if (goToBasic) return <Navigate to="/Basic Question" />;


    return (
        <header style={{justifyContent: 'space-between'}}>
           <h1 style={{fontFamily: 'callingstone', fontSize: '35px', paddingTop: '10px'}}>CAREER REPORT</h1>
           <div className='nav-bar'>
                <button onClick={() => setGoToHome(true)} className="back-button">
                    <img src="./cisc275-logo.png" alt="polar bear wearing a graduation cap" width="30" height="30"></img>
                </button>
                <button onClick={() => setGoToFAQ(true)}>FAQ</button>
                <button onClick={() => setGoToUser(true)}>User Profile</button>
                <button onClick={() => setGoToDetailed(true)}>Detailed Questions</button>
                <button onClick={() => setGoToBasic(true)}>Basic Questions</button>
            </div>
        </header>
    );
}

function DetailedReport(){
    const location = useLocation();
    const { responses } = location.state;
    const [report, setReport] = useState<string[]>([""]);
    const savedKey = JSON.parse(localStorage.getItem("MYKEY") || '""');
    useEffect(() => {
        async function fetchReport() {
            const client = new OpenAI({ apiKey: savedKey, dangerouslyAllowBrowser: true });
            const answers = Object.entries(responses).map(([key, value]) => `${key}: ${value}`).join("\n");
            try {
                const response = await client.chat.completions.create({
                    model: "gpt-4.1",
                    messages: [
                        {
                            role: "system",
                            /* GPT prompt */
                            content: 'You are running a career helper quiz for students to find their potential future career fields. Provide a brief but thorough career recommendation based on the users answers to the following questions of a detailed questionnaire. Start your response with Your Results:, provide three specific career options and separate the three options with @'},
                        {
                            role: "user",
                            content: `${answers}`,
                        },
                    ],
                });
                setReport(response.choices[0]?.message?.content?.split('@') || ["No response"]);
            } catch (error) {
                console.error("Error generating report:", error);
                setReport(["Error"]);
                alert("An error occurred while generating report")
            }
        }
    fetchReport();
}, [responses, savedKey]);
    return(
        <div data-testId="resultEnvelope">
            <div><GoHomeScreen></GoHomeScreen></div>
            <h5 className="intro-text" style={{textAlign: 'center', fontSize: '20px'}}>{report[0]}</h5>
            <div className='envBody'>
                <div className='wrapper'>
                    <div className='lid one'></div>
                    <div className='lid two'></div>
                    <div className='envelope'></div>
                    <div className='letter'>
                        <p>{report[1]}</p>
                    </div>
                </div>
                <div className='wrapper'>
                    <div className='lid one'></div>
                    <div className='lid two'></div>
                    <div className='envelope'></div>
                    <div className='letter'>
                        <p>{report[2]}</p>
                    </div>
                </div>
                <div className='wrapper'>
                    <div className='lid one'></div>
                    <div className='lid two'></div>
                    <div className='envelope'></div>
                    <div className='letter'>
                        <p>{report[3]}</p>
                    </div>
                </div>
            </div>
            <footer className="footer">
                <p>Made with 💛 by Luc, Hanna & Isha — CareerHelpi 2025</p>
            </footer>
        </div>
    );
}

export default DetailedReport;
