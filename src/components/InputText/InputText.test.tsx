import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InputText from "./InputText";

describe("Input Text", () => {
  it("should render a input type text", () => {
    render(<InputText />);
    expect(screen.getByTestId("InputText")).toBeInTheDocument();
  });

  it("should render a input type text with a placeholder", () => {
    render(<InputText placeholder="Placeholder" />);
    expect(screen.getByPlaceholderText("Placeholder")).toBeInTheDocument();
  });

  it("should execute onchage on type", () => {
    const onChange = jest.fn();
    render(<InputText onChange={onChange} />);
    const input = screen.getByTestId("InputText");
    userEvent.clear(input);
    userEvent.type(input, "Test");
    expect(onChange).toHaveBeenCalled();
    expect(input.value).toBe("Test");
  });
});
