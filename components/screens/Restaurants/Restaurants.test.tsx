import React from "react";
import Restaurants from "./Restaurants";

import renderer from "react-test-renderer";

test("renders correctly", () => {
  const tree = renderer.create(<Restaurants />).toJSON();
  expect(tree).toMatchSnapshot();
});
