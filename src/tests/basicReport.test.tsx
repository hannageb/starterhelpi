import { render, screen } from '@testing-library/react';
import BasicReport from '../pages/basicReport';

test('renders envelope', () => {
  render(<BasicReport />);
  const linkElement = screen.getByRole("paragraph", {name: /story/i});
  expect(linkElement).toBeInTheDocument();
  const responses = render.g
});
