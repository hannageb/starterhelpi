import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
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

  test('tests if there is a button and description for the basic questions', () => {
    render(<MemoryRouter>
      <App/>
    </MemoryRouter>);
    expect(screen.getByRole('button', {name:"Basic Questions"})).toBeInTheDocument()
    expect(screen.getByTestId('basicDesc')).toBeInTheDocument()
  })

  test('tests if there is a button and description for the detailed questions', () => {
    render(<MemoryRouter>
      <App/>
    </MemoryRouter>);
    expect(screen.getByRole('button', {name:"Detailed Questions"})).toBeInTheDocument()
    expect(screen.getByTestId('detailedDesc')).toBeInTheDocument()
  })

  test('testing if error popup shows up', () => {
    render(<MemoryRouter>
      <App/>
    </MemoryRouter>);
    const apiButton = screen.getByRole('button', {name:"Submit"})
    fireEvent.click(apiButton)
    expect(screen.getByPlaceholderText("Insert API Key Here")).toBeInTheDocument()
    expect(screen.getByTestId("Error-popup")).toBeInTheDocument()
    expect(screen.getByTestId("Error-Message")).toBeInTheDocument()
  })
})