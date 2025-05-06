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
})