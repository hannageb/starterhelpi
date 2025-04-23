import React, { useState } from 'react';
import './App.css';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
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
console.log(localStorage.getItem(saveKeyData))

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
          <h1>Welcome to CareerHelpi!</h1>
          <h4 className="tagline">Discover your future. One question at a time.</h4>
          
        </header>
        <div className="nav">
          <button
            style={{ fontSize: '15px' }}
            onClick={() => {
              playSound();
              navigate('/Basic Question');
            }}
            disabled={localStorage.getItem(saveKeyData)===null}
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
      <div className="main-content">
      <div className="home-button-wrapper">
        <div className="home-button-box">
          <button
            onClick={() => {
              playSound();
              navigate('/Basic Question');
            }}
          >
            Basic Questions
          </button>
          <p className="button-description">
            Find out what field might be best for you by answering a sweet and simple questionnaire.
          </p>
        </div>
        <div className="home-button-box">
          <button
            onClick={() => {
              playSound();
              navigate('/Detailed Question');
            }}
          >
            Detailed Questions
          </button>
          <p className="button-description">
            Click this button if you want a more personalized career suggestion!
          </p>
        </div>
      </div>
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
</div>
      <footer className="footer">
        <p>Made with 💛 by Luc, Hanna & Isha — CareerHelpi 2025</p>
      </footer>
    </div>
  );
}

export default App;
