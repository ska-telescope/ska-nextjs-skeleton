import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '@/components/footer';

describe('Footer', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it('renders should return contentinfo with apprpriate attributes', () => {
    const contentinfo = screen.getByRole('contentinfo');
    expect(contentinfo).toBeInTheDocument();
    expect(contentinfo.getAttribute('id')).toBe('footer');
    expect(contentinfo.getAttribute('class')).toBe('footer');
  });

  it('renders should return image with apprpriate attributes', () => {
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image.getAttribute('src')).toBe('/images/logo-dia.svg');
    expect(image.getAttribute('alt')).toBe('SKA Observatory');
  });
});
