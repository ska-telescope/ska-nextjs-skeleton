/// <reference types="cypress"/>

context("Contact Page", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/contact");
    });
  
    it("render should have h1 component with welcome and SKAO", () => {
      cy.get('div').should('have.length', '12');
      const h1 = cy.get('h1');
      h1.should('have.length', '1');
      h1.should('have.attr', 'class', 'text-4xl my-8');
      h1.should('have.text', 'Contact Form with validation');
    
      const span = cy.get('span');
      span.should('have.length', '3');
      const span1 = cy.get('span').eq(0);
      span1.should('have.text', 'Your name');
      span1.should('have.attr', 'class', 'label-text')
      const span2 = cy.get('span').eq(1);
      span2.should('have.text', 'Your email');
      span2.should('have.attr', 'class', 'label-text')
      const span3 = cy.get('span').eq(2);
      span3.should('have.text', 'Your message');
      span3.should('have.attr', 'class', 'label-text');

      // 2 input components and appropriate attributes
      cy.get('input').should('have.length', '2');
      const input1 = cy.get('input').eq(0);
      input1.should('have.attr', 'type', 'text');
      input1.should('have.attr', 'name', 'name');
      input1.should('have.attr', 'class', 'input input-bordered w-full max-w-xs');
      input1.should('have.attr', 'value', '');
      const input2 = cy.get('input').eq(1);
      input2.should('have.attr', 'type', 'text');
      input2.should('have.attr', 'name', 'email');
      input2.should('have.attr', 'class', 'input input-bordered w-full max-w-xs');
      input2.should('have.attr', 'value', '');
      // textarea components and appropriate attributes
      const textarea = cy.get('textarea');
      textarea.should('have.length', '1');
      textarea.should('have.attr', 'type', 'text');
      textarea.should('have.attr', 'name', 'message');
      textarea.should('have.attr', 'class', 'textarea textarea-bordered h-24');
      textarea.should('have.text', '');
      // button components and appropriate attributes
      const button = cy.get('button');
      button.should('have.length', '1');
      button.should('have.attr', 'type', 'submit');
      button.should('have.attr', 'class', 'btn btn-primary');
      button.should('have.text', 'Submit');
      cy.get('button').should('be.enabled');
    });

    it("name and message changed render should generate errors and submit button disbled", () => {
      const input2 = cy.get('input').eq(1);
      input2.type('1@a').trigger('change');
      const textarea = cy.get('textarea');
      textarea.type('1@a').trigger('change');

      cy.get('span').should('have.length', '6');
      cy.get('span').eq(1).should('have.text', 'Please enter your name')
      cy.get('span').eq(3).should('have.text', 'Please enter a valid email')
      cy.get('span').eq(5).should('have.text', 'String must contain at least 150 character(s)')
      cy.get('button').should('be.disabled');
    });

    it("message changed render should generate errors and submit button disbled", () => {
      const textarea = cy.get('textarea');
      textarea.type('1@a').trigger('change');

      cy.get('span').should('have.length', '6');
      cy.get('span').eq(1).should('have.text', 'Please enter your name')
      cy.get('span').eq(3).should('have.text', 'Required')
      cy.get('span').eq(5).should('have.text', 'String must contain at least 150 character(s)')
      cy.get('button').should('be.disabled');
    });

    it("valid input render should not generate errors and submit button enabled", () => {
      cy.get('input').eq(0).type('Richard Smith').trigger('change');
      cy.get('input').eq(1).type('richard.smith@test.com').trigger('change');
      cy.get('textarea').type('This is a very long message which is longer than 150 characters, This field is to prevent the validation of message section of the field to generate validation eeror').trigger('change');

      cy.get('span').should('have.length', '3');
      cy.get('button').should('be.enabled');
    });
});
  
export {}
