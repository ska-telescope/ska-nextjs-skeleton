import theme from "@/theme";
import "@testing-library/jest-dom";

describe("theme", () => {
  it("should return specific attributes", () => {
    expect(theme.components).toStrictEqual({});
  });
});
