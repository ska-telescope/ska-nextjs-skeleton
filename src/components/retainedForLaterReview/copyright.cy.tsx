import React from 'react';
import Copyright from '../../src/components/retainedForLaterReview/copyright';

describe('<Copyright />', () => {
  it('renders should have appropriate components', () => {
    cy.mount(<Copyright />);

    // Div 2 components
    cy.get('div').should('have.length', '2');
    // Archor component & attribute
    cy.get('a').should('have.attr', 'href', '/');
    // image component & attributes
    cy.get('img').should('have.attr', 'src', '/images/logo-dia.svg');
    cy.get('img').should('have.attr', 'alt', 'SKA Observatory');
    // span / copyright component
    cy.get('span').should('have.attr', 'class', 'copyright');
    cy.get('span').should('have.contain', '©');
  });
});
