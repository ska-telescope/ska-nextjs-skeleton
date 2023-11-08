import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactForm from "../../../src/components/retainedForLaterReview/contactForm";

describe("ContactForm", () => {
  it("renders with all props should return button with appropriate attributes", () => {
    render(<ContactForm />);

    const form = document.querySelector("form");
    expect(form?.length).toBe(4);
    // Form Labels
    const spans = document.querySelectorAll("span");
    expect(spans?.length).toBe(3);
    expect(spans[0].innerHTML).toBe("Your name");
    expect(spans[1].innerHTML).toBe("Your email");
    expect(spans[2].innerHTML).toBe("Your message");
    const labels = document.querySelectorAll("label");
    expect(labels?.length).toBe(3);
    expect(labels[0].innerHTML).toBe(
      '<span class="label-text">Your name</span>',
    );
    expect(labels[1].innerHTML).toBe(
      '<span class="label-text">Your email</span>',
    );
    expect(labels[2].innerHTML).toBe(
      '<span class="label-text">Your message</span>',
    );
    // Two input box
    const textboxes = document.querySelectorAll("input");
    expect(textboxes?.length).toBe(2);
    expect(textboxes[0].getAttribute("class")).toBe(
      "input input-bordered w-full max-w-xs",
    );
    expect(textboxes[0].getAttribute("type")).toBe("text");
    expect(textboxes[0].getAttribute("name")).toBe("name");
    expect(textboxes[1].getAttribute("class")).toBe(
      "input input-bordered w-full max-w-xs",
    );
    expect(textboxes[1].getAttribute("type")).toBe("text");
    expect(textboxes[1].getAttribute("name")).toBe("email");
    // One TextArea
    const textarea = document.querySelectorAll("textarea");
    expect(textarea?.length).toBe(1);
    expect(textarea[0]?.getAttribute("class")).toBe(
      "textarea textarea-bordered h-24",
    );
    expect(textarea[0]?.getAttribute("type")).toBe("text");
    expect(textarea[0]?.getAttribute("name")).toBe("message");
    // One Button
    const button = document.querySelectorAll("button");
    expect(button?.length).toBe(1);
    expect(button[0]?.getAttribute("class")).toBe("btn btn-primary");
    expect(button[0]?.innerHTML).toBe("Submit");
  });
});
