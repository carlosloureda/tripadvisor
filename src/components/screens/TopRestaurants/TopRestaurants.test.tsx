import React from "react";
import TopRestaurants from "./TopRestaurants";

import renderer from "react-test-renderer";

test("renders correctly", () => {
  const tree = renderer.create(<TopRestaurants />).toJSON();
  expect(tree).toMatchSnapshot();
});
