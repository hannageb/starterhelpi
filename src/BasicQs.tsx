import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

function GoHomeScreen() {
    return(
        <div>
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
function BasicQ(){
    return(
        <GoHomeScreen></GoHomeScreen>
    );
}
export default BasicQ