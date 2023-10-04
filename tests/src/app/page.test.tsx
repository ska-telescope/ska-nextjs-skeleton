import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '@/app/page';

describe('Home', () => {
  beforeEach(() => {
    render(<Home />);
  });

  it('renders a main with class main', () => {
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
    expect(main.getAttribute('class')).toBe('main');
  });

  it('renders a title', () => {
    const title = screen.getByText(/Welcome to SKAO Next\.js skeleton project/i);
    expect(title).toBeInTheDocument();
  });
});
