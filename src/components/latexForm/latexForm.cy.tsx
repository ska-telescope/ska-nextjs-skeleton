import LatexForm from './latexForm';
import React from 'react';

it('verify entry form elements', () => {
  cy.mount(<LatexForm></LatexForm>);
  cy.get('[data-testid="latexId"]').should('be.visible');
});
