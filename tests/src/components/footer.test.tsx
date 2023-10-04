import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '@/components/footer';

describe('Footer', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  // it('renders a div with class main', () => {
  //   const div = screen.getByRole('div');
  //   expect(div).toBeInTheDocument();
  //   expect(div.getAttribute('id')).toBe('introduction');
  // });

  it('renders should return link with apprpriate attributes', () => {
    const archor = screen.getByRole('link');
    expect(archor).toBeInTheDocument();
    expect(archor.getAttribute('href')).toBe('/en');
    expect(archor.getAttribute('rel')).toBe('home');
    expect(archor.getAttribute('class')).toBe('logo');
  });

  it('renders should return image with apprpriate attributes', () => {
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image.getAttribute('src')).toBe('/images/logo-dia.svg');
    expect(image.getAttribute('alt')).toBe('SKA Observatory');
  });

  it('renders should return copyright section', () => {
    const container = document.querySelector('.copyright');
    expect(container).toBeInTheDocument();
  });
});
