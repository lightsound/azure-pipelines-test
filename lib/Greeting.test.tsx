import React from "react";
import { render } from "react-testing-library";
import Greeting from "./Greeting";

it("renders correctly", () => {
  const { asFragment } = render(<Greeting text="react" />);
  expect(asFragment()).toMatchSnapshot();
});
