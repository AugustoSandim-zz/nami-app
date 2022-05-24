import { render, RenderResult, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import Button from "./Button";

describe("Button", () => {
  function mount(
    onClick: VoidFunction,
    children?: React.ReactNode
  ): RenderResult {
    return render(<Button onClick={onClick}>{children}</Button>);
  }

  const onClickMock = jest.fn();

  it("should render a button", async () => {
    mount(onClickMock);
    expect(screen.getByTestId("button")).toBeInTheDocument();
  });

  it("should render a child", async () => {
    const children = "Meu botão";
    mount(onClickMock, children);
    expect(screen.getByText(children)).toBeInTheDocument();
  });

  it("should execute onclick listener", async () => {
    const onClick = onClickMock;
    mount(onClick);
    userEvent.click(screen.getByTestId("button"));
    expect(onClick).toBeCalled();
  });
});
