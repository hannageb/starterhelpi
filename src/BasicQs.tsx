import React from 'react';
import { BrowserRouter as Router, Routes, Route }
    from "react-router-dom";
import App from './App'

function goHomeScreen(){
    return(
        <div>
            <header>
                <Router>
                    <Routes>
                        <Route path="/"
                            element={<App />} />
                    </Routes>
                </Router>
            </header>
        </div>
    );
}
export default goHomeScreen;