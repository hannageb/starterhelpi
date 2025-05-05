import './basicReport.css'
import {useEffect, useState } from "react";
import {Navigate, useLocation} from "react-router";
import { OpenAI } from "openai";

function GoHomeScreen() {
    const [goToHome, setGoToHome] = useState(false);
    const[goToBasic, setGoToBasic] = useState(false)
    const [goToFAQ, setGoToFAQ] = useState(false);
    const [goToDetailed, setGoToDetailed] = useState(false);
    const [goToUser, setGoToUser] = useState(false)
    
    if (goToFAQ) return <Navigate to="/FAQ" />;
    if (goToUser) return <Navigate to="/User Profile"/>;
    if (goToDetailed) return <Navigate to="/Detailed Question" />;
    if (goToHome) return <Navigate to="/" />;
    if (goToBasic) return <Navigate to="/Basic Question"/>;

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

function BasicReport() {
 // most of this code is with help from ChatGPT and the docs
    /** location and location.state access the users' responses to the questions from BasicQs.tsx */
    const location = useLocation();
    const { responses } = location.state;
    const [report, setReport] = useState<string>("");
    const savedKey = JSON.parse(localStorage.getItem("MYKEY") || '""');
    useEffect(()=>{
        console.log(responses); /** a form of debugging to ensure that the responses are formatted correctly for GPT */
    async function GPTIntegration(){
        const client = new OpenAI({ apiKey: savedKey, dangerouslyAllowBrowser: true })
        /** maps the questions to the answer the user provided */
        const answers = Object.entries(responses).map(([key, value]) => `${key}: ${value}`).join("\n");
        try {
        const response = await client.chat.completions.create({
                model: "gpt-4.1",
                messages: [
                {
                    /** creates a role for the system and user
                     * system: explains the website and what the system is expected to do
                     * user: provides users' answers to the questionairre
                     */
                    role: "system",
                    content: 'You are running a career helper quiz for students to find their potential future career fields. Provide a potential career field for a student based on their answers to the following questions. Be brief in your suggestion as well as explain why that career field would be suitable for the user. Start your response with "Your Results: " and bolden the industry you are recommending for the user',
                },{
                    role: "user",
                    content: `${answers}`,
                },
                ],
            });
            setReport(response.choices[0].message.content || "No response")
            console.log(response.choices[0]?.message?.content);
        } catch (error) {
                console.error("Error fetching GPT response", error);
                setReport("Error");
                }
            }
        GPTIntegration();
    }, [responses, savedKey]); 
    
    return(
        <div data-testId="resultEnvelope">
            <div><GoHomeScreen></GoHomeScreen></div>
            <div>
                <div className='envBody'>
                    <div className='wrapper'>
                        <div className='lid one'></div>
                        <div className='lid two'></div>
                        <div className='envelope'></div>
                        <div className='letter'>
                            <p>{report}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

    export default BasicReport;
