import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Intro, { benefits } from './intro';

describe('Home', () => {
  beforeEach(() => {
    render(<Intro />);
  });

  it('renders a div with class main', () => {
    const div = screen.getByRole('div');
    expect(div).toBeInTheDocument();
    expect(div.getAttribute('id')).toBe('introduction');
  });

  it('renders a h1 with class main', () => {
    const h1 = screen.getByRole('h1');
    expect(h1).toBeInTheDocument();
    expect(h1.props.children).toBe('OSO Next.js skeleton prject');
  });

  it('renders twoa h2', () => {
    const h2 = screen.getByRole('h2');
    expect(h2.length).toBe(2);
  });

  it('renders a p component', () => {
    expect( screen.getByRole('p')).toBeInTheDocument();
  });

  it('renders a ol component', () => {
    expect(screen.getByRole('ol')).toBeInTheDocument();
  });

  it('renders same number of ul components', () => {
    expect(screen.getAllByRole('ul').length).toBe(benefits.length);
  });

  it('renders total number of li components', () => {
    const liCount = benefits.reduce((a, total) => total + a.contents.length, 0);
    expect(screen.getAllByRole('li').length).toBe(liCount);
  });
});
