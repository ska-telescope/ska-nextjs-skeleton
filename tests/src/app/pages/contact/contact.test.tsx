import { render } from "@testing-library/react";
import { expect } from "@jest/globals";
import "@testing-library/jest-dom";
import ContactPage from "@/pages/contact/index";

describe("ContactPage", () => {
  it("renders with all props should return button with appropriate attributes", () => {
    render(<ContactPage />);

    expect(document.querySelector("form")?.length).toBe(4);
    expect(document.querySelectorAll("span")?.length).toBe(3);
    expect(document.querySelectorAll("label")?.length).toBe(3);
    expect(document.querySelectorAll("input")?.length).toBe(2);
    expect(document.querySelectorAll("textarea")?.length).toBe(1);
    expect(document.querySelectorAll("button")?.length).toBe(1);
  });
});
