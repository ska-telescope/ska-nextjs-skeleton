import React from 'react';
import FormError from '../../src/components/retainedForLaterReview/formError';

describe('<FormError />', () => {
  const className = 'testClass';
  const error = 'error message';
  it('renders should have appropriate components', () => {
    cy.mount(<FormError className={className} value={error} />);

    cy.get('label').should('have.length', '1');
    cy.get('label').should('have.attr', 'class', 'label');

    cy.get('span').should('have.length', '1');
    cy.get('span').should('have.attr', 'class', className);
    cy.get('span').should('have.text', error);
  });
});
