import React from "react";
import ContactForm from "../../src/components/retainedForLaterReview/contactForm";

describe("<FormError />", () => {
  it("renders should have appropriate components", () => {
    cy.mount(<ContactForm />);

    cy.get("div").should("have.length", "9");
    // 3 Label components and appropriate attributes
    cy.get("label").should("have.length", "3");
    cy.get("label").eq(0).should("have.text", "Your name");
    cy.get("label").eq(0).should("have.attr", "class", "label");
    cy.get("label").eq(1).should("have.text", "Your email");
    cy.get("label").eq(1).should("have.attr", "class", "label");
    cy.get("label").eq(2).should("have.text", "Your message");
    cy.get("label").eq(2).should("have.attr", "class", "label");
    // 3 span components and appropriate attributes
    cy.get("span").should("have.length", "3");
    cy.get("span").eq(0).should("have.text", "Your name");
    cy.get("span").eq(0).should("have.attr", "class", "label-text");
    cy.get("span").eq(2).should("have.text", "Your email");
    cy.get("span").eq(2).should("have.attr", "class", "label-text");
    cy.get("span").eq(2).should("have.text", "Your message");
    cy.get("span").eq(2).should("have.attr", "class", "label-text");
    // 2 input components and appropriate attributes
    cy.get("input").should("have.length", "2");
    cy.get("input").eq(0).should("have.attr", "type", "text");
    cy.get("input").eq(0).should("have.attr", "name", "name");
    cy.get("input")
      .eq(0)
      .should("have.attr", "class", "input input-bordered w-full max-w-xs");
    cy.get("input").eq(0).should("have.attr", "value", "");
    cy.get("input").eq(1).should("have.attr", "type", "text");
    cy.get("input").eq(1).should("have.attr", "name", "email");
    cy.get("input")
      .eq(1)
      .should("have.attr", "class", "input input-bordered w-full max-w-xs");
    cy.get("input").eq(1).should("have.attr", "value", "");
    // textarea components and appropriate attributes
    cy.get("textarea").should("have.length", "1");
    cy.get("textarea").should("have.attr", "type", "text");
    cy.get("textarea").should("have.attr", "name", "message");
    cy.get("textarea").should(
      "have.attr",
      "class",
      "textarea textarea-bordered h-24",
    );
    cy.get("textarea").should("have.text", "");
    // button components and appropriate attributes
    cy.get("button").should("have.length", "1");
    cy.get("button").should("have.attr", "type", "submit");
    cy.get("button").should("have.attr", "class", "btn btn-primary");
    cy.get("button").should("have.text", "Submit");
  });
});
