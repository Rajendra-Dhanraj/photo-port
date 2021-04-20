import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import About from "..";

// This will ensure that after each test, we won't have any leftover memory data that could give us false results.
afterEach(cleanup);

// Then we'll use the describe function to declare the component we're testing, by adding the following code:
describe("About component", () => {
  // First test: The first test will be the baseline to verify that the component is rendering.

  it("renders", () => {
    render(<About />);
  });

  // Second test
  it("matches snapshot DOM node structure", () => {
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  });
});
