/// <reference types="cypress"/>

context("Home Page", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000");
    });
  
    it("should have a title contains SKAO", () => {
      cy.title().should('contains', 'SKAO')
    });

    it("render should have h1 component with welcome and SKAO", () => {
      cy.get('main').should('have.length', '1');
      cy.get('h1').should('have.length', '1');
      cy.get('h2').should('have.length', '2');
      cy.get('h3').should('have.length', '6');
      cy.get('link').should('have.length', '5');
      cy.get('img').should('have.length', '2');
      cy.get('a').should('have.length', '2');

      // footer
      const span = cy.get('span');
      span.should('have.length', '1');
      span.get('.copyright').should('have.length', '1');
    });
});
  
export {}
