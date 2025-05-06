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
    const [report, setReport] = useState<string>("");
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
                            content: 'You are running a career helper quiz for students to find their potential future career fields. Provide a detailed and thoughtful career recommendation based on the user\'s answers to the following questions. Start your response with "Your Results: "',
                        },
                        {
                            role: "user",
                            content: `${answers}`,
                        },
                    ],
                });
                setReport(response.choices[0]?.message?.content || "No response");
            } catch (error) {
                console.error("Error generating report:", error);
                setReport("error");
            }
        }
    fetchReport();
}, [responses, savedKey]);
    return(
        <div data-testId="resultEnvelope">
            <div><GoHomeScreen></GoHomeScreen></div>
            <div className='envelopesContainer'>
                <div className='envBody'>
                    <div className='wrapper'>
                        <div className='lid one'/>
                        <div className='lid two'/>
                        <div className='envelope'/>
                        <div className='letter'>
                            <p>{report}</p>
                        </div>
                    </div>
                </div>
                <div className='envBody'>
                    <div className='wrapper'>
                        <div className='lid one'/>
                        <div className='lid two'/>
                        <div className='envelope'/>
                        <div className='letter'>
                            <p>{report}</p>
                        </div>
                    </div>
                </div>
                <div className='envBody'>
                    <div className='wrapper'>
                        <div className='lid one'/>
                        <div className='lid two'/>
                        <div className='envelope'/>
                        <div className='letter'>
                            <p>{report}</p>
                        </div>
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
