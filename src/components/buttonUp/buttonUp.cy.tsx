import ButtonUp from './buttonUp';

it('verify buttonUp elements', () => {
  cy.mount(<ButtonUp></ButtonUp>);
  cy.get('[data-testid="homeButton"]').click();
  cy.get('[data-testid="continueButton"]').should('be.visible');
});

