import { render, screen } from "@testing-library/react";
import App from "./App";
import Header from "./components/Header";

test("render App Component", () => {
  render(<App />);
});

describe("Logo", () => {
  test('Logo must have src = "https://media1.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif" and alt = "react-logo-gif"', () => {
    render(<Header />);
    const logo = screen.getByRole("img");
    expect(logo).toHaveAttribute(
      "src",
      "https://media1.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif"
    );
    expect(logo).toHaveAttribute("alt", "react-logo-gif");
  });
});

test("check header links", () => {
  const { getByText } = render(<Header />);
  const a = getByText("me");
  expect(a).toBeTruthy();

  expect(screen.getByText("me").closest("a")).toHaveAttribute(
    "href",
    "https://cdt.works/"
  );
  expect(screen.getByText("repo").closest("a")).toHaveAttribute(
    "href",
    "https://github.com/christiandavidturner/The-React-Times"
  );
});
