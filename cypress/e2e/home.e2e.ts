/// <reference types="cypress"/>
// import { benefits } from '../../src/components/intro';

context("Home Page", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000");
    });
  
    it("should have a title contains SKAO", () => {
      cy.title().should('contains', 'SKAO')
    });

    it("render should have h1 component with welcome and SKAO", () => {
      cy.get('main').should('have.length', '1');
      const h1 = cy.get('h1');
      h1.should('have.length', '1');
      h1.should('have.text', 'OSO Next.js skeleton project');
    });

    it("render should have two h2 components and text", () => {
      cy.get('h2').should('have.length', '2');
      cy.get('h2').eq(0).should('have.text', 'Overview');
      cy.get('h2').eq(1).should('have.text', 'Key Benefits');
    });
  
    it("render should have six h3 components and text", () => {
      cy.get('h3').should('have.length', '6');
      cy.get('h3').eq(0).should('have.text', 'Next.js and TypeScript Synergy');
      cy.get('h3').eq(1).should('have.text', 'Comprehensive Testing Suite');
      cy.get('h3').eq(2).should('have.text', 'Optimized for Performance');
      cy.get('h3').eq(3).should('have.text', 'Developer-Friendly Tooling');
      cy.get('h3').eq(4).should('have.text', 'Testing Automation');
      cy.get('h3').eq(5).should('have.text', 'Documentation and Best Practices');
      cy.get('link').should('have.length', '5');
    });
  
    it("render should have two images components and text", () => {
      // 2 image components
      cy.get('img').should('have.length', '2');
      const img1 = cy.get('img').eq(0);
      img1.should('have.attr', 'src', '/images/skao.svg');
      img1.should('have.attr', 'alt', 'SKAO Logo');
      const img2 = cy.get('img').eq(1);
      img2.should('have.attr', 'src', '/images/logo-dia.svg');
      img2.should('have.attr', 'alt', 'SKA Observatory');
    });
  
    it("render should have two archors components and text", () => {
      // 2 archors component
      cy.get('a').should('have.length', '2');
      const archor1 = cy.get('a').eq(0);
      archor1.should('have.attr', 'href', 'https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app');
      archor1.should('have.attr', 'target', '_blank');
      archor1.should('have.attr', 'rel', 'noopener noreferrer');
      const archor2 = cy.get('a').eq(1);
      archor2.should('have.attr', 'href', '/');
    });
  
    it("render should have one span components and copyright", () => {
      // copyright
      const span = cy.get('span.copyright');
      span.should('have.length', '1');
      span.should('contain.text', '©')
    });
});
  
export {}
