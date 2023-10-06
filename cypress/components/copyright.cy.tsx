import React from 'react';
import Copyright from '@/components/copyright';

describe('<Copyright />', () => {
  it('renders should have appropriate components', () => {
    cy.mount(<Copyright/>);

    // Div 2 components
    const divs = cy.get('div');
    divs.should('have.length', '2');
    // Archor component & attribute
    cy.get('a').should('have.attr', 'href', '/');
    // image component & attributes
    const image = cy.get('img');
    image.should('have.attr', 'src', '/images/logo-dia.svg');
    image.should('have.attr', 'alt', 'SKA Observatory');
    // span / copyright component
    const span = cy.get('span')
    span.should('have.attr', 'class', 'copyright');
    span.should('have.contain', '©');
  });
});
