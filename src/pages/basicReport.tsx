import './basicReport.css'
import {useEffect, useState } from "react";
import {Navigate} from "react-router-dom";

function GoHomeScreen() {
    const [goToHome, setGoToHome] = useState(false);
    const[goToBasic, setGoToBasic] = useState(false)
    const [goToDetailed, setGoToDetailed] = useState(false);

    if (goToDetailed) return <Navigate to="/Detailed Question" />;

    if (goToHome) {
        return <Navigate to="/" />;
    }
    if(goToBasic){
        if(goToBasic){
            return <Navigate to="/Basic Question"/>;
        }
    }

    return (
        <header className="header">
            <h1 className="centerTitle">REPORT</h1>
            <button onClick={() => {setGoToHome(true)}} className="back-button">
            {" "}Home
            </button>
            <button onClick={()=>{setGoToBasic(true)}} className="basic-button">
                {" "}Basic Questions
            </button>
            <button onClick={()=>{setGoToDetailed(true)}} className="detailed-button">
                {" "}Detailed Questions
            </button>
        </header>
    );
}

// with help from ChatGPT & the API docs
function GPTIntegration() {
    const [story, setStory] = useState<string>("Loading...");
    
    useEffect(() => {
    async function fetchStory() {     
        const savedKey = JSON.parse(localStorage.getItem('MYKEY') || '"');      
        try {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${savedKey}`,
              },
              body: JSON.stringify({
                model: "gpt-4",
                messages: [
                  {
                    role: "system",
                    content: "Talk like a pirate."
                  },
                  {
                    role: "user",
                    content: "Are semicolons optional in JavaScript?"
                  }
                ],
                temperature: 0.7,
                max_tokens: 500
              }),
            });
    
            const data = await response.json();
            
            if (data.choices && data.choices.length > 0) {
              setStory(data.choices[0].message.content);
            } else {
              setStory("No response received.");
            }
    
          } catch (error) {
            console.error(error);
            setStory("Error fetching response.");
          }
        }
    
        fetchStory();
      }, []); // empty dependency array -> only run once
    
      return <p>{story}</p>;
    }

function BasicReport(){
    return(
        <div>
            <div>
                <GoHomeScreen></GoHomeScreen>
                
            </div>
            <div>
                <div className='envBody'>
                    <div className='wrapper'>
                        <div className='lid one'></div>
                        <div className='lid two'></div>
                        <div className='envelope'></div>
                        <div className='letter'>
                            <GPTIntegration/>
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

export default BasicReport
