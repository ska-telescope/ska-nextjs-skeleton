import ButtonUp from './ButtonUp';

it('verify buttonUp elements', () => {
  cy.mount(<ButtonUp></ButtonUp>);
  cy.get('[data-testid="homeButton"]').should('be.visible');
});
