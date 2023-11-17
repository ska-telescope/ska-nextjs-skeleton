import WelcomeBanner from './welcomeBanner';

it('verify welcome banner elements', () => {
  cy.mount(<WelcomeBanner></WelcomeBanner>);

  cy.get('[data-testid="titleId"]').contains('Welcome').should('be.visible');
  cy.get('[data-testid="text1Id"]')
    .contains('simple implementation of a NextJS Application')
    .should('be.visible');
  cy.get('[data-testid="text2Id"]')
    .contains('used as a basis for new applications for the SKAO')
    .should('be.visible');
  cy.get('[data-testid="text3Id"]')
    .contains('MUI grid which can be used for component layout')
    .should('be.visible');
  cy.get('[data-testid="text4Id"]')
    .contains('see the documentation available at this link')
    .should('be.visible');
  cy.get('[data-testid="text5Id"]')
    .contains(
      'https://developer.skao.int/projects/ska-gui-components/en/latest/?badge=latest',
    )
    .should('be.visible');
});
