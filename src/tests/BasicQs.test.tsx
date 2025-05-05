import { render, screen } from '@testing-library/react';
import BasicQ from '../pages/BasicQs'

describe("testing the basic question page", () => {
    test('if there is a navigation bar', () => {
        render(<BasicQ/>)
        expect(screen.getByTestId("header")).toBeInTheDocument()
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
    test('see if there at least 7 questions', () => {
        const numQues = screen.getAllByTestId("question")
        expect(numQues.length).toBeGreaterThanOrEqual(7)
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