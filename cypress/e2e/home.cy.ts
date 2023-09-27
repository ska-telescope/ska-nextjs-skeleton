/// <reference types="cypress"/>

context("Home Page", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000");
    });
  
    it("should have a title with Skao", () => {
      cy.title().contains("Skao");
    });

    it("should render the home page and display a message", () => {
      cy.get("h1").contains("Welcome");
    });
});
  
export {}
