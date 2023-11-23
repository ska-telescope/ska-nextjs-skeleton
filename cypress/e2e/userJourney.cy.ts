context('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Header : Verify external link to skao site', () => {
    cy.get('[data-testid="skaoLogo"]').click();
  });

  it('Header : Verify light/dark mode is available', () => {
    cy.get('[data-testid="Brightness7Icon"]').click();
    cy.get('[data-testid="Brightness4Icon"]').should('be.visible');
    cy.get('[data-testid="Brightness4Icon"]').click();
    cy.get('[data-testid="Brightness7Icon"]').should('be.visible');
  });

  it('Footer : Verify Title and Telescope selector', () => {
    cy.get('[data-testid="footerId"]').contains('Copyright 2023 | DRAFT').should('be.visible');
  });

  it('should have a title as NextJS Skeleton', () => {
    cy.title().should('contains', 'NextJS Skeleton');
  });

  it('Render: Should have content detailing usage', () => {
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
      .contains('https://developer.skao.int/projects/ska-gui-components/en/latest/?badge=latest')
      .should('be.visible');
  });

  it('Render : Verify continue button and page', () => {
    cy.get('[data-testid="continueButton"]').click().wait(200);
    cy.get('[data-testid="textId"]').should('be.visible');
    cy.get('[data-testid="numberId"]').should('be.visible');
    cy.get('[data-testid="testId"]').should('be.visible');
    cy.get('[data-testid="statusId"]').should('be.visible');
    cy.get('[data-testid="homeButton"]').should('be.visible');
  });
});
