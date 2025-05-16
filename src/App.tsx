import React, { useEffect, useState } from 'react';
import './App.css';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import clickSound from './click.mp3';
import Footer from './footer';
import Snowfall from 'react-snowfall'

const audio = new Audio(clickSound);

const playSound = () => {
  audio.currentTime = 0;
  audio.play();
}; 

/* Snowflake animation found online: npmjs.com/package/react-snowfall */
<Snowfall
  color="white"
  snowflakeCount={150}
  style={{
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    zIndex: 0, 
    top: 0,
    left: 0,
    pointerEvents: 'none',
  }}
/>


let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData);
if (prevKey !== null) {
  try{
    keyData = JSON.parse(prevKey);
  }
  catch(error){
    console.error("Error parsing the API key");
    keyData="";
  }
}

function App() {
  const [popup, setPopUp] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>("")
  const [keySubmit, setKeySubmit] = useState<boolean>(false)
  const [key, setKey] = useState<string>(keyData);
  const navigate = useNavigate();

  /** from chatgpt to fix the fact that the API key would already be in the input box
   *  but it wouldn't let you submit */

  useEffect(() => { // useEffect allows for better usage of non-React dependencies which we indeed are using 
    /** all of these are the cases that an error message should occur */
    if (key.trim() === "") {
      setErrorMessage("Please enter an API key.");
      setKeySubmit(false);
    } else if (key.trim().length <= 5) {
      setErrorMessage("The API key should be longer than 5 characters");
      setKeySubmit(false);
    } else if (!key.startsWith("sk-") || !key.includes("T3BlbkFJ")) { // upon a google search we saw that most OpenAI keys, if not all begin with sk- and contain "T3BlbkFJ"
      setErrorMessage("Please enter a valid API key");
      setKeySubmit(false);
    } else {
      setErrorMessage("");
      setKeySubmit(true);
    }
  }, [key]);

  function handleSubmit() {
    if(key.trim() === ""){
      setPopUp(true);
      setErrorMessage("Please enter an API")
      setKeySubmit(false)
      return;
    }
    else if(key.trim().length <= 5){
      setErrorMessage("The API key should be longer than 5 characters")
      setKeySubmit(false)
    }
    else if(!key.startsWith("sk-") || !key.includes("T3BlbkFJ")){
      setErrorMessage("Please enter a valid API key")
      setKeySubmit(false)
    } 
    else{
      setErrorMessage("")
      playSound();
      localStorage.setItem(saveKeyData, JSON.stringify(key));
      setKeySubmit(true)
      //window.location.reload();
    }
  }

  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    const newKey = event.target.value;
    setKey(newKey);
    if(newKey.trim() === "") {
      setErrorMessage("Please enter an API key.");
      setKeySubmit(false)
    } 
    else if(newKey.trim().length <= 5){
      setErrorMessage("The API key should be longer than 5 characters")
      setKeySubmit(false)
    }
    else if(!newKey.startsWith("sk-") || !newKey.includes("T3BlbkFJ")){
      setErrorMessage("Please enter a valid API key")
      setKeySubmit(false)
    }
    else {
      setErrorMessage("");
      setKeySubmit(true);
    }
  }

/* Snowflake animation found online: npmjs.com/package/react-snowfall */
  return (
    <div className='body'>
      <Snowfall
      color="white"
      snowflakeCount={150}
      style={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        top: 0,
        left: 0,
        pointerEvents: 'none',
      }}
    />
      <div className="title">
        <header>
          <h1 style={{fontFamily: 'Callingstone', fontStyle: 'bold'}}>Welcome to CareerHelpi!</h1>
          <h4 className="tagline">Discover your future. One question at a time. <br/> Please enter your API key in the footer to begin.</h4>
        </header>

        <div className="nav">
          <button
            style={{ fontSize: '15px' }}
            onClick={() => {
              playSound();
              navigate('/FAQ');
            }}
            disabled={!keySubmit}
          >
            FAQ
          </button>
        </div>
      </div>


      <div className="home-button-wrapper">
        <div className="home-button-box">
          <button
            onClick={() => {
              playSound();
              navigate('/Basic Question');
            }}
            style={{fontFamily:'callingstone'}}
            disabled={!keySubmit}
          >
            Basic Questions
          </button>
          <p className="button-description" data-testid="basicDesc">
            Find out what field might be best for you by answering a sweet and simple questionnaire.
          </p>
        </div>
      <div className="home-button-box">
        <button
            onClick={() => {
              playSound();
              navigate('/Detailed Question');
            }}
            style={{fontFamily:'callingstone'}}
            disabled={!keySubmit}
          >
            Detailed Questions
          </button>
          <p className="button-description" data-testid="detailedDesc">
            Click this button if you want a more personalized career suggestion!
          </p>
        </div>
      </div>

      {popup && (
        <div className='popupOverlay' data-testid='Error-popup'>
          <div className='popupContent'>
            <h2>Warning</h2>
            <p>Please enter an API key</p>
            <button onClick={()=>setPopUp(false)}>Ok</button>
          </div>
        </div>
      )}
      <footer data-testid="footer">
        <div className="api-box">
          <Form className="api-key-form">
            <Form.Label>API Key:</Form.Label>
            <Form.Control
              type="password"
              onChange={changeKey}
              value={key}
            />
            <br />
            {errorMessage && (<div data-testid='Error-Message'><p style={{ color: 'red', fontFamily:'Callingstone' }}>{errorMessage}</p></div>)}
            <div className="centered-button">
              <Button
                className="Submit-Button"
                onClick={handleSubmit}
                disabled={!keySubmit}
              >
                Submit
              </Button>
            </div>
          </Form>
        </div>
        <Footer/>
      </footer>
    </div>
  );
} 



export default App;
