import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BasicQ from './pages/BasicQs'
import DetailedQ from './pages/DetailedQs';
import DetailedReport from './pages/detailedReport';
import BasicReport from './pages/basicReport';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <HashRouter>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/Basic Question" element={<BasicQ/>} />
      <Route path="/Detailed Question" element={<DetailedQ/>} />
      <Route path='/Detailed Report' element={<DetailedReport/>} />
      <Route path='/Basic Report' element={<BasicReport/>} />
    </Routes>
  </HashRouter>  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();