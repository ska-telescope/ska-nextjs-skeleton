import {render} from '@testing-library/react';
import { expect } from '@jest/globals';
import '@testing-library/jest-dom';
import ButtonDown from '../../../src/components/buttonDown/ButtonDown';


describe('ButtonDown', () => {
  it('renders with all props should return button with appropriate attributes', () => {
    render(<ButtonDown />);
    expect(document.querySelectorAll('button')?.length).toBe(1);
  });
});