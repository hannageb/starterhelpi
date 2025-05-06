import React, { useState } from 'react';
import './App.css';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import clickSound from './click.mp3';

const audio = new Audio(clickSound);

const playSound = () => {
  audio.currentTime = 0;
  audio.play();
};

let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData);
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

function App() {
  const [key, setKey] = useState<string>(keyData);
  const navigate = useNavigate();

  function handleSubmit() {
    playSound();
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload();
  }

  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
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
              navigate('/Basic Question');
            }}
          >
            Basic Questions
          </button>
          <button
            style={{ fontSize: '15px' }}
            onClick={() => {
              playSound();
              navigate('/Detailed Question');
            }}
          >
            Detailed Questions
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
          >
            Detailed Questions
          </button>
          <p className="button-description" data-testid="detailedDesc">
            Click this button if you want a more personalized career suggestion!
          </p>
        </div>
      </div>


      <footer data-testid="footer">
        <div className="api-box">
          <Form className="api-key-form">
            <Form.Label>API Key:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Insert API Key Here"
              onChange={changeKey}
            />
            <br />
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
        <div className="footer">
        <p>Made with 💛 by Luc, Hanna & Isha — CareerHelpi 2025</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
