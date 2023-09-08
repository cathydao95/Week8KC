import { render, queryByText, container } from "@testing-library/react";
import App from "./App";
import Header from "./components/header";
import Form from "./components/form";
import Item from "./components/item";

test("Header component is rendered correctly", () => {
  const { getByText } = render(<Header />);
  const header1Element = getByText("Hello Techtonica!");
  const header4Element = getByText("This is a Gratitude List");

  expect(header1Element).toBeDefined();
  expect(header4Element).toBeDefined();
});

describe("Testing the Form", () => {
  test("Form renders correctly", () => {
    const { getByTestId } = render(<Form />);
    const formElement = getByTestId("form");
    expect(formElement).toBeDefined();
  });
});

describe("Testing Items are rendered correctly", () => {
  test("items in the list (Item component) are rendered correctly", () => {
    const item = { text: "Gratitude Item" };
    const { getByText } = render(<Item item={item} />);
    const itemElement = getByText("Gratitude Item");
    expect(itemElement).toBeDefined();
  });

  test("Items are not rendered if text empty", () => {
    const item = { text: "" };
    const { container } = render(<Item item={item} />);
    const itemElement = queryByText(container, "");
    expect(itemElement).toBeDefined();
    expect(itemElement.tagName).toBe("DIV");
    expect(itemElement.textContent).toBe("");
  });
});
