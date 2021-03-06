import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TopRestaurants from "../../screens/TopRestaurants";

const Stack = createStackNavigator();
const TopRestaurantsStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TopRestaurants" component={TopRestaurants} />
    </Stack.Navigator>
  );
};

export default TopRestaurantsStackNavigator;
