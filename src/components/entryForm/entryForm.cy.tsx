import EntryForm from './entryForm';

it('verify entry form elements', () => {
  cy.mount(<EntryForm></EntryForm>);
  cy.get('[data-testid="textId"]').should('be.visible');
  cy.get('[data-testid="numberId"]').should('be.visible');
  cy.get('[data-testid="testId"]').should('be.visible');
  cy.get('[data-testid="statusId"]').should('be.visible');
});