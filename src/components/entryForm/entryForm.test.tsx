import { render } from '@testing-library/react';
import { expect } from '@jest/globals';
import '@testing-library/jest-dom';
import EntryForm from './entryForm';

describe('EntryForm', () => {
  it('renders with all props should return with appropriate attributes', () => {
    render(<EntryForm />);
    expect(document.querySelectorAll('input').length).toBe(3);
  });
});
