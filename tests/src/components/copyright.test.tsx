import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Copyright from "../../../src/components/retainedForLaterReview/copyright";

describe("Copyright", () => {
  beforeEach(() => {
    render(<Copyright />);
  });

  it("renders should return link with appropriate attributes", () => {
    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
    expect(link.getAttribute("class")).toContain("logo");
    expect(link.getAttribute("href")).toBe("/");
  });

  it("renders should return img with appropriate attributes", () => {
    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
    expect(img.getAttribute("alt")).toBe("SKA Observatory");
    expect(img.getAttribute("src")).toBe("/images/logo-dia.svg");
  });

  it("renders should return span with appropriate attributes", () => {
    const span = document.querySelector("div span");
    expect(span).toBeInTheDocument();
    expect(span.getAttribute("class")).toBe("copyright");
    expect(span?.textContent).toContain("©");
  });
});
