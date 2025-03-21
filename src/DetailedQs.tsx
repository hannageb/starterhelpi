import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

function GoHomeScreen() {
    return(
        <div style={{ display: "flex" }}>
            <header>
                <Link to="/">
                    <Button style={{float:'right'}}>
                        Homepage
                    </Button>
                </Link>
            </header>
        </div>
    );
}
function DetailedQ(){
    return(
        <GoHomeScreen></GoHomeScreen>
    );
}
export default DetailedQ