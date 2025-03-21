import React from 'react';
import { Link } from "react-router-dom";

function GoHomeScreen() {
    return(
        <div>
            <h5>
                <Link to="/">Homepage</Link>
            </h5>
        </div>
    );
}
function BasicQ(){
    return(
        <GoHomeScreen></GoHomeScreen>
    );
}
export default BasicQ