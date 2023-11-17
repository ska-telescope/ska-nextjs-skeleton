import {render} from '@testing-library/react';
import { expect } from '@jest/globals';
import '@testing-library/jest-dom';
import ButtonUp from '../../../src/components/buttonUp/ButtonUp';


describe('ButtonUp', () => {
  it('renders with all props should return button with appropriate attributes', () => {
    render(<ButtonUp />);
    expect(document.querySelectorAll('button')?.length).toBe(1);
  });
});