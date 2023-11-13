import React from "react";
import Footer from "../../src/components/retainedForLaterReview/footer";

describe("<Footer />", () => {
  it("renders should have appropriate components", () => {
    cy.mount(<Footer />);

    // footer component
    cy.get("footer").should("have.attr", "class", "footer");
    cy.get("footer").should("have.attr", "id", "footer");
    // Div 3 component
    cy.get("div").should("have.length", "3");
    // Archor component & attribute
    cy.get("a").should("have.attr", "href", "/");
    // Archor component &  attributes
    cy.get("img").should("have.attr", "src", "/images/logo-dia.svg");
    cy.get("img").should("have.attr", "alt", "SKA Observatory");
    // p / copyright component
    cy.get("p").should("have.contain", "©");
  });
});
