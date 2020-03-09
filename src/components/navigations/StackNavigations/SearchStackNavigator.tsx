import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Search from "../../screens/Search";

const Stack = createStackNavigator();
const SearchStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
};

export default SearchStackNavigator;
