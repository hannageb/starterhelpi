import './basicReport.css'
import {useEffect, useState } from "react";
import {useLocation} from "react-router";
import { OpenAI } from "openai";
import GoHomeScreen from './homepages/basic_report_home';
import Footer from '../footer';

function BasicReport() {
 // most of this code is with help from ChatGPT and the docs
    /** location and location.state access the users' responses to the questions from BasicQs.tsx */
    const location = useLocation();
    const { responses } = location.state;
    const [report, setReport] = useState<string[]>([""]);
    const savedKey = JSON.parse(localStorage.getItem("MYKEY") || '""');
    useEffect(()=>{
        console.log(responses); /** a form of debugging to ensure that the responses are formatted correctly for GPT */
        async function fetchReport(){
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
                    content: 'You are running a career helper quiz for students to find their potential future career fields. Provide a potential career field for a student based on their answers to the following questions. Be brief in your suggestion as well as explain why that career field would be suitable for the user. Start your response with "Your Results: " and insert an @ after the field.',
                },{
                    role: "user",
                    content: `${answers}`,
                },
                ],
            });
            setReport(response.choices[0]?.message?.content?.split('@') || ["No response"]);
            console.log(response.choices[0]?.message?.content);
        } catch (error) {
                console.error("Error fetching GPT response", error);
                setReport(["Error"]);
                alert("An error occurred while generating report")
        }
    }
     fetchReport();
    }, [responses, savedKey]); 

        const [isLoading, setIsLoading] = useState(true);
        const handleLoading = () => {
            setIsLoading(false);
        }
        setTimeout(()=>{
            console.log("Loading...");
            handleLoading();}, 5000);
        
    return !isLoading? (
        <div data-testid="resultEnvelope">
            <div><GoHomeScreen data-testid="nav bar"></GoHomeScreen></div>
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
                </div>
            <Footer/>
        </div>
    ): (<div className="loader"></div>)
}

export default BasicReport;
