import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

function GoHomeScreen() {
    return(
        <div>
            <h5>
                <Link to="/">
                    <Button style={{float:'right'}}>
                        Homepage
                    </Button>
                </Link>
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