import React from "react";
import Footer from "@/components/footer";

describe("<Footer />", () => {
  it("renders should have appropriate components", () => {
    cy.mount(<Footer />);

    // footer component
    const footer = cy.get("footer");
    footer.should("have.attr", "class", "footer");
    footer.should("have.attr", "id", "footer");
    // Div 3 component
    const divs = cy.get("div");
    divs.should("have.length", "3");
    // Archor component & attribute
    cy.get("a").should("have.attr", "href", "/");
    // Archor component &  attributes
    const image = cy.get("img");
    image.should("have.attr", "src", "/images/logo-dia.svg");
    image.should("have.attr", "alt", "SKA Observatory");
    // p / copyright component
    cy.get("p").should("have.contain", "©");
  });
});
