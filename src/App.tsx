import React, { useState } from 'react';
import './App.css';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import clickSound from './click.mp3';
import Footer from './footer';

const audio = new Audio(clickSound);

const playSound = () => {
  audio.currentTime = 0;
  audio.play();
};

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

  function handleSubmit() {
    if(key.trim() === ""){
      setPopUp(true);
      setErrorMessage("Please enter an API")
      return;
    }
    else{
      setErrorMessage("")
      playSound();
      localStorage.setItem(saveKeyData, JSON.stringify(key));
      //setKeySubmit(true)
      //window.location.reload();
    }
  }

  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(localStorage.getItem(saveKeyData))
    setKey(event.target.value);
    setKeySubmit(event.target.value.trim() !== "");
    if(event.target.value.trim()===""){
      setErrorMessage("Please enter an API key.");
    }
    else if(event.target.value.trim().length <= 5){
      setErrorMessage("The API key should be longer than 5 characters")
    }
    else if(errorMessage){
      setErrorMessage("");
    }
  }

  return (
    <div className='body'>
      <div className="title">
        <header>
          <h1 style={{fontFamily: 'Callingstone', fontStyle: 'bold'}}>Welcome to CareerHelpi!</h1>
          <h4 className="tagline">Discover your future. One question at a time.</h4>
        </header>

        <div className="nav">
          <button
            style={{ fontSize: '15px' }}
            onClick={() => {
              playSound();
              navigate('/User Profile');
            }}
            disabled={!keySubmit}
          >
            User Profile
          </button>
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
        <div className='popupOverlay' data-testId='Error-popup'>
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
              placeholder="Insert API Key Here"
              onChange={changeKey}
              value={key}
            />
            <br />
            {errorMessage && (<div data-testId='Error-Message'><p style={{ color: 'red', fontFamily:'Callingstone' }}>{errorMessage}</p></div>)}
            <div className="centered-button">
              <Button
                className="Submit-Button"
                onClick={handleSubmit}
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
