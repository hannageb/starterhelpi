import { fireEvent, render, screen } from '@testing-library/react';
import DetailedQ from '../pages/DetailedQs'

describe("testing the detailed questions page", () => {
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
    test('seeing if there is a progress bar', () => {
        render(<DetailedQ/>)
        expect(screen.getByTestId("progressBar")).toBeInTheDocument()
    })
    test('testing for confetti effect', () => {
        render(<DetailedQ/>)
        expect(screen.getByTestId('confettiAnim')).toBeInTheDocument()
    })
})

describe("testing the number of questions", () => {
    test('see if there at questions on first page', async () => {
        render(<DetailedQ/>)
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
        render(<DetailedQ/>)
        expect(screen.getByTestId('question skeleton')).toBeInTheDocument()
    })
})