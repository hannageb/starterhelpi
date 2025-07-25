import './detailedReport.css'
import { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router';
import { OpenAI } from "openai";
import GoHomeScreen from './homepages/detailed_rep_home';
import Footer from '../footer';
import { jsPDF } from "jspdf";


function DetailedReport(){
    const location = useLocation();
    const { responses } = location.state;
    const [report, setReport] = useState<string[]>([""]);
    const savedKey = JSON.parse(localStorage.getItem("MYKEY") || '""');

    /* Loading screen */
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const handleLoading = () => {setIsLoading(false);}
    setTimeout(()=>{
        console.log("Loading...");
        handleLoading();}, 6000);

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
                            content: 'You are running a career helper quiz for students to find their potential future career fields. Provide 3 brief but specific career recommendations based on the users answers to the following questions of a detailed questionnaire. Start your response with "Your Results:@". And separate any blocks of text with an @ instead of /n"'},
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
        <div data-testid="resultEnvelope">
            <div><GoHomeScreen></GoHomeScreen></div>
            <div className="intro-text">
                <h5 style={{textAlign: 'center', fontSize: '20px', fontStyle:'italic'}}>Scroll down to see your results</h5>
            </div>
            <div className='envBodyDet'>
                <div className='wrapperDet'>
                    <div className='lidDet oneDet'></div>
                    <div className='lidDet twoDet'></div>
                    <div className='envelopeDet'></div>
                    <div className='letterDet'>
                        <p>{report[1]}</p>
                    </div>
                </div>
                <div className='wrapperDet'>
                    <div className='lidDet oneDet'></div>
                    <div className='lidDet twoDet'></div>
                    <div className='envelopeDet'></div>
                    <div className='letterDet'>
                        <p>{report[2]}</p>
                    </div>
                </div>
                <div className='wrapperDet'>
                    <div className='lidDet oneDet'></div>
                    <div className='lidDet twoDet'></div>
                    <div className='envelopeDet'></div>
                    <div className='letterDet'>
                        <p>{report[3]}</p>
                    </div>
                </div>
            </div>
            <div className="buttons-under-envelope" style={{ display: "flex", justifyContent: "center", gap: '30px' }}>
                <button onClick={() => setGoToHome(true)}>Return Home</button>
                <button onClick={() => {downloadPDF()}}>Download Results</button>
            </div>
            <Footer/>
        </div>
    ): (<div className="loader"></div>)
}

export default DetailedReport;