import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "@/components/button";

describe("Button", () => {
  const mockClick = () => {};

  it("renders should return button with appropriate attributes", () => {
    render(<Button onClick={mockClick} className="testClass" />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button.getAttribute("class")).toBe("testClass");
    expect(button.getAttribute("type")).toBe("submit");
    expect(button.getAttribute("title")).toBe("");
  });

  it("renders with all props should return button with appropriate attributes", () => {
    render(
      <Button
        onClick={mockClick}
        type="reset"
        disabled={true}
        title="TEST"
        className="testClass"
      />,
    );
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button.getAttribute("class")).toBe("testClass");
    expect(button.getAttribute("type")).toBe("reset");
    expect(button.getAttribute("title")).toBe("TEST");
  });
});
