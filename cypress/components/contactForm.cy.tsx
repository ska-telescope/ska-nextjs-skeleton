import React from 'react';
import ContactForm from '@/components/contactForm';

describe('<FormError />', () => {
  it('renders should have appropriate components', () => {
    cy.mount(<ContactForm />);

    cy.get('div').should('have.length', '9');
    // 3 Label components and appropriate attributes
    cy.get('label').should('have.length', '3');
    const label1 = cy.get('label').eq(0);
    label1.should('have.text', 'Your name');
    label1.should('have.attr', 'class', 'label')
    const label2 = cy.get('label').eq(1);
    label2.should('have.text', 'Your email');
    label2.should('have.attr', 'class', 'label')
    const label3 = cy.get('label').eq(2);
    label3.should('have.text', 'Your message');
    label3.should('have.attr', 'class', 'label')
    // 3 span components and appropriate attributes
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
  });
});
