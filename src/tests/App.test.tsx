import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { MemoryRouter } from 'react-router';

describe("Testing homepage", () => {

  test('tests for the API key submit button', () => {
    render(<MemoryRouter>
      <App/>
    </MemoryRouter>);
    expect(screen.getByRole('button', {name:"Submit"})).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Insert API Key Here")).toBeInTheDocument();
  })
})

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });