import React from 'react';
import App from './App'
import { Button } from 'react-bootstrap';

export function goHomeScreen() {
    return(
        <div>
            <header className="bg-blue-600 p-4 flex justify-between items-center shadow-md">
                <Button onClick={ () => { navigate('/') } }>Home Page</Button>
            </header>
        </div>
    );
}

export function basicQs(){
    return(
        <div>
            <p>
                welcome
            </p>
        </div>
    )
}