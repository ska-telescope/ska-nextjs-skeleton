import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import FormError from '@/components/formError';

describe('FormError', () => {
  it('renders with all props should return button with appropriate attributes', () => {
    const className = 'testClass';
    const error = 'error message';
    render(<FormError className={className} value={error} />);
    const label = document.querySelector('label');
    expect(label?.getAttribute('class')).toBe('label');
    const span = document.querySelector('span');
    expect(span?.getAttribute('class')).toBe(className);
    expect(span?.innerHTML).toBe(error);
  });
});
