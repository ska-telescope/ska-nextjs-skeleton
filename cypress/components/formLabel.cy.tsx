import React from 'react';
import FormLabel from '@/components/formLabel';

describe('<FormLabel />', () => {
  const className = 'testClass';
  const value = 'value';
  it('renders should have appropriate components', () => {
    cy.mount(<FormLabel className={className} value={value} />);

    const label = cy.get('label');
    label.should('have.length', '1');
    label.should('have.attr', 'class', 'label');

    const span = cy.get('span');
    span.should('have.length', '1');
    span.should('have.attr', 'class', className);
    span.should('have.text', value);
  });
});
