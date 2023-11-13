import ButtonDown from './buttonDown';

it('verify buttonDown elements', () => {
  cy.mount(<ButtonDown></ButtonDown>);
  cy.get('[data-testid="continueButton"]').click();
  cy.get('[data-testid="homeButton"]').should('be.visible');
});