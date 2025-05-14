import './basicReport.css'
import {useEffect, useState } from "react";
import {Navigate, useLocation} from "react-router";
import { OpenAI } from "openai";
import GoHomeScreen from './homepages/basic_report_home';
import Footer from '../footer';
import { jsPDF } from "jspdf";

function BasicReport() {
 // most of this code is with help from ChatGPT and the docs
    /** location and location.state access the users' responses to the questions from BasicQs.tsx */
    const location = useLocation();
    const { responses } = location.state;
    const [report, setReport] = useState<string[]>([""]);
    const savedKey = JSON.parse(localStorage.getItem("MYKEY") || '""')

    /* Loading screen */
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const handleLoading = () => {setIsLoading(false);}
    setTimeout(()=>{
        console.log("Loading...");
        handleLoading();}, 5000);

    useEffect(()=>{
        console.log(responses); /** a form of debugging to ensure that the responses are formatted correctly for GPT */
        async function fetchReport(){
        const client = new OpenAI({ apiKey: savedKey, dangerouslyAllowBrowser: true })
        /** maps the questions to the answer the user provided */
        const answers = Object.entries(responses).map(([key, value]) => Array.isArray(value) ? `${key}: ${value.join(", ")}` : `${key}: ${value}`).join("\n");

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

    const [goToHome, setGoToHome] = useState<boolean>(false)
    if (goToHome) return <Navigate to="/" />;

    /* downloading results
    * code from jsPDF documentation and https://stackoverflow.com/questions/24272058/word-wrap-in-generated-pdf-using-jspdf 
    */
    const doc = new jsPDF();
    const joinedReport = report.join('\n')
    const splitReport = doc.splitTextToSize(joinedReport, 180) // to break-word and prevent text from going off page

    const downloadPDF = (() => { 
        doc.text(splitReport, 10, 10); // text on the doc and size
        doc.save("CareerHelpi-Results.pdf");} // title of doc
    );

    return !isLoading? (
        <><div data-testid="resultEnvelope">
            <div><GoHomeScreen data-testid="nav bar"></GoHomeScreen></div>
            <h5 className="intro-text" style={{ textAlign: 'center', fontSize: '20px' }}>{report[0]}</h5>
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
            <div className="buttons-under-envelope" style={{ display: "flex", justifyContent: "center", gap: '100px', marginBottom:"5%"}}>
                <button onClick={() => setGoToHome(true)}>Return Home</button>
                <button onClick={() => {downloadPDF()}}>Download Results</button>
            </div>
            <Footer />
        </div>
        </>
    ): (<div className="loader"></div>)
}

export default BasicReport;
