import ButtonUp from './ButtonUp';
import React from 'react';

it('verify buttonUp elements', () => {
  cy.mount(<ButtonUp></ButtonUp>);
  cy.get('[data-testid="homeButton"]').should('be.visible');
});