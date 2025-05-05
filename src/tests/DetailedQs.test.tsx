import { render, screen } from '@testing-library/react';
import DetailedQ from '../pages/DetailedQs'

describe("testing the basic question page", () => {
    test('if there is a navigation bar', () => {
        render(<DetailedQ/>)
        expect(screen.getByTestId("header")).toBeInTheDocument()
    })
    test('if there is button to go to homescreen', () => {
        render(<DetailedQ/>)
        expect(screen.getByRole("button", {name:/homePage/i})).toBeInTheDocument()
        expect(screen.getByAltText("polar bear wearing a graduation cap")).toBeInTheDocument()
    })
    test('if there is a button to go to the FAQ and the User Profile', () => {
        render(<DetailedQ/>)
        expect(
            screen.getByRole("button", {name:/FAQ/i}) 
            && 
            screen.getByRole("button", {name:/User Profile/i})
        ).toBeInTheDocument();
    })
    test('if there is a button for the detailed question',()=>{
        render(<DetailedQ/>);
        expect(screen.getByRole("button",{name:/Basic Questions/i})).toBeInTheDocument()
    })

    test('see if there at least 7 questions', () => {
        render(<DetailedQ/>)
        const numQues = screen.getAllByTestId("question")
        expect(numQues.length).toBeGreaterThanOrEqual(7)
    })
    test('seeing if there is a progress bar', () => {
        render(<DetailedQ/>)
        expect(screen.getByTestId("progressBar")).toBeInTheDocument()
    })
    test('testing for confetti effect', () => {
        render(<DetailedQ/>)
        expect(screen.getByTestId('confettiAnim')).toBeInTheDocument()
    })
})