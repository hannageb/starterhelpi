import React, { useState } from "react";
//import GoHomeScreen from './BasicQs';
import { Form } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";

function GoHomeScreen() {
    const [goToHome, setGoToHome] = React.useState(false);
    const[goToBasic, setGoToBasic] = React.useState(false)

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
            <div className="titleContainer">
                <h1 className="centerTitle">DETAILED QUESTIONS</h1>
                <button onClick={() => setGoToHome(true)}>Go Home</button>
            </div>           
        </header>
    );
}



function DetailedQ() {
    const [responses, setResponses] = useState<{ [key: string]: string }>({});
    const [progress, setProgress] = useState<number>(0);
    const [propName, setPropName] = useState([""])
    const navigate = useNavigate();
    
    const ChangeProg = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(propName.indexOf(event.target.name) === -1){
            setPropName( [...propName, event.target.name])
            setProgress((prevProgress)=> prevProgress+10>100 ? 100:prevProgress+10)
        }
    }

    function updateResponse(event: React.ChangeEvent<HTMLInputElement>) {
        setResponses({
            ...responses,
            [event.target.name]: event.target.value,
        });

    }
    return(
        <div>
            <GoHomeScreen></GoHomeScreen>
            <div className="description">
                <h5> Click this button if you want a more personalized career suggestion! Instead of just a general field, you'll answer in-depth questions about your interests, skills, and work preferences to get a more specific career match tailored to you.</h5>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
                    <div style={{ textAlign: 'center' }}>
                        <p>{progress}%</p>
                        <div style={{ width: '700px', border: '2px solid', borderRadius: '30px'}}>
                        <div style={{ height: '40px', background: "darkblue", width: `${progress}%`, transition: "width 0.3s ease-in-out", borderRadius: '30px'}}></div>
                    </div>
                </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '30px' }}>
              <button
                disabled={Object.keys(responses).length < 10}
                style={{
                    backgroundColor: Object.keys(responses).length < 10 ? 'grey' : '#004080',
                    color: 'white',
                    fontSize: '18px',
                    padding: '10px 30px',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: Object.keys(responses).length < 10? 'not-allowed' : 'pointer',
                    transition: 'background-color 0.3s', 
                }}
                onClick={() => navigate('/')} 
            > 
                Submit
            </button>
        </div>
    </div>
    )
}
export default DetailedQ