/*
import React from 'react';
import Button from '../../src/components/retainedForLaterReview/button';

describe('<Button />', () => {
  it('renders with text and onClick', () => {
    cy.mount(<Button onClick={() => {}}>Click me</Button>);

    cy.get('Button')
      .should('have.text', 'Click me')
      .and('not.have.attr', 'disabled');

    cy.get('Button').click();

    cy.get('Button')
      .should('have.text', 'Click me')
      .and('not.have.attr', 'disabled');
  });

  it('renders with text and onClick and disabled', () => {
    cy.mount(
      <Button onClick={() => {}} disabled>
        Click me
      </Button>,
    );

    cy.get('Button').should('have.attr', 'disabled');
  });

  it('renders with text and onClick and disabled and type', () => {
    cy.mount(
      <Button onClick={() => {}} disabled type="submit">
        Click me
      </Button>,
    );

    cy.get('Button').should('have.attr', 'type', 'submit');
  });

  it('renders with text and onClick and disabled and type and className', () => {
    cy.mount(
      <Button onClick={() => {}} disabled type="submit" className="test">
        Click me
      </Button>,
    );

    cy.get('Button').should('have.attr', 'type', 'submit');
  });
});
*/