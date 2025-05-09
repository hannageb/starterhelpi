import './detailedReport.css'
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { OpenAI } from "openai";
import GoHomeScreen from './homepages/detailed_rep_home';

function DetailedReport(){
    const location = useLocation();
    const { responses } = location.state;
    const [report, setReport] = useState<string[]>([""]);
    const savedKey = JSON.parse(localStorage.getItem("MYKEY") || '""');
    useEffect(() => {
        console.log(responses);
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
                console.log(response.choices[0]?.message?.content);
            } catch (error) {
                console.error("Error generating report:", error);
                setReport(["Error"]);
                alert("An error occurred while generating report")
            }
        }
    fetchReport();
}, [responses, savedKey]);

    /* Loading screen */
    const [isLoading, setIsLoading] = useState(true);
    const handleLoading = () => {
        setIsLoading(false);
    }
    setTimeout(()=>{
        console.log("Loading...");
        handleLoading();}, 5000);
    
    
    return !isLoading? (
        <div data-testid="resultEnvelope">
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
    ): (<div className="loader"></div>)
}

export default DetailedReport;