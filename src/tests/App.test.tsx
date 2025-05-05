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

    const allBasic = screen.getAllByRole('button', {name:"Basic Questions"})
    expect(allBasic.length).toEqual(2)
  })

  test('tests if there is a button and description for the detailed questions', () => {
    render(<MemoryRouter>
      <App/>
    </MemoryRouter>);
    const allDetailed = screen.getAllByRole('button', {name:/Detailed Questions/i})
    expect(allDetailed.length).toEqual(2)
  })
})