import ButtonDown from './ButtonDown';
import React from 'react';

it('verify buttonDown elements', () => {
  cy.mount(<ButtonDown></ButtonDown>);
  cy.get('[data-testid="continueButton"]').should('be.visible');
});