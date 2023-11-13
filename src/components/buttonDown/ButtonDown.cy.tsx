import ButtonDown from './ButtonDown';

it('verify buttonDown elements', () => {
  cy.mount(<ButtonDown></ButtonDown>);
  cy.get('[data-testid="continueButton"]').should('be.visible');
});