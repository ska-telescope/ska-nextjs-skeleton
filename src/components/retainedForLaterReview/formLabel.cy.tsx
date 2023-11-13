import React from 'react';
import FormLabel from '../../src/components/retainedForLaterReview/formLabel';

describe('<FormLabel />', () => {
  const className = 'testClass';
  const value = 'value';
  it('renders should have appropriate components', () => {
    cy.mount(<FormLabel className={className} value={value} />);

    cy.get('label').should('have.length', '1');
    cy.get('label').should('have.attr', 'class', 'label');

    cy.get('span').should('have.length', '1');
    cy.get('span').should('have.attr', 'class', className);
    cy.get('span').should('have.text', value);
  });
});
