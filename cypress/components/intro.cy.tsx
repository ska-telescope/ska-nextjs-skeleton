import React from "react";
import Intro, { benefits } from "@/components/intro";

describe("<Intro />", () => {
  it("renders should have appropriate components", () => {
    cy.mount(<Intro />);

    const divs = cy.get("div");
    divs.should("have.length", "3");
    cy.get("h1").first().contains("OSO Next.js skeleton project");
    cy.get("h2").should("have.length", "2");
    cy.get("h3").should("have.length", benefits.length);
    cy.get("ul").should("have.length", benefits.length);
    let total: number = benefits.length;
    benefits.forEach((benefit) => {
      total += benefit.contents ? benefit.contents.length : 0;
    });
    cy.get("li").should("have.length", total);
  });
});
