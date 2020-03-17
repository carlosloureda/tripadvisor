import React from "react";
import MyAccount from "./MyAccount";

import renderer from "react-test-renderer";

test("renders correctly", () => {
  const tree = renderer.create(<MyAccount />).toJSON();
  expect(tree).toMatchSnapshot();
});
