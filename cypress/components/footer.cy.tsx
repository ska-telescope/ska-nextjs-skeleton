import React from 'react';
import Footer from '@/components/footer';

describe('<Footer />', () => {
  it('renders should have appropriate components', () => {
    cy.mount(<Footer/>);

    // footer component
    const footer = cy.get('footer');
    footer.should('have.attr', 'class', 'footer');
    footer.should('have.attr', 'id', 'footer');
    // Div 3 component
    const divs = cy.get('div');
    divs.should('have.length', '3');
    // Archor component
    const archor = cy.get('a');
    archor.should('have.attr', 'href', '/en');
    archor.should('have.attr', 'rel', 'home');
    archor.should('have.attr', 'class', 'logo');
    // image component
    const image = cy.get('img');
    image.should('have.attr', 'src', '/images/logo-dia.svg');
    image.should('have.attr', 'alt', 'SKA Observatory');
    // span / copyright component
    const span = cy.get('span');
    span.should('have.attr', 'class', 'copyright');
    span.should('have.contain', '©');
  });
});
