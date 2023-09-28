import React from 'react';
import Intro, { benefits } from '@/components/intro';

describe('<Intro />', () => {
  it('renders should have appropriate components', () => {
    cy.mount(<Intro/>);

    cy.get('div').should('have.attr', 'id', 'introduction');
    const h1 = cy.get('h1');
    h1.should('contains', 'OSO Next.js skeleton prject');
    cy.get('h2').should('have,length', '2');
    cy.get('h3').should('have,length', benefits.length);
    cy.get('ul').should('have,length', benefits.length);
    const totalLi = benefits.reduce((benefit, total) => total + benefit.contents.length, 0);
    cy.get('li').should('have,length', totalLi);
  });
});
