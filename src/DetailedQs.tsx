import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

function GoHomeScreen() {
    return(
        <header>
            <Link to="/">
                <Button style={{float:'right'}}>
                    Homepage
                </Button>
            </Link>
        </header>
    );
}
function DetailedQ(){
    return(
        <div>
            <GoHomeScreen></GoHomeScreen>
        </div>
    );
}
export default DetailedQ