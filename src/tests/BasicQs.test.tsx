import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import BasicQ from '../pages/BasicQs'

describe("testing the basic question page", () => {
    test('if there is a navigation bar', () => {
        render(<BasicQ/>)
        expect(screen.getByTestId("nav bar")).toBeInTheDocument()
    })
    test('if there is button to go to homescreen', () => {
        render(<BasicQ/>)
        expect(screen.getByRole("button", {name:/homePage/i})).toBeInTheDocument()
        expect(screen.getByAltText("polar bear wearing a graduation cap")).toBeInTheDocument()
    })
    test('if there is a button to go to the FAQ and the User Profile', () => {
        render(<BasicQ/>)
        expect(
            screen.getByRole("button", {name:/FAQ/i}) 
            && 
            screen.getByRole("button", {name:/User Profile/i})
        ).toBeInTheDocument();
    })
    test('if there is a button for the detailed question',()=>{
        render(<BasicQ/>);
        expect(screen.getByRole("button",{name:/Detailed Questions/i})).toBeInTheDocument()
    })
    test('seeing if there is a progress bar', () => {
        render(<BasicQ/>)
        expect(screen.getByTestId("progressBar")).toBeInTheDocument()
    })
    test("tests for answer submit", () => {
        render(<BasicQ/>)
        expect(screen.getByRole('button',{name:'Submit'})).toBeInTheDocument();
    })
    test('testing for confetti effect', () => {
        render(<BasicQ/>)
        expect(screen.getByTestId('confettiAnim')).toBeInTheDocument()
    })
})

describe("testing the number of questions", () => {
    test('see if there at questions on first page', async () => {
        render(<BasicQ/>)
        let numQues = 0;
        const button = screen.getByRole('button', { name: /Next ➡️/i });
        numQues+=screen.getAllByTestId('question').length
        while(numQues<10){
            fireEvent.click(button);
            numQues+=screen.getAllByTestId('question').length
        }
        expect(numQues).toBeGreaterThanOrEqual(7)
    })
    test('seeing if question skeleton is rendered', ()=>{
        render(<BasicQ/>)
        expect(screen.getByTestId('question skeleton')).toBeInTheDocument()
    })
})