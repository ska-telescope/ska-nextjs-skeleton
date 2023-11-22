import { render } from '@testing-library/react';
import { expect } from '@jest/globals';
import '@testing-library/jest-dom';
import LatexForm from './latexForm';

describe('LatexForm', () => {
  it('renders with all props should return with appropriate attributes', () => {
    render(<LatexForm />);
    expect(document.querySelectorAll('input').length).toBe(1);
  });
});
