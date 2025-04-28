import { render, screen } from '@testing-library/react';
import BasicReport from '../pages/basicReport';

test('renders envelope', () => {
  render(<BasicReport />);
  const envelopeElement = screen.getByRole("", {});
  expect(envelopeElement).toBeInTheDocument();
});


test('renders results', () => {
  render(<BasicReport />);
  const resultsElement = screen.getByRole("paragraph", {name: /"Your Results..."/i});
  expect(resultsElement).toBeInTheDocument();
});
