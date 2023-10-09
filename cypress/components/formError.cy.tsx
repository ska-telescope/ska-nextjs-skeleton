import React from "react";
import FormError from "@/components/formError";

describe("<FormError />", () => {
  const className = "testClass";
  const error = "error message";
  it("renders should have appropriate components", () => {
    cy.mount(<FormError className={className} value={error} />);

    const label = cy.get("label");
    label.should("have.length", "1");
    label.should("have.attr", "class", "label");

    const span = cy.get("span");
    span.should("have.length", "1");
    span.should("have.attr", "class", className);
    span.should("have.text", error);
  });
});
