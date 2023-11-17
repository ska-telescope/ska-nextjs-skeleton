import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import WelcomeBanner from './welcomeBanner';
import React from 'react';


describe('WelcomeBanner', () => {
  it('renders with all props should return button with appropriate attributes', async () => {
    render(<WelcomeBanner/>);
  });
});