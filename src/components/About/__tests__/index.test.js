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

// The index.test.js.snap file is a serialized version of the component's node structure, which includes elements, attributes, and text content. This file, stored in the __snapshots__ folder, will serve as the base model of the component's structure, and will be compared against new snapshots that are created by the asFragment function.
