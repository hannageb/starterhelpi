import React from "react";
import { Navigate } from "react-router-dom";

export function GoHomeScreen() {
    const [goToHome, setGoToHome] = React.useState(false)
    if (goToHome){
        return <Navigate to="/"/>;
    }

    return(
        <div>
            BASIC QUESTIONS
            <button
            onClick={() => {
                setGoToHome(true)
            }}>
            {" "}
            Go to Homepage
            </button>
        </div>
    );
}
function BasicQ(){
    return(
        <div>
            <GoHomeScreen/>
        </div>
    );
}
export default BasicQ