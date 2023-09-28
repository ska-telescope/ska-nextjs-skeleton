import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FormLabel from '@/components/formLabel';

describe('FormLabel', () => {
  it('renders with all props should return button with appropriate attributes', () => {
    const className = 'labelClass';
    const value = 'Label';
    render(<FormLabel className={className} value={value} />);
    const label = document.querySelector('label');
    expect(label?.getAttribute('class')).toBe('label');
    const span = document.querySelector('span');
    expect(span?.getAttribute('class')).toBe(className);
    expect(span?.innerHTML).toBe(value);
  });
});
