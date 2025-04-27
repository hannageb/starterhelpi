import './basicReport.css'
import {useEffect, useState } from "react";
import {Navigate} from "react-router-dom";
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
        <header className="header">
            <h1 className="centerTitle">CAREER REPORT</h1>
            <div className="left-nav">
                <button onClick={() => setGoToHome(true)} className="back-button">Home</button>
                <button onClick={() => setGoToFAQ(true)}>FAQ</button>
                <button onClick={() => setGoToUser(true)}>User Profile</button>
            </div>
            <div className="right-nav">
                <button onClick={() => setGoToDetailed(true)}>Detailed Questions</button>
                <button onClick={() => setGoToBasic(true)}>Basic Questions</button>

            </div>
        </header>
    );
}


function BasicReport() {
    /*// first two vars are from chatgpt
    const location = useLocation();
    const { responses } = location.state;  // Retrieve responses passed from BasicQs.tsx*/
  const [story, setStory] = useState<string>("");
  const savedKey = JSON.parse(localStorage.getItem("MYKEY") || '""');

  useEffect(()=>{
  async function GPTIntegration(){
    const client = new OpenAI({ apiKey: savedKey });
    
    try {
        const response = await client.chat.completions.create({
            model: "gpt-4.1",
            messages: [
            {
                role: "system",
                content: "Talk like a pirate."
            },
            {
                role: "user",
                content: "Are semicolons optional in JavaScript?",
            },
            ],
        });
        setStory(response.choices[0]?.message?.content || "No response")
        console.log(response.choices[0]?.message?.content);
    } catch (error) {
            console.error("Error fetching GPT response", error);
            setStory("error");
            }
        }
    GPTIntegration();
  }, [savedKey]); 

  return (
    <div>
      <GoHomeScreen/>
      <p>{story}</p>
      <footer className="footer">
        <p>Made with 💛 by Luc, Hanna & Isha — CareerHelpi 2025</p>
      </footer>
    </div>
  );
}

export default BasicReport;
