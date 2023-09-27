import React from 'react';
import Footer from './footer';

describe('<Footer />', () => {
  it('renders should have appropriate components', () => {
    cy.mount(<Footer/>);

    cy.get('footer').should('have.attr', 'className', 'footer');
    cy.get('footer').should('have.attr', 'id', 'footer');
    cy.get('div').should('have.attr', 'className', 'footer-bottom');
    const a = cy.get('a');
    a.should('have.attr', 'href', '/en');
    a.should('have.attr', 'rel', 'home');
    a.should('have.attr', 'className', 'logo');
    cy.get('Image').should('have.attr', 'src', '/images/logo-dia.svg');
    cy.get('Image').should('have.attr', 'alt', 'SKA Observatory');

    const span = cy.get('span');
    span.should('have.attr', 'className', 'copyright');
  });
});
