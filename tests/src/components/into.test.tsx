import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Intro, { benefits } from '@/components/intro';

describe('Home', () => {
  beforeEach(() => {
    render(<Intro />);
  });

  it('renders should return h1 and description', () => {
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1).toBeInTheDocument();
    expect(h1.innerHTML).toBe('OSO Next.js skeleton prject');
  });

  it('renders should return two h2 and description', () => {
    const h2 = screen.getAllByRole('heading', { level: 2 });
    expect(h2.length).toBe(2);
    expect(h2.at(0)?.innerHTML).toBe('Overview');
    expect(h2.at(1)?.innerHTML).toBe('Key Benefits');
  });

  it('renders should return h3 components same as the benefits count', () => {
    const h3 = screen.getAllByRole('heading', { level: 3 });
    expect(h3.length).toBe(benefits.length);
  });

  it('renders should return same number of list components plus st list', () => {
    const list = screen.getAllByRole('list');
    expect(list.length).toBe(benefits.length+1);
  });

  it('renders should return total number of listitem components as the nbenefit contents count', () => {
    let total:number = benefits.length;
    benefits.forEach((benefit) => {
      total += benefit.contents ? benefit.contents.length : 0;
    });
    expect(screen.getAllByRole('listitem').length).toBe(total);
  });
});
