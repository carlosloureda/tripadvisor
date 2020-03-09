import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Restaurants from "../../screens/Restaurants";

const Stack = createStackNavigator();
const RestaurantsStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Restaurants" component={Restaurants} />
    </Stack.Navigator>
  );
};

export default RestaurantsStackNavigator;
