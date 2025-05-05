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
})