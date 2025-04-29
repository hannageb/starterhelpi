import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders submit button', () => {
  //render(<App />);
  screen.getByText(/submit/i)
})

test('renders FaQ', ()=>{
  render(<App />)
  const faqElement = screen.getByRole('button', {name:"Frequently asked Questions"})
  expect(faqElement).toBeInTheDocument();
})